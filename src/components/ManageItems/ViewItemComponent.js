import React, { Component } from "react";
import manageItemsClasses from "./ManageItemsComponent.css";
import indexClasses from "../../index.css";

class ViewItemComponent extends Component {

    render() {
        return (
            <div className={manageItemsClasses.ManageItemWrapper}>
                <div className={manageItemsClasses.FormWrapper}>
                    <div className={manageItemsClasses.FormImgSection}>
                    <img src="https://res.cloudinary.com/imagesforwebpage/image/upload/c_scale,h_500,w_400/v1588648217/Kurtis_Plazzo_Set_blue_green_btlrfv.jpg" alt="img 1" className={indexClasses.width100}></img>
                    </div>
                    <div className={manageItemsClasses.FormSection}>
                        <div className={manageItemsClasses.FormContent}>
                            <div className={manageItemsClasses.ItemDetail}>
                                <div className={manageItemsClasses.ItemDetailBrand}>Vipul Salwars</div>
                            </div>
                            <div className={manageItemsClasses.ItemDetail}>
                                <div className={manageItemsClasses.ItemDetailPrice}>₹ 1200</div>
                            </div>
                            <div className={manageItemsClasses.ItemDetail}>
                                <div className={manageItemsClasses.ItemDetailDesc}>With Silk Duppata</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewItemComponent;
