import React, { Component } from "react";
import manageItemsClasses from "./ManageItemsComponent.css";
import indexClasses from "../../index.css";

class ViewItemComponent extends Component {

    render() {
        return (
            <div className={manageItemsClasses.ManageItemWrapper}>
                <div className={manageItemsClasses.FormWrapper}>
                    <div className={manageItemsClasses.FormImgSection}>
                    <img src="https://lh3.googleusercontent.com/yI4ZYyot1QWt5U1HLlj1ueewd0KeLpRs78-DHCi4wdZ82eQ38CkfbCOqjmTuwBz0JKtJZcsCP9xqZjhTpUuVN2GLGpFp4tD-KO2DcoU3H0Y3lxU-B3_GDZTEkGkzFMqfWKk0SLkfl0J6BEbWgcCbNVpqjMk0HhfVQzDKCblcbRoIrj3-NMnCbmYqJsnZfFCbfmz5ybRCioSZLpfOoUKLEC0R_S3Iz4Ay9Kxf_1SNwp8EG2X-A78BbrMDRuXpabf1-3Pnf5Kc1HmuXPQ1Pb9qx6SqRwQfoNyM-_kPSNjF2oSSAtQ2WwGvr-5_-tLI_7w5b5KcpCkGWdmKF0JAYk5hgw3Qvj67AvLVJRVaf5OZyj8T9_QtsCF3MUm1KAcJ_YETIT580ZMnIMpJyiToJP9M2AQ9V9rhh9qrnjctwD3l4gsytNYCuim9t7sUzlJR0HRavL6NKQYFkwRuf1FEzuVPl1XrY7qdIa8Hku5yshB40cCsq_TYCfwvbIrt8-X100-m5I2SobLs6wklyUsdxLR_Ivf3eymSElnNOEwO7HZUygWslnJIyuhJy2LXnfju1o-kk8MbbjHQTIdf8m2Kd8xjMMaKiiPTyTFezQZU27XtGYQn1Y8-GZlmxfz-6w8B4-G4SM8MZANSeMqNeV0HYpSOcPVRA4tD-4IhmZ8guCxksFQpnqiRrF6m9CGpIZKsbA=w400-h500-no" alt="img 1" className={indexClasses.width100}></img>
                    </div>
                    <div className={manageItemsClasses.FormSection}>
                        <div className={manageItemsClasses.FormContent}>
                            <div className={manageItemsClasses.ItemDetail}>
                                <div className={manageItemsClasses.ItemDetailBrand}>Vipul Salwars</div>
                            </div>
                            <div className={manageItemsClasses.ItemDetail}>
                                <div className={manageItemsClasses.ItemDetailPrice}>Rs 1200</div>
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
