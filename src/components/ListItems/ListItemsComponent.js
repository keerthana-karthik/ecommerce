import React, { Component } from "react";
import * as actions from "../../store/actions/index";
import axios from "axios";
import { connect } from 'react-redux';
import SideCartComponent from "../SideCart/SideCartComponent";
import indexClasses from "../../index.css";
import { getCategoryDisplayName } from "../../store/helper";

class ListItemsComponent extends Component {
    componentDidMount() {
        // this.props.onInitItems();
        axios.get("https://my-json-server.typicode.com/keerthana-karthik/ecommerce/dresses")
        .then(response => {
            this.props.onInitItems(response.data);
        });
    }
    onAddToCart = (event, dressIdentifier) => {
        let selectedItem = {};
        let localSelectedDresses = [];
        localSelectedDresses = [...this.props.selecteddressesArray];
        for(let index in this.props.dressesArray) {
            if(this.props.dressesArray[index].id === dressIdentifier) {
                selectedItem = {
                    ...this.props.dressesArray[index]
                };
                localSelectedDresses.push(selectedItem);
                this.props.setSelectedItems(localSelectedDresses);
            }
        }
    }
    render() {
        const categoryDisplayName = getCategoryDisplayName(this.props.match.params.id);
        const dressArray = [...this.props.dressesArray];
        const dresses = dressArray.map(dress => {
            return (
                <div className={[indexClasses.responsiveCol ,indexClasses.l3, indexClasses.s6].join(" ")}>
                    <div className={indexClasses.responsiveContainer}>
                        <div className={indexClasses.positionDisplayContainer}>
                            <img src={dress.imgUrl} alt="Dress image" className={indexClasses.width100}></img>
                            <span className={[indexClasses.positionDisplayTopleft, indexClasses.styleTag].join(" ")}>New</span>
                            <div className={[indexClasses.positionDisplayMiddle, indexClasses.positionDisplayHover].join(" ")}>
                                <button
                                 onClick={event =>
                                    this.onAddToCart(event, dress.id)
                                 }
                                 className={[indexClasses.styleButton, indexClasses.styleBlack].join(" ")}>
                                    Add To Cart  <i className={[indexClasses.fa, indexClasses.faShoppingCart].join(" ")}></i>
                                </button>
                            </div>
                        </div>
                        <p>{dress.type} - {dress.material}<br></br><b>Rs {dress.price}</b></p>
                    </div>
                </div>
            );
        });
        return (
            <div className={[indexClasses.responsiveContainer, indexClasses.textLeft].join(" ")}>
                <header className={[indexClasses.responsiveContainer, indexClasses.fontSize24].join(" ")}>
                    <p id="pageTitle" className={indexClasses.positionLeft}>{categoryDisplayName}</p>
                </header>
                <div className={indexClasses.responsiveRow}>
                      {dresses}
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
export default connect(mapStateToProps, mapDispatchToProps)(ListItemsComponent);