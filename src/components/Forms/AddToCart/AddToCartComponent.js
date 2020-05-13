import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from "../../../store/actions/index";
import ButtonComponent from "../Button/ButtonComponent";


class AddToCartComponent extends Component {

    onAddToCart = (dressIdentifier) => {
        let selectedItem = {};
        for (let index in this.props.dressesArray) {
            if (this.props.dressesArray[index].id === dressIdentifier) {
                selectedItem = {
                    ...this.props.dressesArray[index]
                };
                this.props.addSelectedItem(selectedItem);
            }
        }
    }
    render() {
        return (
            <ButtonComponent key={"ButtonComponent" + this.props.dressId}
                clicked={event =>
                    this.onAddToCart(this.props.dressId)
                }>
                +
                {/* + <i className={[indexClasses.fa, indexClasses.faShoppingCart].join(" ")}></i> */}
            </ButtonComponent>
        );
    }
}
const mapStateToProps = state => {
    return {
        dressesArray: state.dressManageReducer.dresses
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addSelectedItem: (item) => dispatch(actions.addSelectedItem(item))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddToCartComponent);
