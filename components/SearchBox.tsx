import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import React from 'react'

const SearchBox = () => {
  const router = usePathname()

  return (
    <form action={() => {}} className='flex items-center bg-neutral-700 text-neutral-400 px-2 py-1 rounded-lg'>
        <MagnifyingGlassIcon className='h-6 '/>
        <input type="text" id="" className='bg-transparent outline-none ml-3 min-w-[15rem]' placeholder='search'/>
    </form>
  )
}

export default SearchBox