import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const loaddata = useLoaderData()
    console.log(loaddata)
    const { jobDescription, jobResponsibility, requirement, experience, salary, employeePost, email, mobileNumber, location } = loaddata.newdata
    return (
        <>
            <div className='pt-5 md:pt-32 text-center backgrondd'>
                <h1 className='text-bold font-semibold md:text-2xl md:font-extrabold pb-20'>Job Details</h1>
            </div>
            <div className='my-container flex flex-col md:flex-row items-start gap-20 px-5 mt-5 md:mt-32'>
                <div>
                    <h1 className='mb-5'><span className='text-base font-extrabold'>Job Description :</span> {jobDescription}</h1>
                    <p className='mb-5'><span className='text-base font-extrabold' >Job Responsibility :</span> {jobResponsibility}</p>
                    <p className='mb-5'><span className='text-base font-extrabold'>Educational Requirements :</span> {requirement}</p>
                    <p><span className='text-base font-extrabold'>Experience : </span> {experience} </p>
                </div>
                <div className='max-w-xl mb-10'>
                    <div className='backgrondd pt-8 pl-8 rounded ' >
                        <h1 className='text-xl font-semibold pb-5'>Job Details</h1>
                        <hr />
                        <p className='pt-6 pb-4'><span className='text-bold font-semibold'>Salary</span> : {salary}k</p>
                        <p><span className='text-bold font-semibold'>Job title</span> : {employeePost}</p>
                        <h1 className='pt-4 pb-5 text-bold font-extrabold'>Contact Information</h1>
                        <hr />
                        <p className='pt-5 pb-4'><span className='text-bold font-semibold'>Phone</span> : {mobileNumber}</p>
                        <p ><span className='text-bold font-semibold'>Email</span> : {email}</p>
                        <p className='pt-5 pb-4'><span className='text-bold font-semibold'>Address</span> : {location}</p>
                        
                    </div>
                    <button className='btn w-full mt-3'>Apply Now</button>
                </div>
            </div>
        </>
    );
};

export default JobDetails;