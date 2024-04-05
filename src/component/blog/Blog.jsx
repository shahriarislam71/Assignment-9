import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='backgrondd pt-8 md:pt-16 pb-8 md:pb-16'>
                <h1 className='text-center text-xl font-semibold'>Blog Writing</h1>
            </div>
            <div className='my-container mt-8'>
                <h1 className='text-xl font-semibold'>1. When should we use the context API?</h1>
                <p className='font-bold text-gray-500 mt-3'>Ans. When some common data needs to distribute among its the nestead levels then we will use the context API instead of passing props inside many levels from the parent component.</p>
                <h1 className='text-xl font-semibold mt-3'>2. What is the custom hook?</h1>
                <p className='font-bold text-gray-500 mt-3'>Ans. Custom Hook is the mechanism for reusing a code which ensures the clean code and reduces the time to write extra code.</p>
                <h1 className='text-xl font-semibold mt-3'>3. What is the UseRef Hook?</h1>
                <p className='font-bold text-gray-500 mt-3'>Ans. UseRef is the hook that allows you to directly create a reference to the dom element in the functional component. </p>
                <h1 className='text-xl font-semibold mt-3'>4. What is the useMemo Hook?</h1>
                <p className='font-bold text-gray-500 mt-3'>Ans. UseMemo is a react hook that is used for react memoization. It has an optimization technique to improve the performance of the react component.</p>
            </div>
        </div>
    );
};

export default Blog;