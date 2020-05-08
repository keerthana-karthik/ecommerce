import React, { Component } from "react";
import * as actions from "../../store/actions/index";
import { connect } from 'react-redux';
import indexclasses from "../../index.css";
import homeclasses from "./HomeComponent.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import ListItemsComponent from "../ListItems/ListItemsComponent";
import ViewItemComponent from "../ManageItems/ViewItemComponent";
import ManageItemsComponent from "../ManageItems/ManageItemsComponent";
import CustomFormComponent from "../Forms/CustomFormComponent";
import PageNotFoundComponent from "../PageNotFound/PageNotFoundComponent";
import navBarClasses from "./NavBarComponent.css";
import { withRouter } from 'react-router-dom';

class HomeComponent extends Component {
  collapsed = true;
  state = {

    sideNavbarClasses: [navBarClasses.SideNavbar, navBarClasses.Close]
  }
  componentWillUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.collapsed = true;
      this.setState({
        sideNavbarClasses: [navBarClasses.SideNavbar, navBarClasses.Close]
      });
    }
  }
  componentDidUpdate(prevProps) {
    // this.collapsed = (this.collapsed) ? false : true;
  }
  onToggleButtonClick = () => {

    if (this.collapsed) {
      this.setState({
        sideNavbarClasses: [navBarClasses.SideNavbar, navBarClasses.Open]
      });
    } else {
      this.setState({
        sideNavbarClasses: [navBarClasses.SideNavbar, navBarClasses.Close]
      });
    }
    this.collapsed = (this.collapsed) ? false : true;

  }
  onPageBodyClick = () => {
    this.collapsed = true;
    this.setState({
      sideNavbarClasses: [navBarClasses.SideNavbar, navBarClasses.Close]
    });
  }
  render() {
    return (
      <div>
        <header className={navBarClasses.Navbar}>
          <div>
            <button className={navBarClasses.ToggleButton} onClick={this.onToggleButtonClick}>
              <span className={navBarClasses.ToggleBar}></span>
              <span className={navBarClasses.ToggleBar}></span>
              <span className={navBarClasses.ToggleBar}></span>
            </button>
            <a href="https://github.com/keerthana-karthik/react-basics/tree/master/src" className={navBarClasses.NavbarLink}>React Code</a>
          </div>
          <div className={navBarClasses.TopNavbar}>
            <ul className={navBarClasses.NavUl}>
              <li className={navBarClasses.NavLi}>
                <NavLink to="/addItem" className={homeclasses.Content} activeClassName={homeclasses.active}>
                  Add Item
                            </NavLink>
              </li>
              <li className={navBarClasses.NavLi}>
                <NavLink to="/items" className={homeclasses.Content} activeClassName={homeclasses.active}>
                  View Items
                            </NavLink>
              </li>
              <li className={navBarClasses.NavLi}>
                <NavLink to="/viewitem" className={homeclasses.Content} activeClassName={homeclasses.active}>
                  View Item
                            </NavLink>
              </li>
              <li className={navBarClasses.NavLi}>
                <NavLink to="/form" className={homeclasses.Content} activeClassName={homeclasses.active}>
                  Form
                            </NavLink>
              </li>

            </ul>
          </div>
          <div className={this.state.sideNavbarClasses.join(" ")}>
            <div className={navBarClasses.SideNavUl}>
            <div className={navBarClasses.SideNavLi}><NavLink to="/addItem" className={navBarClasses.SideNavContent} activeClassName={navBarClasses.active}>
                  Add Item
                            </NavLink></div>
            <div className={navBarClasses.SideNavLi}><NavLink to="/items" className={navBarClasses.SideNavContent} activeClassName={navBarClasses.active}>
                  View Items
                            </NavLink></div>
                            <div className={navBarClasses.SideNavLi}><NavLink to="/viewitem" className={navBarClasses.SideNavContent} activeClassName={navBarClasses.active}>
                  View Item
                            </NavLink></div>
              <div className={navBarClasses.SideNavLi}><NavLink to="/form" className={navBarClasses.SideNavContent} activeClassName={navBarClasses.active}>
                  Form
                            </NavLink></div>
             
            </div> 
          </div>
        </header>

        <div className={navBarClasses.PageBody} onClick={this.onPageBodyClick}>
          <Switch>
          <Route path="/addItem" exact component={ManageItemsComponent} />
          <Route path="/viewItem" exact component={ViewItemComponent} />
          <Route path="/items" exact component={ListItemsComponent} />
            <Route path="/form" exact component={CustomFormComponent} />
            <Redirect from="/" to="/form" />
            <Route component={PageNotFoundComponent} />
          </Switch>
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(props => <HomeComponent {...props} />));
