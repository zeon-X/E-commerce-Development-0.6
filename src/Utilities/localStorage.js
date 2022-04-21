//GET DATA FORM LOCAL-STORAGE
const getFromLS = () => {
    const fetchedData = localStorage.getItem('cart-info');
    return JSON.parse(fetchedData);
}


//SET NEW CART DATA TO LOCAL-STORAGE
const setToLS = (product) => {
    let Data = {}
    const fetchedData = getFromLS();
    if (fetchedData) {
        Data = fetchedData;
    }
    if (Data[product]) {
        Data[product]++;
    }
    else {
        Data[product] = 1;
    }
    localStorage.setItem('cart-info', JSON.stringify(Data));
}


//DELETS FORM LOCAL-STORAGE
const deleteFormLS = (product) => {
    let fetchedData = getFromLS();

    delete fetchedData[product];

    const data = JSON.stringify(fetchedData);
    localStorage.setItem('cart-info', data);
}


const deleteLS = () => {
    localStorage.removeItem('cart-info')
}


export { getFromLS, setToLS, deleteFormLS, deleteLS }