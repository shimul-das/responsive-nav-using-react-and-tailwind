import React, { useState } from 'react'
import Link from '../Link/Link';
import { BeakerIcon,Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open,setOpen]=useState();
    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/'
        },
        {
          id: 2,
          name: 'About',
          path: '/about'
        },
        {
          id: 3,
          name: 'Products',
          path: '/products'
        },
        {
          id: 4,
          name: 'Product Detail',
          path: '/products/:id'
        },
        {
          id: 5,
          name: 'Contact',
          path: '/contact'
        }
      ];
      
  return (
    <nav>
        <div className='md:hidden bg-purple-400' onClick={()=>setOpen(!open)}>
            <span>{
            open=== true ? <Bars3Icon className="h-6 w-6 text-purple-500" />
            :
            <XMarkIcon className="h-6 w-6 text-purple-500" />
            }</span>
        
        
        </div>
        
        <ul className={`md:flex absolute md:static p-2 duration-1000 bg-purple-400 ${open ? 'top-18':'-top-96'}`}>
        {
            routes.map(route=><Link key={route.id} route={route}></Link>)
        }  
        </ul>
    </nav>
  )
}

export default Navbar