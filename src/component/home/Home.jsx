import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='  backgrondd'>
                <div className='my-container px-5 pt-10 lg:pt-36 lg:flex-row flex flex-col justify-between items-center'>
                    <div className='max-w-xl'>
                        <h1 className='text-bold md:text-7xl font-bold md:font-extrabold text-center md:text-left'>One Step <br className='hidden lg:block' />Closer To Your <br className='sm:hidden lg:block' /><span className='text-indigo-500'>Dream Job</span></h1>
                        <p className='pt-6 text-gray-500 pb-8'>Explore thousands of job opportunities with all the  <br />information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
                        <span className='flex  md:block justify-center'><button className='btn '>Get Started </button></span>

                    </div>
                    <div className='relative lg:absolute end-0 max-w-screen-sm pb-5 pt-5 md:pt-0'>
                        <div className='lg:ml-auto'>
                            <img className=' object-cover md:img-height' src="../../../public/profile.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-36'>
                <h1 className='text-center text-bold md:text-5xl font-semibold md:font-extrabold'>Job Category List</h1>
                <p className='text-center mt-6 text-gray-500 px-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='flex flex-col md:flex-row my-container px-5 justify-between mb-4 mt-8 rounded-lg gap-5'>
                    <div className='backgrondd pl-10 pt-10'>
                        <img className='pb-8' src="../../../public/accounts 1.png" alt="" />
                        <h1 className='pr-20 pb-4 text-xl font-extrabold'>Account & Finance</h1>
                        <p className='pb-10'>300 Jobs Available</p>
                    </div>
                    <div className='backgrondd pl-10 pt-10'>
                        <img className='pb-8' src="../../../public/business 1.png" alt="" />
                        <h1 className='pr-20 pb-4 text-xl font-extrabold'>Creative Design</h1>
                        <p className='pb-10'>100+ Jobs Available</p>
                    </div>
                    <div className='backgrondd pl-10 pt-10'>
                        <img className='pb-8' src="../../../public/chip 1.png" alt="" />
                        <h1 className='pr-20 pb-4 text-xl font-extrabold'>Marketing & Sales</h1>
                        <p className='pb-10'>150 Jobs Available</p>
                    </div>
                    <div className='backgrondd pl-10 pt-10'>
                        <img className='pb-8' src="../../../public/social-media 1.png" alt="" />
                        <h1 className='pr-20 pb-4 text-xl font-extrabold'>Engineering Job</h1>
                        <p className='pb-10'>224 Jobs Available</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;