import React, { useContext, useState } from 'react';
import './Home.css'
import { Productcontext } from '../../App';
import FeatureData from '../featuredata/FeatureData';

const Home = () => {
    const data = useContext(Productcontext || [])
    // console.log(data)
    const [jobState, setjobstate] = useState(false)
    const [newData, setnewData] = useState(data.slice(0, 4))
    const [jobBtnState, setJobBtn] = useState(false)
    // console.log(newData)
    if (jobState) {
        setnewData(data.slice(0, 10))
        setjobstate(false)
        setJobBtn(true)
    }
    const SellAllbtn = ()=>{
        setnewData(data.slice(0, 4))
        setJobBtn(false)
    }

    return (
        <>
            <div className='  backgrondd'>
                <div className='my-container px-5 pt-10 lg:pt-36 lg:flex-row flex flex-col justify-between items-center'>
                    <div className='max-w-xl'>
                        <h1 className='text-bold md:text-7xl font-bold md:font-extrabold text-center md:text-left'>One Step <br className='hidden lg:block' />Closer To Your <br className='sm:hidden lg:block' /><span className='text-indigo-500'>Dream Job</span></h1>
                        <p className='pt-6 text-gray-500 pb-8'>Explore thousands of job opportunities with all the  <br />information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
                        <span className='flex  md:block justify-center'><button className='btn '>Get Started </button></span>

                    </div>
                    <div className='  pt-5 md:pt-0'>
                        <div className='lg:ml-auto'>
                            <img className=' object-cover md:img-height' src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1712275200&semt=sph" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Job Category List */}
            <div className='mt-10 md:mt-36'>
                <h1 className='text-center text-bold md:text-5xl font-semibold md:font-extrabold'>Job Category List</h1>
                <p className='text-center mt-6 text-gray-500 px-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='flex flex-col md:flex-row my-container px-5 justify-between mb-4 mt-8 rounded-lg gap-5'>
                    <div className='backgrondd pl-10 pt-10'>
                        <img className='pb-8 w-16' src="https://cdn3.vectorstock.com/i/1000x1000/03/92/accounting-and-financial-logo-vector-28280392.jpg" alt="" />
                        <h1 className='pr-20 pb-4 text-xl font-extrabold'>Account & Finance</h1>
                        <p className='pb-10'>300 Jobs Available</p>
                    </div>
                    <div className='backgrondd pl-10 pt-10'>
                        <img className='pb-8 w-16' src="https://img.freepik.com/premium-vector/creative-unique-pencil-art-logo-design-template_132230-556.jpg" alt="" />
                        <h1 className='pr-20 pb-4 text-xl font-extrabold'>Creative Design</h1>
                        <p className='pb-10'>100+ Jobs Available</p>
                    </div>
                    <div className='backgrondd pl-10 pt-10'>
                        <img className='pb-8 w-16' src="https://c8.alamy.com/comp/2CA4EPT/marketing-finance-sales-economical-business-solutions-logo-vector-illustration-2CA4EPT.jpg" alt="" />
                        <h1 className='pr-20 pb-4 text-xl font-extrabold'>Marketing & Sales</h1>
                        <p className='pb-10'>150 Jobs Available</p>
                    </div>
                    <div className='backgrondd pl-10 pt-10'>
                        <img className='pb-8 w-16' src="https://www.shutterstock.com/image-vector/engineer-logo-template-design-vector-260nw-652938451.jpg" alt="" />
                        <h1 className='pr-20 pb-4 text-xl font-extrabold'>Engineering Job</h1>
                        <p className='pb-10'>224 Jobs Available</p>
                    </div>
                </div>

            </div>
            {/* Featured Jobs */}
            <div className='mt-10 md:mt-36'>
                <h1 className='text-center text-bold md:text-5xl font-semibold md:font-extrabold'>Featured Jobs</h1>
                <p className='text-center mt-6 text-gray-500 px-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className=' grid grid-cols-1 md:grid-cols-2 mt-8 my-container px-5 gap-4'>
                    {newData.map(pd => <FeatureData key={pd.id} pd={pd}></FeatureData>)}
                </div>
            </div>
            {/* see all button  */}
            {!jobBtnState && <div onClick={() => setjobstate(true)} className='flex justify-center mt-10 md:mt-20'>
                <button className='btn'>See All Jobs</button>
            </div>}
            {
                jobBtnState && <div onClick={() => SellAllbtn()} className='flex justify-center mt-10 md:mt-20'>
                    <button className='btn'>See Less Jobs</button>
                </div>
            }
        </>
    );
};

export default Home;