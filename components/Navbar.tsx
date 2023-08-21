import React from 'react'
import { CustomButton, NavLinks, SearchBox } from '.'

const Navbar = () => {
  return (
    <header className='w-full bg-neutral-900'>
        <nav className='navbar'>
            <p className='navbar__logo'>Vid.Get</p>
            <SearchBox />
            <NavLinks />
            <div className='flex gap-3'>
                <CustomButton
                    title="Log in"
                    containerStyles=""
                />
                <CustomButton
                    title="sign up"
                    containerStyles="bg-white text-neutral-900"
                />
            </div>
        </nav>
    </header>
  )
}

export default Navbar