const ItemFormState = {
    formData: {
      category: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "null", displayValue: "Select One" },
            { value: "salwar", displayValue: "Salwar" },
            { value: "saree", displayValue: "Saree" },
            { value: "nightwear", displayValue: "Night Wear" }
          ]
        },
        value: "",
        validation: {},
        valid: true
      },
      brand: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Brand"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      imgurl: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Image Url"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      price: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Price"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      description: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Description"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: true,
    loading: false
  };
  export default ItemFormState;
  