import React from 'react';
import logo from './images/logo.png';
import { useSelector } from 'react-redux';

function Navbar({handlePageView}) {

    const state = useSelector(state => state.cart)
    const total_item = state.reduce((current, next) => current + next.quantity, 0);

    const handlePageChange = (value) => {
        handlePageView(value);
    }


    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <span onClick={() => handlePageChange(true)} style={{cursor: 'pointer'}}>
                    <img src={logo} alt="LWS" className="max-w-[140px]" />
                </span>

                <div className="flex gap-4">
                    <span  onClick={() => handlePageChange(true)} className="navHome" style={{cursor: 'pointer'}} id="lws-home"> Home </span>
                    <span  onClick={() => handlePageChange(false)} className="navCart" style={{cursor: 'pointer'}} id="lws-cart">
                        <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                        <span id="lws-totalCart">{total_item}</span>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;