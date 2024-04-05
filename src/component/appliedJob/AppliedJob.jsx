import React, { useContext, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { AppliedJobData } from '../../App';
import JobApplied from '../jobappiled/JobApplied';
import { XMarkIcon } from '@heroicons/react/24/solid'

const AppliedJob = () => {
    const [cart, setcart] = useContext(AppliedJobData || [])
    // console.log(cart)
    const [newcart, setnewcart] = useState(cart)
    const [filterbtn, setfilterbtn] = useState(false)
    const Filterbtn = () => {
        setfilterbtn(true)
    }
    const Offfilter = () => {
        setnewcart(cart)
        setfilterbtn(false)
    }
    const RemoteJobs = () =>{
        let remoteJobs = []
        for (let type of cart){
            // console.log(type.type)
            if (type.type === 'Remote'){
                remoteJobs.push(type)
            }
            // console.log(remoteJobs)
        }
        
        setnewcart(remoteJobs)
    }
    const OnsiteJob = () =>{
        let onsitejob = []
        for (let type of cart){
            // console.log(type.type)
            if (type.type === 'Onsite'){
                onsitejob.push(type)
            }
            // console.log(remoteJobs)
        }
        setnewcart(onsitejob)
    }

    return (
        <>
            <div className='backgrondd pt-10 md:pt-32'>
                <h1 className='text-center text-xl font-semibold pb-5 md:pb-20'>Applied Jobs</h1>
            </div>
            <div className='my-container px-5 mt-5 md:mt-20'>
                {
                    !filterbtn && (<span className='flex justify-end'>
                        <button onClick={() => Filterbtn()} className=' bg-gray-100 px-5 py-3 rounded flex gap-2'>
                            <span>Filter</span>
                            <ChevronDownIcon className="h-6 w-6 text-blue-500" />
                        </button>
                    </span>)
                }
                {
                    filterbtn && (<div className='text-end'>
                        <span className='flex justify-end'><XMarkIcon onClick={() => Offfilter()} className="h-6 w-6 text-blue-500" /></span>
                        <div className=''>
                            <button onClick={()=>RemoteJobs()} className='btn '>Show Remote Job</button><br />
                            <button onClick={()=>OnsiteJob()} className='btn mt-3'>Show Onsite Job</button>
                        </div>
                    </div>)
                }
                <div>
                    {
                        newcart.map(job => <JobApplied key={job.id} job={job}></JobApplied>)
                    }
                </div>
            </div>
        </>
    );
};

export default AppliedJob;