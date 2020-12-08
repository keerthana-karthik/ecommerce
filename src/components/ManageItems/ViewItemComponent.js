import React, { Component } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index";
import PriceComponent from "../Price/PriceComponent";
import ButtonComponent from "../Forms/Button/ButtonComponent";
import AddToCartComponent from "../Forms/AddToCart/AddToCartComponent";
import manageItemsClasses from "./ManageItemsComponent.css";
import indexClasses from "../../index.css";

class ViewItemComponent extends Component {
    state = {
        dressId: 0,
        dress: {}
    }
    componentDidMount() {
        let category = this.props.match.params.category;
        let dressId = this.props.match.params.id;
        if (category && dressId) {
            this.setState({ "dressId": dressId });
            axios.get("https://trendy-north.firebaseio.com/" + category + ".json")
                .then(response => {
                    for (let key in response.data) {
                        if (key === dressId) {
                            this.setState({ "dress": { ...response.data[key], id: key } });
                        }
                    }
                }).catch(error => {
                    this.props.onInitItems([]);
                });
        }
    }

    componentDidUpdate(prevProps) {
        let category = this.props.match.params.category;
        let dressId = this.props.match.params.id;
        if (this.props.match.params.id !== prevProps.match.params.id) {
            if (category && dressId) {
                this.setState({ "dressId": dressId });
                axios.get("https://trendy-north.firebaseio.com/" + category + ".json")
                    .then(response => {
                        for (let key in response.data) {
                            if (key === dressId) {
                                this.setState({ "dress": { ...response.data[key], id: key } });
                            }
                        }
                    }).catch(error => {
                        this.props.onInitItems([]);
                    }
                );
            }
        }
    }
    // test
    getIndexInSelectedDressesArray = (dressIdentifier) => {
        let selectedItemIndex = -1;
        for (let index in this.props.selectedDressesArray) {
            if (this.props.selectedDressesArray[index].id === dressIdentifier) {
                selectedItemIndex = index;
            }
        }
        return selectedItemIndex;
    }
    render() {
        let dresshtml = null;
        if (this.state.dress && this.state.dress.imgUrl) {
            let buttonToSelect = null;
            let selectedItemIndex = this.getIndexInSelectedDressesArray(this.state.dress.id);
            let selectedItemQuantity = 0;
            if (selectedItemIndex > -1) {
                selectedItemQuantity = this.props.selectedDressesArray[selectedItemIndex].selectedQuantity;
            }

            if (selectedItemIndex > -1 && selectedItemQuantity > 0) {
                buttonToSelect = <ButtonComponent key={"ButtonComponent" + this.state.dress.id} disabled={true}>{selectedItemQuantity} In Cart</ButtonComponent>;
            } else {
                buttonToSelect = <AddToCartComponent key={"AddToCartComponent" + this.state.dress.id} dressId={this.state.dress.id} ></AddToCartComponent>;
            }
            dresshtml = (
                <div className={manageItemsClasses.FormWrapper}>
                    <div className={manageItemsClasses.FormImgSection}>
                        <img src={this.state.dress.imgUrl} alt="img 1" className={indexClasses.width100}></img>
                    </div>
                    <div className={manageItemsClasses.FormSection}>
                        <div className={manageItemsClasses.FormContent}>
                            <div className={manageItemsClasses.ItemDetail}>
                                <div className={manageItemsClasses.ItemDetailBrand}>{this.state.dress.type} - {this.state.dress.material}</div>
                            </div>
                            <div className={manageItemsClasses.ItemDetail}>
                                <PriceComponent key={"PriceComponent" + this.state.dress.id} >{this.state.dress.price}</PriceComponent>
                            </div>
                            <div className={[manageItemsClasses.ItemDetail, indexClasses.marginBottom20].join(" ")}>
                                <div className={manageItemsClasses.ItemDetailDesc}>{this.state.dress.description}</div>
                            </div>
                            <div>
                                {buttonToSelect}
                            </div>
                            
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className={manageItemsClasses.ManageItemWrapper}>
                {dresshtml}
                <AuthContext.Consumer>
                    {context => 
                        context.authenticated ? <p>Logged In</p>: null
                    }
                </AuthContext.Consumer>
            </div>
        )
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
        onInitItems: (items) => dispatch(actions.initItems(items))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewItemComponent);
