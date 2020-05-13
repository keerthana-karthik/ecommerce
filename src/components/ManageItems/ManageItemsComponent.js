import React, { Component } from "react";
import formState from "./ItemFormState";
import FormsHelper from "../Forms/FormsHelper";
import { postDataOnServer } from "../../store/helper";
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
        console.log(this.state.formData);
        
        let formData = this.state.formData;
        let postBody = {
          "category": formData.category.value,
          "material": formData.material.value,
          "type": formData.type.value,
          "imgUrl": formData.imgUrl.value,
          "price": formData.price.value,
          "description": formData.description.value
        }
        postDataOnServer(postBody);
      };
    render() {
        let formElementsArray = [];
        for(let key in this.state.formData) {
            formElementsArray.push({
                id: key,
                config: this.state.formData[key]
            });
        }
        let imgForDress = null;
        if(this.state.formData.imgUrl.value) {
          imgForDress = (<img src={this.state.formData.imgUrl.value} alt="img 1" className={indexClasses.width100}></img>);
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
                      {imgForDress}
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
