import { useEffect, useState } from "react"
import { getFromLS } from "../Utilities/localStorage";

const useCart = (product) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchedData = getFromLS();
        let storedCart = [];

        for (const id in fetchedData) {
            const item = product.find(x => x.id === id);
            if (item) {
                item.quantity = fetchedData[id];
                storedCart.push(item);
            }
        }
        // console.log(typeof cart)
        setCart(storedCart);
    }, [product])

    return [cart, setCart];
}

export default useCart;