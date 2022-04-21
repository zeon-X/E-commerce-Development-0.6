import React from 'react';
import Product from './Product/Product';
import './Shop.css'
import useProduct from '../../CustomHooks/useProduct'
import useCart from '../../CustomHooks/useCart'
import { setToLS } from '../../Utilities/localStorage';
import useCalculatePayment from '../../CustomHooks/useCalclatePayment';

const Shop = () => {
    const [product, setProduct] = useProduct();
    const [cart, setCart] = useCart(product);
    const [calculatePayment, setCalculatePayment] = useCalculatePayment(cart);

    const addToCart = (data) => {
        setToLS(data.id);

        let temCart = [];
        let item = cart.find(x => x.id === data.id);

        if (item) {
            item.quantity++;
            temCart = cart.filter(x => x.id !== data.id);
            temCart.push(item);
        }
        else {
            data.quantity = 1;
            temCart = [...cart, data];
        }

        setCart(temCart);
    }

    // console.log(calculatePayment);

    return (
        <div className='shop-container flex'>
            <div className="product-container justify-items-center grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 lg:w-4/5 md:w-full sm:w-full">
                {
                    product.map((x) => {
                        // console.log(x);
                        return (
                            <Product key={x.id} data={x} func={addToCart}></Product>
                        )
                    })
                }
            </div>


            <div className="order-summery-container p-7 lg:flex flex-col items-center sm:hidden md:hidden lg:w-1/5 md:w-0 sm:w-0">
                <p className='mb-2'>Order Summary</p>
                <hr className='mb-8' />
                <div className='Payment'>
                    <p>Selected Items: {calculatePayment.selectedItems}</p>
                    <p>Total Price: ${calculatePayment.totalPrice}</p>
                    <p>Total Shipping Charge: ${calculatePayment.totalShippingCharge}</p>
                    <p>Tax: ${calculatePayment.tax}</p>
                    <h3 className='mb-10'>Grand Total: ${calculatePayment.grandTotal}</h3>

                    <button className='clear-cart-btn mb-1 text-white'>Clear Cart</button>
                    <button className='review-btn text-white'>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;