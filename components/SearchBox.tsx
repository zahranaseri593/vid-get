'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useState,useContext } from 'react'

const SearchBox = () => {

  const [searchTerm,setSearchTerm] = useState('')

  return (
    <div className='flex items-center bg-neutral-700 text-neutral-400 px-2 py-2 lg:px-3 rounded-lg lg:rounded-xl'>
        <Link type='submit' href={`?searchTerm=${searchTerm}`} onClick={()=> setSearchTerm('')}><MagnifyingGlassIcon className='h-6 lg:h-7'/></Link>
        <input type="text" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} className='bg-transparent outline-none ml-3 min-w-[15rem] xl:min-w-[35rem]' placeholder='search'/>
    </div>
  )
}

export default SearchBox