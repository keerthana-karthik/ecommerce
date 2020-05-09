import React, { Component } from "react";
import * as actions from "../../store/actions/index";
import axios from "axios";
import { connect } from 'react-redux';
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
        const dresses = dressArray.map(dress => {
            return (
                <div className={sideCartClasses.cartItemWrapper}>
                    <div className={sideCartClasses.cartItem}>
                        <div className={sideCartClasses.cartItemImgWrapper}>
                            <img className={sideCartClasses.cartItemImg} src={dress.imgUrl} />
                        </div>
                        <div className={sideCartClasses.cartItemDetail}>
                            <div className={sideCartClasses.cartItemTitle}>{dress.type} - {dress.material}</div>
                            <div className={sideCartClasses.cartItemQuantityPrice}>
                            <QuantityButtonComponent>
                            </QuantityButtonComponent>
                                <div className={sideCartClasses.cartItemPrice}>
                                    Rs {dress.price}
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
                        <div>0 item</div>
                    </header>
                    <div className={sideCartClasses.cartItems}>
                        {dresses}
                        <div className={[sideCartClasses.cartEmptymsg, indexClasses.displayNone].join(" ")}>
                            Cart is empty
                        </div>
                    </div>
                    <footer className={sideCartClasses.cartFooter}>
                        <div className={sideCartClasses.cartTotalSection}>
                            <span className={sideCartClasses.totalLabel}>Subtotal:</span>
                            <span className={sideCartClasses.totalPrice}>$0.00</span>
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
        selecteddressesArray: state.orderManageReducer.selectedDresses
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onInitItems: (items) => dispatch(actions.initItems(items)),
        setSelectedItems: (items) => dispatch(actions.setSelectedItems(items))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SideCartComponent);