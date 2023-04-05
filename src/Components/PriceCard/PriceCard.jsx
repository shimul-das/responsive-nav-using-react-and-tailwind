import React from 'react'
import Features from '../Features/Features'

const PriceCard = ({price}) => {
    
  return (
    <div className='relative m-5 p-5 border-solid border-2 border-purple-600 bg-green-500 rounded'>
        <h4 className='text-3xl font-bold text-center'>{price.name}</h4>
        <h3 className='text-center' ><span className='text-purple-600 text-3xl font-boldclear'>{price.price}<span className='text-slate-800 font-serif'>/mon</span></span></h3>
        <p className='font-bold text-white underline'>Features:</p>
        {
          price.tools.map((feature,idx)=><Features key={idx} feature={feature}></Features>)
        }
        <button className=' absolute bottom-2 right-0 mt-2 hover:bg-orange-600 w-full bg-green-500 font-bold py-2 rounded-md  bg-lime-600'>Buy Now</button>
    </div>
  )
}

export default PriceCard