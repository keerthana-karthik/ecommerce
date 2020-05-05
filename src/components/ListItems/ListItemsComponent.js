import React, { Component } from "react";
// import indexClasses from "./ListItemsComponent.css";
import axios from "axios";
import indexClasses from "../../index.css";

class ListItemsComponent extends Component {
    state = {
        dresses: []
    };
    componentDidMount() {
        axios.get("https://my-json-server.typicode.com/keerthana-karthik/ecommerce/dresses")
        .then(response => {
            this.setState({dresses: response.data});
        });
    }
    render() {
        const dresses = this.state.dresses.map(dress => {
            return (
                <div className={[indexClasses.responsiveCol ,indexClasses.l3, indexClasses.s6].join(" ")}>
                    <div className={indexClasses.responsiveContainer}>
                        <div className={indexClasses.positionDisplayContainer}>
                            <img src={dress.imgUrl} alt="Dress image" className={indexClasses.width100}></img>
                            <span className={[indexClasses.positionDisplayTopleft, indexClasses.styleTag].join(" ")}>New</span>
                            <div className={[indexClasses.positionDisplayMiddle, indexClasses.positionDisplayHover].join(" ")}>
                                <button className={[indexClasses.styleButton, indexClasses.styleBlack].join(" ")}>Add To Cart  <i className={[indexClasses.fa, indexClasses.faShoppingCart].join(" ")}></i>
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

export default ListItemsComponent;