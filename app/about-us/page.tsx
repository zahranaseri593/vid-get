import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='mt-20 text-lg capitalize'>
        made with <Link href='https://www.pexels.com' className='underline'>Pexels API</Link>  by Zahra Naseri ♡ <br/>
        email: ZahraNaseri593@gmail.com <br/>
        instagram:  <Link href='https://www.instagram.com/zaaahra.ns/' className='underline'>zaaahra.ns</Link>  <br/>
    </div>
  )
}

export default page