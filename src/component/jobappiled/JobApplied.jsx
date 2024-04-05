import React from 'react';
import { Link } from 'react-router-dom';

const JobApplied = ({ job }) => {
    console.log(job)
    const { id, logo, companyName, employeePost, type, salary, location } = job
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between mt-8 items-center border-2 p-4 mb-7'>
                <div className='flex items-center gap-8'>
                    <div className='w-56 '>
                        <img className='object-cover' src={logo} alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold pb-4'>{employeePost}</h1>
                        <p className='text-gray-300 pb-4'>{companyName}</p>
                        <div className='flex gap-4'>
                            <button className='bg-gray-200 px-3 py-1 rounded'>{type}</button>
                            <button className='bg-gray-200 px-3 py-1 rounded'>Full Time</button>
                        </div>
                        <div className='flex items-center gap-4 pt-4'>
                            <p>{location}</p>
                            <p>{salary}k</p>
                        </div>
                    </div>
                </div>
                <Link to={`../jobDetails/${id}`}>
                    <button className='btn'>View Details</button>
                </Link>
            </div>
        </>
    );
};

export default JobApplied;