import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/Logo.svg';
import CustomLink from '../../Utilities/CustomLink';

const Header = () => {
    return (
        <div className='header flex justify-center'>
            <div className='w-4/5 flex justify-between items-center'>
                <img className='logo-img' src={logo} alt="" />
                <ul className='lg:flex md:hidden sm:hidden'>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='/shop'>Shop</CustomLink>
                    <CustomLink to='/orderReview'>Order Review</CustomLink>
                    <CustomLink to='/manageInverntory'>Manage Inventory</CustomLink>
                    <CustomLink to='/login'>Login</CustomLink>
                </ul>
            </div>
        </div>
    );
};




export default Header;




