export const updateStateObject = (oldStateObject, updatedProperties) => {
    return {
        ...oldStateObject,
        ...updatedProperties
    };
}
const categoryDisplayNameMap = [
    {"key": "salwars", "value": "Salwar Materials"},
    {"key": "kurtis", "value": "Kurtis Set"},
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