import axios from "axios";
export const updateStateObject = (oldStateObject, updatedProperties) => {
    return {
        ...oldStateObject,
        ...updatedProperties
    };
}
const categoryDisplayNameMap = [
    { "key": "dresses", "value": "Dresses" },
    { "key": "shirts", "value": "Shirts" },
    { "key": "skirts", "value": "Skirts" },
    { "key": "pants", "value": "Pants" },
    { "key": "bridal", "value": "Bridal" },
    { "key": "kurtis", "value": "Kurtis" },
    { "key": "salwar", "value": "Salwar" }]
    ;
export const getCategoriesMap = () => {
    return categoryDisplayNameMap;
};
export const getCategoryDisplayName = (key) => {
    let categoryValue = "";
    categoryDisplayNameMap.map(category => {
        if (key === category.key) {
            categoryValue = category.value;
        }
    });
    return categoryValue;
};

export const postDataOnServer = (postBody) => {
    axios.post("https://trendy-north.firebaseio.com/" + postBody.category + ".json", postBody)
        .then(response => {
            this.props.history.push('/items/'+postBody.category);
            // <Redirect to={'/items/'+postBody.category} />
        });
}

export const deleteDataOnServer = (category, itemId) => {
    axios.delete("https://trendy-north.firebaseio.com/" + category + "/"+itemId+".json")
        .then(response => {
            this.props.history.push('/items/'+category);
            // <Redirect to={'/items/'+category} />
        });
}