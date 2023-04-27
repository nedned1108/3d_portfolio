import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { NavLink } from 'react-router-dom'
import { menu, close } from '../assets'
import ned_logo from '../assets/ned-logo.png'

const Navbar = () => {
  const [active, setActive] = useState("");


  return (
    <nav
      className={`${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='flex items-center justify-between w-full max-w-7xl mx-auto'>
        <Link 
          to='/' 
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={ned_logo} alt='logo' className='w-9 h-9 object-contain' />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
