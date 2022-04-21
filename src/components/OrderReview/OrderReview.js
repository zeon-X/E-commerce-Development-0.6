import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCalculatePayment from '../../CustomHooks/useCalclatePayment';
import useCart from '../../CustomHooks/useCart';
import useProduct from '../../CustomHooks/useProduct';
import { deleteFormLS, deleteLS } from '../../Utilities/localStorage';
import './OrderReview.css'
import ProductReview from './ProductReview/ProductReview';


const OrderReview = () => {
    const [product, setProduct] = useProduct();
    const [cart, setCart] = useCart(product);
    const [calculatePayment, setCalculatePayment] = useCalculatePayment(cart);
    const navigate = useNavigate();

    const clearCart = () => {
        deleteLS();
        setCart([]);
    }

    const deleteFromCart = (id) => {
        deleteFormLS(id);
        let temCart = [];
        temCart = cart.filter(x => x.id !== id);

        setCart(temCart);
    }

    return (
        <div className='flex'>
            <div className="product-review-container flex flex-col items-center mt-14">
                {
                    cart.map((item) => {
                        return (<ProductReview key={item.id} data={item} func={deleteFromCart}></ProductReview>)
                    })
                }
            </div>

            <div className="order-review-container">
                <div className='order-summery-content-container'>
                    <p className='mb-10'>Order Summary</p>
                    <div className='Payment'>
                        <p>Selected Items: {calculatePayment.selectedItems}</p>
                        <p>Total Price: ${calculatePayment.totalPrice}</p>
                        <p>Total Shipping Charge: ${calculatePayment.totalShippingCharge}</p>
                        <p>Tax: ${calculatePayment.tax}</p>
                        <h3 className='mb-10'>Grand Total: ${calculatePayment.grandTotal}</h3>

                        <button onClick={clearCart} className='clear-cart-btn mb-1 text-white'>Clear Cart</button>
                        <button onClick={() => navigate('/checkOut')} className='review-btn text-white'>Procced CheckOut</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default OrderReview;