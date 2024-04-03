import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='  backgrondd'>
            <div className='my-container px-5 pt-10 lg:pt-36 lg:flex-row flex flex-col justify-between items-center'>
                <div className='max-w-xl'>
                    <h1 className='text-bold md:text-7xl font-bold md:font-extrabold text-center md:text-left'>One Step <br className='hidden lg:block' />Closer To Your <br className='sm:hidden lg:block' /><span className='text-indigo-500'>Dream Job</span></h1>
                    <p className='pt-6 text-gray-500 pb-8'>Explore thousands of job opportunities with all the  <br />information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
                    <span className=''><button className='btn'>Get Started </button></span>

                </div>
                <div className='relative lg:absolute end-0 max-w-screen-sm pb-5 pt-5 md:pt-0'>
                    <div className='lg:ml-auto'>
                        <img className=' object-cover md:img-height' src="../../../public/profile.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;