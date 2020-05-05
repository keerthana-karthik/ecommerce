import React, { Component } from "react";
import * as actions from "../../store/actions/index";
import axios from "axios";
import { connect } from 'react-redux';
import indexClasses from "../../index.css";

class ListItemsComponent extends Component {
    state = {
        // dresses: [],
        selectedDresses: []
    };
    componentDidMount() {
        // this.props.onInitItems();
        axios.get("https://my-json-server.typicode.com/keerthana-karthik/ecommerce/dresses")
        .then(response => {
            this.props.onInitItems(response.data);
        });
    }
    componentDidUpdate() {
        console.log(this.props.selectedDresses);
    }
    onAddToCart = (event, dressIdentifier) => {
        let selectedItem = {};
        let localSelectedDresses = [];
        localSelectedDresses = [...this.props.selectedDresses];
        for(let index in this.props.dresses) {
            if(this.props.dresses[index].id === dressIdentifier) {
                selectedItem = {
                    ...this.props.dresses[index]
                };
                localSelectedDresses.push(selectedItem);
                this.setState({selectedDresses : localSelectedDresses});
            }
        }
    }
    render() {
        const dressArray = [...this.props.dressesObj.dresses];
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
                <div className={indexClasses.responsiveRow}>
                      {dresses}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        dressesObj: state.dresses,
        selectedDressesObj: state.selectedDresses
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onInitItems: (items) => dispatch(actions.initItems(items))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItemsComponent);