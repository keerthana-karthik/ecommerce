import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index";
import { getCategoryDisplayName } from "../../helpers/CatalogHelper";
import DeleteItemComponent from "./DeleteItemComponent";
import ButtonComponent from "../Forms/Button/ButtonComponent";
import PriceComponent from "../Price/PriceComponent";
import indexClasses from "../../index.css";

class ListItemsForAdminComponent extends Component {
    componentDidMount() {
        // this.props.onInitItems(this.props.match.params.id);
        let fetchedDressess = [];
        let category = this.props.match.params.id;

    axios.get("https://trendy-north.firebaseio.com/" + category + ".json")
        .then(res => {
            for (let key in res.data) {
                fetchedDressess.push({
                    ...res.data[key],
                    id: key
                });
            }
            if(fetchedDressess && fetchedDressess.length >  0) {
                this.props.onInitItems(fetchedDressess);
            }
            
        }).catch(error => {
            fetchedDressess = [];
        });
    }
    componentDidUpdate(prevProps) {
        let fetchedDressess = [];
        let category = this.props.match.params.id;
        if (category !== prevProps.match.params.id) {
            axios.get("https://trendy-north.firebaseio.com/" + category + ".json")
        .then(res => {
            for (let key in res.data) {
                fetchedDressess.push({
                    ...res.data[key],
                    id: key
                });
            }
            if(fetchedDressess && fetchedDressess.length >  0) {
                this.props.onInitItems(fetchedDressess);
            }
            
        }).catch(error => {
            fetchedDressess = [];
        });
        }
    }
    // test
    getIndexInSelectedDressesArray = (dressIdentifier) => {
        let selectedItemIndex = -1;
        for(let index in this.props.selectedDressesArray) {
            if(this.props.selectedDressesArray[index].id === dressIdentifier) {
                selectedItemIndex = index;
            }
        }
        return selectedItemIndex;
    }
    render() {
        const categoryDisplayName = getCategoryDisplayName(this.props.match.params.id);
        const dressArray = [...this.props.dressesArray];
        
        const dresses = dressArray.map(dress => {
            let buttonToSelect = null;
            let selectedItemIndex = this.getIndexInSelectedDressesArray(dress.id);
            let selectedItemQuantity = 0;
            if(selectedItemIndex > -1) {
                selectedItemQuantity = this.props.selectedDressesArray[selectedItemIndex].selectedQuantity;
            }
            buttonToSelect = <DeleteItemComponent key={"DeleteItemComponent"+dress.id} category={dress.category} dressId={dress.id} ></DeleteItemComponent>;
            return (
                <div key={"div"+dress.id} className={[indexClasses.responsiveCol ,indexClasses.l3, indexClasses.s6].join(" ")}>
                    <div className={indexClasses.responsiveContainer}>
                        <div className={indexClasses.positionDisplayContainer}>
                            <Link key={"Link"+dress.id} to={{"pathname":"/viewItem/"+dress.category+"/"+dress.id}} >
                                <img src={dress.imgUrl} alt="Dress image" className={indexClasses.width100}></img>
                            </Link>
                            {/* <span className={[indexClasses.positionDisplayTopleft, indexClasses.styleTag].join(" ")}>New</span> */}
                            <div className={[indexClasses.positionDisplayTopleft, indexClasses.positionDisplayHover].join(" ")}>
                                {buttonToSelect}
                            </div>
                        </div>
                        <h6 className={indexClasses.marginBottom20}>
                            <div className={indexClasses.marginBottom5}>{dress.type} - {dress.material}</div>
                            <PriceComponent key={"PriceComponent"+dress.id} >{dress.price}</PriceComponent>
                        </h6>
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
export default connect(mapStateToProps, mapDispatchToProps)(ListItemsForAdminComponent);