import React, { Component } from "react";
import formState from "./ItemFormState";
import FormsHelper from "../Forms/FormsHelper";
import FormElementComponent from "../Forms/FormElement/FormElementComponent";
import ButtonComponent from "../Forms/Button/ButtonComponent";
import manageItemsClasses from "./ManageItemsComponent.css";
import indexClasses from "../../index.css";

class ManageItemsComponent extends Component {
    state = formState;
    formElementChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
          ...this.state.formData
        };
        const updatedFormElement = {
          ...updatedForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = FormsHelper.checkValidity(
          updatedFormElement.value,
          updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedFormElement;
    
        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
          formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({
          formData: updatedForm,
          formIsValid: formIsValid,
          formTouched: true
        });
      };
    
      submitHandler = event => {
        event.preventDefault();
        console.log(this.state.customFormData);
      };
    render() {
        let formElementsArray = [];
        for(let key in this.state.formData) {
            formElementsArray.push({
                id: key,
                config: this.state.formData[key]
            });
        }
        
        let form = (
            <form onSubmit={this.submitHandler}>
                {formElementsArray.map(formElement => (
                    <FormElementComponent
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={event =>
                        this.formElementChangedHandler(event, formElement.id)
                        }
                    />
                ))
                }
                <ButtonComponent
                    disabled={!this.state.formIsValid || !this.state.formTouched}
                    >
                    Submit
                </ButtonComponent>
            </form>
        );
        return (
            <div className={manageItemsClasses.ManageItemWrapper}>
                <div className={manageItemsClasses.FormWrapper}>
                    <div className={manageItemsClasses.FormImgSection}>
                    <img src="https://lh3.googleusercontent.com/yI4ZYyot1QWt5U1HLlj1ueewd0KeLpRs78-DHCi4wdZ82eQ38CkfbCOqjmTuwBz0JKtJZcsCP9xqZjhTpUuVN2GLGpFp4tD-KO2DcoU3H0Y3lxU-B3_GDZTEkGkzFMqfWKk0SLkfl0J6BEbWgcCbNVpqjMk0HhfVQzDKCblcbRoIrj3-NMnCbmYqJsnZfFCbfmz5ybRCioSZLpfOoUKLEC0R_S3Iz4Ay9Kxf_1SNwp8EG2X-A78BbrMDRuXpabf1-3Pnf5Kc1HmuXPQ1Pb9qx6SqRwQfoNyM-_kPSNjF2oSSAtQ2WwGvr-5_-tLI_7w5b5KcpCkGWdmKF0JAYk5hgw3Qvj67AvLVJRVaf5OZyj8T9_QtsCF3MUm1KAcJ_YETIT580ZMnIMpJyiToJP9M2AQ9V9rhh9qrnjctwD3l4gsytNYCuim9t7sUzlJR0HRavL6NKQYFkwRuf1FEzuVPl1XrY7qdIa8Hku5yshB40cCsq_TYCfwvbIrt8-X100-m5I2SobLs6wklyUsdxLR_Ivf3eymSElnNOEwO7HZUygWslnJIyuhJy2LXnfju1o-kk8MbbjHQTIdf8m2Kd8xjMMaKiiPTyTFezQZU27XtGYQn1Y8-GZlmxfz-6w8B4-G4SM8MZANSeMqNeV0HYpSOcPVRA4tD-4IhmZ8guCxksFQpnqiRrF6m9CGpIZKsbA=w400-h500-no" alt="img 1" className={indexClasses.width100}></img>
                    </div>
                    <div className={manageItemsClasses.FormSection}>
                        <h3>Add</h3>
                        {form}
                    </div>
                </div>
            </div>

        );
    }
}

export default ManageItemsComponent;
