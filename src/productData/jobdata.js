export const Jobdetailsdata = async(id) =>{
    // console.log(params)
    // console.log(typeof(id))
    const data = await fetch('jobdetails.json')
    const showdata = await data.json() 
    // console.log(showdata)
    const newdata = showdata.find(pd => pd.id === parseInt(id))
    console.log(newdata)
    return {newdata}
}