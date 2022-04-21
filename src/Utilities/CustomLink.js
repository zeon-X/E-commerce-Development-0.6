import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CustomLink = ({ children, to }) => {
    const x = useLocation();
    const match = x.pathname === to;
    // console.log(x.pathname + " " + to);
    return (
        <div className={match ? "active-nav" : ""}>

            <Link to={to}>{children}</Link>
        </div>
    );
};

export default CustomLink;

