import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as actions from "../../../store/actions/index";
import ButtonComponent from "../Button/ButtonComponent";


class AddToCartComponent extends Component {
// test
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
AddToCartComponent.propTypes = {
    dressId: PropTypes.string
};
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
