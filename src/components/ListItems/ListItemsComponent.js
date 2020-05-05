import React, { Component } from "react";
// import indexClasses from "./ListItemsComponent.css";
import axios from "axios";
import indexClasses from "../../index.css";

class ListItemsComponent extends Component {
    componentDidMount() {
        axios.get("").then(response => {
            console.log(response);
        });
    }
    render() {
        return (
            <div className={[indexClasses.responsiveContainer, indexClasses.textLeft].join(" ")}>
                <div className={indexClasses.responsiveRow}>
                    <div className={[indexClasses.responsiveCol ,indexClasses.l3, indexClasses.s6].join(" ")}>
                        <div className={indexClasses.responsiveContainer}>
                            <div className={indexClasses.positionDisplayContainer}>
                                <img src="https://lh3.googleusercontent.com/yI4ZYyot1QWt5U1HLlj1ueewd0KeLpRs78-DHCi4wdZ82eQ38CkfbCOqjmTuwBz0JKtJZcsCP9xqZjhTpUuVN2GLGpFp4tD-KO2DcoU3H0Y3lxU-B3_GDZTEkGkzFMqfWKk0SLkfl0J6BEbWgcCbNVpqjMk0HhfVQzDKCblcbRoIrj3-NMnCbmYqJsnZfFCbfmz5ybRCioSZLpfOoUKLEC0R_S3Iz4Ay9Kxf_1SNwp8EG2X-A78BbrMDRuXpabf1-3Pnf5Kc1HmuXPQ1Pb9qx6SqRwQfoNyM-_kPSNjF2oSSAtQ2WwGvr-5_-tLI_7w5b5KcpCkGWdmKF0JAYk5hgw3Qvj67AvLVJRVaf5OZyj8T9_QtsCF3MUm1KAcJ_YETIT580ZMnIMpJyiToJP9M2AQ9V9rhh9qrnjctwD3l4gsytNYCuim9t7sUzlJR0HRavL6NKQYFkwRuf1FEzuVPl1XrY7qdIa8Hku5yshB40cCsq_TYCfwvbIrt8-X100-m5I2SobLs6wklyUsdxLR_Ivf3eymSElnNOEwO7HZUygWslnJIyuhJy2LXnfju1o-kk8MbbjHQTIdf8m2Kd8xjMMaKiiPTyTFezQZU27XtGYQn1Y8-GZlmxfz-6w8B4-G4SM8MZANSeMqNeV0HYpSOcPVRA4tD-4IhmZ8guCxksFQpnqiRrF6m9CGpIZKsbA=w400-h500-no" alt="img 1" className={indexClasses.width100}></img>
                                <span className={[indexClasses.positionDisplayTopleft, indexClasses.styleTag].join(" ")}>New</span>
                                <div className={[indexClasses.positionDisplayMiddle, indexClasses.positionDisplayHover].join(" ")}>
                                    <button className={[indexClasses.styleButton, indexClasses.styleBlack].join(" ")}>Add To Cart  <i className={[indexClasses.fa, indexClasses.faShoppingCart].join(" ")}></i>
                                    </button>
                                </div>
                            </div>
                            <p>Ripped Skinny Jeans<br></br><b>$24.99</b></p>
                        </div>
                    </div>
                    <div className={[indexClasses.responsiveCol ,indexClasses.l3, indexClasses.s6].join(" ")}>
                        <div className={indexClasses.responsiveContainer}>
                            <img src="https://lh3.googleusercontent.com/KJ66FRXXZE5zu7ha6yvfd6jsDBDVHuNnHoh9pJXCD6MbfZCDtgJ3-FpXBG3IsNkavDdwCk4B-SZY04hvnC0IfliP2dNIthCMKwNOET6BM74oHS4VDwV0LqQQHDbO_AOj85TN6Tgll8ZHZ_M8QwlVSjE8Kggfpo_9uY5KR5rLByUk5EvFzTifmWr53u1nYLYrsLl8uV2yTTxvf3hm7JESaxIiRjj2qTZc_XJOK1jX6v9X4hypLIgvym0VxVpTRRkduE9tn-QrdEWZ0Ozj_IVcrAcW9Xz5EDceUoDqeEUKqNs40-eDCWXAGzQq4jt3wdf3QBf45PFWj1Y-BwYK2kba7z0ET_pSc5uD5Z-6eRLp2gD-lQOHvQigaKyixtecSKUX0mic-SE9WLehOEedPcAt6fOyF-aV9Vd0XITylBJJCDm244IdPrd8zPuACRff1mlfnMDfIy1WvmVXJMnlA3PBCOYmiAcF9lBazCT-z6b9sQ1wAkqXo-Cx-m9lvQ24908sV_Cr4a618AkSWGjvozg00t3f69USa8qN7YaPqRb4BGHuzzEBByubbhDeSqITL1QG6aZmnLvv2R93Vu4X_TC7bHdzyA0PH1FwuFl9cE_abEdXmKoYj8vNwrk9UEQAn_KgEBhx-Bb73VQT0MmXjCXP0AXx-TCEMGN_kgT51G8BCrgy7Iibui_8BUQDDV6OwQ=w400-h500-no" alt="img 1" className={indexClasses.width100}></img>
                            <p>Ripped Skinny Jeans<br></br><b>$24.99</b></p>
                        </div>
                    </div>
                    <div className={[indexClasses.responsiveCol ,indexClasses.l3, indexClasses.s6].join(" ")}>
                        <div className={indexClasses.responsiveContainer}>
                            <img src="https://lh3.googleusercontent.com/EpmR-s-hc31kZU2nucRe4sRcSZMja373MjEqrIfwxNhAypv4AD4lnJ5w-NyHWd5frZMpxxexCpEG0_wW0XtdBFDGKt37Sjw2Qw4P2NUfv86W5qafeyggGz3cWyBybEZ5eSIfP8PfEqfSm-R1J90cLEIRVzWFDUUFwNQAFsGcgSEasxWjQgWKyJOKIFqK0sY8WRzFdtJzxNb_TDrftwmE3-2tcFQavfUCcxIuqrSVzcAfssADqPpoFLFlqnGd78kU9gYqcUTHt6rtgzSPvLfXt4ZTJ5FdlRVfU7puv0ovuk5BKyhGrpBQ_QDGOsBtGbo9pD1BkVmfOVcPXYpOWMX6NS5O56fkROW_A6D6vcLXlkIKv6_ln6sgLFWb3g6YeiaiL310FjXfybzY0qr7ICiX2rWW9GScd-Vd-4PpOOUpAPyVMJZ7WGRHYV6vfBV1-gmpWyfLJG5w741oc4qwiYYjFlaZhclAS0AFQ5dABM4FTCVnTh5iawz3aJlV-lfXzJ-evHdYBbV9qsNAurKUWtkvsGxNCQE5SiKk3qnaP8tYkT9c2Tk_SDxuSdNTwq10YKZExuQzFbWLX8ofV670e5kulSNFRy8iYPsCIpRr4Mtd6qOwbEvtIeOu676DcObvxkZTZNNiDtKmR90YCrZfXDthANOJunM9aqPUa0wHzrHwDt3dH6mM-Y-bUlAQa4i5sw=w400-h500-no" alt="img 1" className={indexClasses.width100}></img>
                            <p>Ripped Skinny Jeans<br></br><b>$24.99</b></p>
                        </div>
                    </div>
                    <div className={[indexClasses.responsiveCol ,indexClasses.l3, indexClasses.s6].join(" ")}>
                        <div className={indexClasses.responsiveContainer}>
                            <img src="https://lh3.googleusercontent.com/X6VEFCeL0AfPy8RCTuvl4ZLRtQ-OxAtAcgwaEBEbuFsIZz5K-AJBJr47p3s30lxgHKWNh9P_x16ag2TYmrGTWOOkMOiD4Y40Y4kAAXy3t3kSb4vOxEajVbyxxgmwZFgG3erfdZJgmQtNMLfaIX8daUGK3yoCgJEqntaiMcMN06HUpuBL5KTRYZzySKUjxbN1AWvUKaRE5G21fyHJXPjR7bNPWRIAIi7M5YHnuTzJA3jgYsRpNZcV1h7b6VGcXMoM95hVkDHfgFsTeBSlJVeKYaiwwHQXbGVclhFukk_TUnM-hoYcyUBz2ilen9hV33t27EqTOeh0EFLafiRYHfSqqT4wN1Ao6LqyqXjVWMD_h8HIRr_VJl9eDLImgHSLho5VSbkin4x3-nlGiNhbpC4XWJJnEb1VFraLTZvGzLtUrAyK423ri3s6qQSM583SAAtNE1nq6JY6n1d9_QB7AIyCG-SqvCZcKVaxKAK4QbmjLF5pCHZ4Fe3ad9zhxL6vwZ6ZLuesswoZ5g6XXeFk8TSBFj3DuOenEoCRMPKQzeKgNVs0PWXRkqBvtQJUrO7__JGX1jey3AIaf326mnumO601iY7iiZJV4mZ-gda2vnbWjZ9jaQLDx53_O5xcIyFdtgVELmZi_tJ3FugVPxVb6Y1sJsljMn3vJRaI0gRIIfNoExGGuwRJip7Qco8IjgskPA=w400-h500-no" alt="img 1" className={indexClasses.width100}></img>
                            <p>Ripped Skinny Jeans<br></br><b>$24.99</b></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItemsComponent;