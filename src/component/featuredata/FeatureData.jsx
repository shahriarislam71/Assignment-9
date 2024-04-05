import React from 'react';
import { Link } from 'react-router-dom';

const FeatureData = ({ pd }) => {
    const { id, companyName, logo, type, employeePost, salary,
        location } = pd
    // console.log(location)
    return (
        <div className='border-2 h-96 max-w-screen-lg overflow-hidden pl-10 pt-10 rounded'>
            <div className=''>
                <img className='h-12' src={logo} alt="" />
            </div>
            <h1 className='text-2xl font-extrabold pt-8 pb-4'>{employeePost}</h1>
            <p className='text-gray-600'>{companyName}</p>
            <div className='gap-4 flex pt-4 pb-4'>
                <button className='border-2 px-5 py-1 border-indigo-500 text-indigo-500 rounded'>{type}</button>
                <button className='border-2 px-5 py-1 border-indigo-500 text-indigo-500 rounded'>Full Time</button>
            </div>
            <div className='flex gap-5 mb-4'>
                <p>{location}</p>
                <p>Salary : {salary}k</p>
            </div>
            <Link to = {`/jobDetails/${id}`}><button className='btn'>View Details</button></Link>
        </div>
    );
};

export default FeatureData;