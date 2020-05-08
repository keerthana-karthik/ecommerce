export const updateStateObject = (oldStateObject, updatedProperties) => {
    return {
        ...oldStateObject,
        ...updatedProperties
    };
}
const categoryDisplayNameMap = [
    {"key": "salwars", "value": "Salwars"},
    {"key": "sarees", "value": "Sarees"},
    {"key": "sleepwears", "value": "Sleepwears"},
    {"key": "trendyoutfits", "value": "Trendy Outfits"},
    {"key": "bedsheets", "value": "Bed Sheets"},
    {"key": "accessories", "value": "Accessories"}]
;
export const getCategoriesMap = () => {
    return categoryDisplayNameMap;
};
export const getCategoryDisplayName = (key) => {
    let categoryValue = "";
    categoryDisplayNameMap.map(category => {
        if(key === category.key) {
            categoryValue = category.value;
        }
    });
    return categoryValue;
};