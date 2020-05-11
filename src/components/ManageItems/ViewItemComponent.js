import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index";
import PriceComponent from "../Price/PriceComponent";
import manageItemsClasses from "./ManageItemsComponent.css";
import indexClasses from "../../index.css";

class ViewItemComponent extends Component {
    state = {
        dressId: 0,
        dress: {}
    }
    componentDidMount() {
        if (this.props.match.params.category) {
            axios.get("https://my-json-server.typicode.com/keerthana-karthik/ecommerce/" + this.props.match.params.category)
                .then(response => {
                    let dressesArray = response.data;
                        let dressId = parseInt(this.props.match.params.id);
                        this.props.onInitItems(dressesArray);
                        if (dressId) {
                            this.setState({ "dressId": dressId });
                            for (let index in dressesArray) {
                                if (dressesArray[index].id === dressId) {
                                    this.setState({ "dress": dressesArray[index] });
                                }
                            }
                        }
                        console.log(this.state.dress);
                }).catch(error => {
                    this.props.onInitItems([]);
                });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            if (this.props.match.params.category) {
                axios.get("https://my-json-server.typicode.com/keerthana-karthik/ecommerce/" + this.props.match.params.category)
                    .then(response => {
                        let dressesArray = response.data;
                        let dressId = parseInt(this.props.match.params.id);
                        this.props.onInitItems(dressesArray);
                        if (dressId) {
                            this.setState({ "dressId": dressId });
                            for (let index in dressesArray) {
                                if (dressesArray[index].id === dressId) {
                                    this.setState({ "dress": dressesArray[index] });
                                }
                            }
                        }
                        console.log(this.state.dress);
                    }).catch(error => {
                        this.props.onInitItems([]);
                    });
            }
        }
    }
    render() {
        let dresshtml = null;
        if (this.state.dress && this.state.dress.imgUrl) {
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
                            <div className={manageItemsClasses.ItemDetail}>
                                <div className={manageItemsClasses.ItemDetailDesc}>{this.state.dress.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className={manageItemsClasses.ManageItemWrapper}>
                {dresshtml}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        dressesArray: state.dressManageReducer.dresses
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onInitItems: (items) => dispatch(actions.initItems(items))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewItemComponent);
