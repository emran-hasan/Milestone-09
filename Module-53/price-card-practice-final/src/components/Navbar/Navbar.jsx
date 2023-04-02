import React, { useState } from 'react';
import LIst from '../List/LIst';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
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
          name: 'Contact',
          path: '/contact'
        },
        {
          id: 4,
          name: 'Blog',
          path: '/blog'
        },
        {
          id: 5,
          name: 'Post',
          path: '/blog/:postId'
        }
      ]
    return (
        <nav className='bg-blue-500'>
            <div onClick={()=>setOpen(!open)} className='md:hidden ml-5'>
                <span>{open ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3Icon className="h-6 w-6 text-white" />}</span>
                
                
            </div>


            <ul className={`md:flex justify-center drop-shadow-lg absolute md:static duration-500 bg-blue-500 p-5  ${open ? 'top-6' : '-top-48'}`}>
                {
                    routes.map(route=> <LIst
                    key={route.id}
                    route={route}
                    
                    ></LIst>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;