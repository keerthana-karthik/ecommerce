import React, { Component } from "react";
import * as actions from "../store/actions/index";

import { connect } from 'react-redux';
import SideCartComponent from "../components/SideCart/SideCartComponent";
import indexclasses from "../index.css";
import mainClasses from "./MainContainer.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import ListItemsComponent from "../components/ListItems/ListItemsComponent";
import ViewItemComponent from "../components/ManageItems/ViewItemComponent";
import ManageItemsComponent from "../components/ManageItems/ManageItemsComponent";
import CustomFormComponent from "../components/Forms/CustomFormComponent";
import PageNotFoundComponent from "../components/PageNotFound/PageNotFoundComponent";
import { getCategoriesMap } from "../store/helper";

import { withRouter } from 'react-router-dom';

class MainContainer extends Component {
    state= {
        showFloatingCart: false
    }
    openSideBar = () => {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    }

    closeSideBar = () => {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }
    onNavLinkClick = (event) => {
        // document.getElementById("pageTitle").innerHTML = event.currentTarget.innerText;
        this.closeSideBar();
    }
    onFloatingCartIconClick = () => {
        const localShowFloatingCart = this.state.showFloatingCart;
        this.setState({showFloatingCart: !localShowFloatingCart});
    }
    render() {
        const categories = getCategoriesMap().map(category => {
            return (
                <NavLink to={"/items/"+category.key} onClick={this.onNavLinkClick} className={mainClasses.styleBarItem} activeClassName={mainClasses.active}>{category.value}</NavLink>
            )
        });
        return (
            <div className={mainClasses.bodyWrapper}>
                {/* <!-- Sidebar/menu --> */}
                <nav className={[mainClasses.styleSidebar, mainClasses.styleBarBlock].join(" ")} id="mySidebar">
                    <div className={[indexclasses.responsiveContainer, indexclasses.positionDisplayContainer, indexclasses.paddingTopBottom16].join(" ")}>
                        <i onClick={this.closeSideBar} className={[indexclasses.fa, indexclasses.faRemove, indexclasses.displayNoneOnLarge, indexclasses.styleButton, indexclasses.positionDisplayTopright].join(" ")}></i>
                        <div className={indexclasses.letterSpacing4}>
                            <b><img src="https://res.cloudinary.com/imagesforwebpage/image/upload/v1588828307/logo_aab6mw.png" className={mainClasses.imgLogo}></img><br />Trendy North</b></div>
                    </div>
                    <div className={mainClasses.styleSidebarLinkWrapper}>
                        {categories}    
                    </div>
                    <a href="#footer" className={mainClasses.styleBarItem}>Contact Us</a>
                </nav>

                {/* <!-- Top menu on small screens --> */}
                <header className={[mainClasses.styleBar, indexclasses.positionTop, indexclasses.displayNoneOnLarge, indexclasses.styleBlack, indexclasses.fontSize24].join(" ")}>
                    
                    <div className={[mainClasses.styleBarItem].join(" ")}>
                        <i onClick={this.openSideBar} className={[indexclasses.fa, indexclasses.faBars].join(" ")}></i>
                    </div>
                    <div className={[mainClasses.styleBarItem, indexclasses.letterSpacing4].join(" ")}>
                        <img src="https://res.cloudinary.com/imagesforwebpage/image/upload/v1588828307/logo_aab6mw.png" className={mainClasses.imgLogo}></img>
                    </div>
                    
                    <a className={[mainClasses.styleBarIcons, indexclasses.positionRight].join(" ")}>
                        
                        <span onClick={this.onFloatingCartIconClick} data-count={this.props.selecteddressesArray.length} className={indexclasses.faStack}>
                            <i className={[indexclasses.fa, indexclasses.faShoppingCart, indexclasses.faStack2x].join(" ")}></i>
                        </span>
                    </a>
                </header>

                {/* // <!-- Overlay effect when opening sidebar on small screens --> */}
                <div className={[indexclasses.positionOverlay, indexclasses.cursorPointer, indexclasses.displayNoneOnLarge].join(" ")} onClick={this.closeSideBar} id="myOverlay"></div>

                {/* // <!-- !PAGE CONTENT! --> */}
                <div className={mainClasses.pageContentWrapper}>
                    <div className={[indexclasses.displayNoneOnLarge, mainClasses.marginTop83].join(" ")}></div>
                    <header className={[indexclasses.displayNoneOnSmall, indexclasses.responsiveContainer, indexclasses.fontSize24].join(" ")}>
                        {/* <p id="pageTitle" className={indexclasses.positionLeft}>Salwars</p> */}
                        <p className={indexclasses.positionRight}>
                            <i className={[indexclasses.fa, indexclasses.faSearch, indexclasses.marginRight16].join(" ")}></i>
                            <span onClick={this.onFloatingCartIconClick} data-count={this.props.selecteddressesArray.length} className={indexclasses.faStack}>
                                <i className={[indexclasses.fa, indexclasses.faShoppingCart, indexclasses.faStack2x].join(" ")}></i>
                            </span>
                        </p>
                    </header>

                    {/* //   <!-- Image header --> */}
                    <div className={[indexclasses.responsiveContainer].join(" ")}>
                        <Switch>
                            <Route path="/addItem" exact component={ManageItemsComponent} />
                            <Route path="/viewItem" exact component={ViewItemComponent} />
                            <Route path={"/items" + '/:id'} exact component={ListItemsComponent} />
                            <Route path="/form" exact component={CustomFormComponent} />
                            <Redirect from="/" to="/items/salwars" />
                            <Route component={PageNotFoundComponent} />
                        </Switch>
                    </div>
                    <SideCartComponent showFloatingCart={this.state.showFloatingCart}></SideCartComponent>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        dressesArray: state.dressManageReducer.dresses,
        selecteddressesArray: state.orderManageReducer.selectedDresses
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onInitItems: (items) => dispatch(actions.initItems(items)),
        setSelectedItems: (items) => dispatch(actions.setSelectedItems(items))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);