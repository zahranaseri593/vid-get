import Link from 'next/link'
import React from 'react'

const custom404 = () => {
  return (
    <section className='text-center flex items-center justify-center h-screen'>
        <Link href='/' className=''>
            <p className='text-3xl'>404 | the page you're Looking for, doesn't exist!</p>
            <p className='text-xl'>- go to homepage -</p>
        </Link>
    </section>
  )
}

export default custom404