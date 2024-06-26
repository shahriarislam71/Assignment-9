import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/home/Home.jsx';
import Statistics from './component/statistics/Statistics.jsx';
import AppliedJob from './component/appliedJob/AppliedJob.jsx';
import Blog from './component/blog/Blog.jsx';
import {   productData } from './productData/productData.js';
import JobDetails from './component/jobDetails/JobDetails.jsx';
import { Jobdetailsdata } from './productData/jobdata.js';

const router = createBrowserRouter([{
  path : "/",
  element : <App></App>,
  loader : productData,
  children : [
    {
      path : "/",
      element : <Home></Home>
    },
    {
      path : "statistics",
      element : <Statistics></Statistics>
    },
    {
      path : "appliedJob",
      element : <AppliedJob></AppliedJob>
    },
    {
      path : "blog",
      element : <Blog></Blog>
    },
    {
      path : "jobDetails/:id",
      element : <JobDetails></JobDetails>,
      loader : ({params})=> Jobdetailsdata(params.id)
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
