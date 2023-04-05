import React, { useEffect, useState } from 'react'
import PriceCard from '../PriceCard/priceCard'

const Pricelist = () => {
    const [prices,setPrice]=useState([])
    useEffect(()=>{
        fetch('membership.json')
        .then(res=>res.json())
        .then(data=>setPrice(data))
    },[])
  return (
    <div>
        <h2 className='text-purple-400 text-center text-4xl mt-5'>Gym Membership Pricig</h2>
        <div className='grid md:grid-cols-3 gap-3'>
        {
            prices.map(price=><PriceCard key={price.id} price={price}></PriceCard>)
            
        }
         
        </div>
       

    </div>
  )
}

export default Pricelist