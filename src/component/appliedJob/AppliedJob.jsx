import React, { useContext } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { AppliedJobData } from '../../App';
import JobApplied from '../jobappiled/JobApplied';

const AppliedJob = () => {
    const [cart,setcart] = useContext(AppliedJobData || [])
    // console.log(cart)
    return (
        <>
            <div className='backgrondd pt-10 md:pt-32'>
                <h1 className='text-center text-xl font-semibold pb-5 md:pb-20'>Applied Jobs</h1>
            </div>
            <div className='my-container px-5 mt-5 md:mt-20'>
                <span className='flex justify-end'>
                    <button className=' bg-gray-100 px-5 py-3 rounded flex gap-2'>
                        <span>Filter</span>
                        <ChevronDownIcon className="h-6 w-6 text-blue-500" />
                    </button>
                </span>
                <div>
                    {
                        cart.map(job => <JobApplied key = {job.id} job = {job}></JobApplied>)
                    }
                </div>
            </div>
        </>
    );
};

export default AppliedJob;