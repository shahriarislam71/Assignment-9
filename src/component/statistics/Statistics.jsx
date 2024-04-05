import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const chart = [
        {
            "assignment": "Assignment-1",
            "mark": 45
        },
        {
            "assignment": "Assignment-2",
            "mark": 60
        },
        {
            "assignment": "Assignment-3",
            "mark": 58
        },
        {
            "assignment": "Assignment-4",
            "mark": 50
        },
        {
            "assignment": "Assignment-5",
            "mark": 47
        },
        {
            "assignment": "Assignment-6",
            "mark": 60
        },
        {
            "assignment": "Assignment-7",
            "mark": 55
        },
        {
            "assignment": "Assignment-8",
            "mark": 40
        },
        {
            "assignment": "Assignment-9",
            "mark": 52
        },
        {
            "assignment": "Assignment-10",
            "mark": 46
        }
    ]
    return (
        <>
            <div className='backgrondd mb-5 md:mb-20'>
                <h1 className='text-center text-xl font-semibold pb-14 pt-8 md:pt-20'>statistics</h1>
            </div>
            <div className='my-container'>
                <div style={{ height: '350px', width: "100%" }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chart}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="assignment" />
                            <YAxis dataKey="mark" />
                            <Tooltip />
                            <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default Statistics;