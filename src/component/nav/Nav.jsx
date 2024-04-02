import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className='flex my-container mt-5 lg:mt-16 justify-between items-center'>
            <div className='fonts'>
                <h1>Job Seekers</h1>
            </div>
            <ul className='hidden md:flex items-center'>
                <NavLink className={`mr-10 ${(isActive) => isActive? 'active' : 'default'}}`} to='statistics'>Statistics</NavLink>
                <NavLink className={`mr-10 ${(isActive) => isActive? 'active' : 'default'}}`} to="appliedJob"> Apply Job</NavLink>
                <NavLink className={` ${(isActive) => (isActive? 'active' : 'default')}}`} to='blog'>Blog</NavLink>
            </ul>
            <div>
                <button className='btn'>Star Applying</button>
            </div>

        </div>
    );
};

export default Nav;