import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    const [isOpen, setValue] = useState(false)
    return (
        <div className='my-container px-5 pt-5 lg:pt-16'>
            <div className='relative justify-between items-center flex'>
                <div className='fonts'>
                    <h1>Job Seekers</h1>
                </div>
                <ul className='hidden md:flex items-center'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='statistics' className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to="appliedJob" className={({ isActive }) => (isActive ? 'active' : 'default')}> Apply Job</NavLink>
                    </li>
                    <li>
                        <NavLink to='blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                    </li>
                </ul>
                <div>
                    <button className='btn'>Star Applying</button>
                </div>
                <div className='lg:hidden'>
                    <button className='lg:hidden'>
                        <Bars3BottomLeftIcon onClick={() => setValue(true)} className="h-6 w-6 text-blue-500" />
                    </button>
                    {
                        isOpen && (
                            <div className='bg-indigo-500 w-full absolute top-0 left-0 '>
                                <div className='flex justify-end'>
                                    <div>
                                        <button>
                                            <XMarkIcon onClick = {()=>setValue(false)} className="h-6 w-6 text-blue-500"></XMarkIcon>
                                        </button>
                                    </div>
                                </div>
                                <ul className='space-y-5'>
                                    <li>
                                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='statistics' className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistics</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="appliedJob" className={({ isActive }) => (isActive ? 'active' : 'default')}> Apply Job</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Nav;