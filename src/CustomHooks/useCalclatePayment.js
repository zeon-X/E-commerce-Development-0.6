import { useEffect, useState } from "react";

const useCalculatePayment = (cart) => {
    const [calculatePayment, setCalculatePayment] = useState({})

    useEffect(() => {
        let payment = {
            selectedItems: 0,
            totalPrice: 0,
            totalShippingCharge: 0,
            tax: 0,
            grandTotal:0
        };

        

        for (const item of cart) {
            payment.selectedItems += item.quantity;
            payment.totalPrice += item.price*item.quantity;
            payment.totalShippingCharge += item.shipping*item.quantity;
            payment.tax += (payment.totalPrice * 0.07);

            payment.grandTotal = payment.selectedItems+payment.totalPrice+payment.totalShippingCharge+payment.tax;
        }

        setCalculatePayment(payment);
    }, [cart])

    return [calculatePayment, setCalculatePayment];
}

export default useCalculatePayment;