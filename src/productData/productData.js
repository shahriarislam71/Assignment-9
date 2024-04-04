
export const productData = async()=>{
    const data = await fetch('jobdetails.json')
    const showdata = await data.json()
    return {showdata}
}

