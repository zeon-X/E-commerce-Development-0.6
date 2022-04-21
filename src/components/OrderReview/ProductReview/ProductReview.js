import React from 'react';
import './ProductReview.css'

const ProductReview = ({data,func}) => {
    const { id, img, name, price, shipping } = data;
    return (
        <div className='product-item-review my-2 flex justify-between items-center'>
            <div className='flex justify-center items-center'>
                <img className='product-item-review-img' src={img} alt="" />
                <div className='flex flex-col ml-2'>
                    <p style={{fontSize:"21px"}}>{name.length <= 29 ? name : name.slice(0, 27) + ".."}</p>
                    <p style={{fontSize:"15px"}}>Price: <span>${price}</span> </p>
                    <p style={{fontSize:"15px"}}>Shipping Charge : <span>${shipping}</span> </p>
                </div>
            </div>
            <button onClick={()=>func(id)} className='delete-btn'>Delete</button>
        </div>
    );
};

export default ProductReview;