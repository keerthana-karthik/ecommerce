import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index";
import ButtonComponent from "../Forms/Button/ButtonComponent";
import QuantityButtonComponentt from "../Forms/QuantityButton/QuantityButtonComponent";
import indexClasses from "../../index.css";
import sideCartClasses from "../SideCart/SideCartComponent.css";
import { getCategoryDisplayName } from "../../store/helper";
import QuantityButtonComponent from "../Forms/QuantityButton/QuantityButtonComponent";

class ListItemsComponent extends Component {
    componentDidMount() {
        // this.props.onInitItems();
        axios.get("https://my-json-server.typicode.com/keerthana-karthik/ecommerce/dresses")
        .then(response => {
            this.props.onInitItems(response.data);
        });
    }
    getIndexInSelectedDressesArray = (dressIdentifier) => {
        let selectedItemIndex = -1;
        for(let index in this.props.selectedDressesArray) {
            if(this.props.selectedDressesArray[index].id === dressIdentifier) {
                selectedItemIndex = index;
            }
        }
        return selectedItemIndex;
    }
    onAddToCart = (event, dressIdentifier) => {
        let selectedItem = {};
        for(let index in this.props.dressesArray) {
            if(this.props.dressesArray[index].id === dressIdentifier) {
                selectedItem = {
                    ...this.props.dressesArray[index]
                };
                this.props.addSelectedItem(selectedItem);

                // this.props.setSelectedItems(localSelectedDresses);
            }
        }
    }
    onUpdateCartItem = (event, dressIdentifier) => {
        let selectedItem = {};
        let localSelectedDresses = [];
        localSelectedDresses = [...this.props.selectedDressesArray];
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
            let buttonToSelect = null;
            let selectedItemIndex = this.getIndexInSelectedDressesArray(dress.id);
            let selectedItemQuantity = 0;
            if(selectedItemIndex > -1) {
                selectedItemQuantity = this.props.selectedDressesArray[selectedItemIndex].quantity;
            }
            
            if(selectedItemIndex > -1 && selectedItemQuantity > 0) {
                buttonToSelect = <QuantityButtonComponent
                selectedItem={dress}>
                </QuantityButtonComponent>;
            }else {
                buttonToSelect = <ButtonComponent
                    clicked={event =>
                        this.onAddToCart(event, dress.id)
                        }>
                    Add To Cart  <i className={[indexClasses.fa, indexClasses.faShoppingCart].join(" ")}></i>
                </ButtonComponent>
            }
            return (
                <div className={[indexClasses.responsiveCol ,indexClasses.l3, indexClasses.s6].join(" ")}>
                    <div className={indexClasses.responsiveContainer}>
                        <div className={indexClasses.positionDisplayContainer}>
                            <img src={dress.imgUrl} alt="Dress image" className={indexClasses.width100}></img>
                            <span className={[indexClasses.positionDisplayTopleft, indexClasses.styleTag].join(" ")}>New</span>
                            <div className={[indexClasses.positionDisplayMiddle, indexClasses.positionDisplayHover].join(" ")}>
                                {buttonToSelect}
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
        selectedDressesArray: state.orderManageReducer.selectedDresses
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onInitItems: (items) => dispatch(actions.initItems(items)),
        addSelectedItem: (item) => dispatch(actions.addSelectedItem(item)),
        setSelectedItems: (items) => dispatch(actions.setSelectedItems(items))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItemsComponent);