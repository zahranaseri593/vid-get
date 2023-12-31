'use client'

import { useState } from 'react'
import { CustomButton, NavLinks, SearchBox } from '.'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const Navbar = () => {
    const [collapse, setCollapse] = useState(false)

  return (
    <header className='z-30'>
        <nav className='navbar z-30 relative'>
            <Link href='/'>
                <p className='navbar__logo md:mr-14 lg:mr-40'>Vid.Get</p>
            </Link>
            {/* navbar collapse */}
            <div className={`${collapse? 'hidden': 'flex'} navbar__collapse`}>
                <SearchBox />
                <NavLinks />
                <div className='flex gap-3 md:flex-row'>
                    <CustomButton
                        title="Log in"
                        containerStyles=""
                    />
                    <CustomButton
                        title="sign up"
                        containerStyles="bg-white text-neutral-900"
                    />
                </div>
            </div>

            {/* menu icon */}
            <Bars3Icon className='h-10 cursor-pointer md:hidden' onClick={()=> setCollapse(prev => !prev)} />
        </nav>
    </header>
  )
}

export default Navbar