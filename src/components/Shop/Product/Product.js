import React from 'react';
import './Product.css'

const Product = ({ data, func }) => {
    const { id, img, name, price, seller, ratings } = data;

    return (
        <div className='Product flex flex-col justify-between p-2 lg:my-4 md:my-8 sm:my-3'>
            <div>
                <img className='product-img' src={img} alt="" />
                <p className='product-name'>{name.length <= 19 ? name : name.slice(0, 18) + ".."}</p>
                <p className='product-price mb-2'>Price : ${price}</p>
                <p className='product-manufacture-rating'>Manufacturer : {seller}</p>
                <p className='product-manufacture-rating mb-1'>Rating : {ratings} star</p>
            </div>

            <div>
                <button onClick={() => func(data)} className='add-to-cart-btn'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;