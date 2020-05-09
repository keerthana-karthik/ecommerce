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
                <ButtonComponent disabled={!this.state.formIsValid || !this.state.formTouched}>
                    Submit
                </ButtonComponent>
            </form>
        );
        return (
            <div className={manageItemsClasses.ManageItemWrapper}>
                <div className={manageItemsClasses.FormWrapper}>
                    <div className={manageItemsClasses.FormImgSection}>
                    <img src="https://res.cloudinary.com/imagesforwebpage/image/upload/c_scale,h_500,w_400/v1588648217/Kurtis_Plazzo_Set_blue_green_btlrfv.jpg" alt="img 1" className={indexClasses.width100}></img>
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
