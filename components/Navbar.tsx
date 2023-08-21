'use client'

import { useState } from 'react'
import { CustomButton, NavLinks, SearchBox } from '.'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [collapse, setCollapse] = useState(false)

  return (
    <header className='w-full bg-neutral-900'>
        <nav className='navbar relative'>
            <p className='navbar__logo lg:mr-14'>Vid.Get</p>
            {/* navbar collapse */}
            <div className={`${collapse? 'hidden': 'flex'} navbar__collapse`}>
                <SearchBox />
                <NavLinks />
                <div className='flex gap-3 lg:flex-row'>
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
            <Bars3Icon className='h-10 cursor-pointer lg:hidden' onClick={()=> setCollapse(prev => !prev)} />
        </nav>
    </header>
  )
}

export default Navbar