import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index";
import PriceComponent from "../Price/PriceComponent";
import QuantityButtonComponent from "../Forms/QuantityButton/QuantityButtonComponent";
import indexClasses from "../../index.css";
import sideCartClasses from "./SideCartComponent.css";

class SideCartComponent extends Component {
    sideCartWrapperClasses = [sideCartClasses.sidecartWrapper];
    render() {
        if(this.props.showFloatingCart) {
            this.sideCartWrapperClasses = [sideCartClasses.sidecartWrapper];
        }else {
            this.sideCartWrapperClasses = [sideCartClasses.sidecartWrapper, indexClasses.displayNone];
        }
        const dressArray = [...this.props.selecteddressesArray];
        let isCartEmpty = (!this.props.selecteddressesArray || (this.props.selecteddressesArray && this.props.selecteddressesArray.length === 0)) ? true : false;
        let cartEmptyMsg = null;
        if(isCartEmpty) {
            cartEmptyMsg = (
                <div className={[sideCartClasses.cartEmptyMsg].join(" ")}>
                    Cart is empty
                </div>
            );
        }
        const dresses = dressArray.map(dress => {
            return (
                <div className={sideCartClasses.cartItemWrapper} key={"itemwrapper"+dress.id}>
                    <div className={sideCartClasses.cartItem}>
                        <div className={sideCartClasses.cartItemImgWrapper}>
                            <img className={sideCartClasses.cartItemImg} src={dress.imgUrl} />
                        </div>
                        <div className={sideCartClasses.cartItemDetail}>
                            <div className={sideCartClasses.cartItemTitle}>{dress.type} - {dress.material}</div>
                            <div className={sideCartClasses.cartItemQuantityPrice}>
                            <QuantityButtonComponent key={"QuantityButtonComponent"+dress.id} selectedItem={dress} selectedQuantity={dress.selectedQuantity}>
                            </QuantityButtonComponent>
                                <div className={sideCartClasses.cartItemPrice}>
                                <PriceComponent key={"PriceComponent"+dress.id}>{dress.priceForQuantity}</PriceComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className={this.sideCartWrapperClasses.join(" ")}>
                <div className={sideCartClasses.sidecartContainer}>
                    <header className={sideCartClasses.cartHeader}>
                        <span>Cart</span>
                        <div>{this.props.totalQuantity} item</div>
                    </header>
                    <div className={sideCartClasses.cartItems}>
                        {dresses}
                        {cartEmptyMsg}
                    </div>
                    <footer className={sideCartClasses.cartFooter}>
                        <div className={sideCartClasses.cartTotalSection}>
                            <span className={sideCartClasses.totalLabel, indexClasses.marginBottom20}>Subtotal:</span>
                            <span className={sideCartClasses.totalPrice}>
                                <PriceComponent>{this.props.totalPrice}</PriceComponent>
                            </span>
                        </div>
                        <button className={sideCartClasses.buttonPrimary}>Check Out</button>
                    </footer>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        dressesArray: state.dressManageReducer.dresses,
        selecteddressesArray: state.orderManageReducer.selectedDresses,
        totalQuantity: state.orderManageReducer.totalQuantity,
        totalPrice: state.orderManageReducer.totalPrice
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onInitItems: (items) => dispatch(actions.initItems(items)),
        setSelectedItems: (items) => dispatch(actions.setSelectedItems(items))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SideCartComponent);