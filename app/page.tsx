'use client'

import { VideoCard } from '@/components'
import { VideoProps } from '@/types'
import { fetchVideos, url } from '@/utils'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'  
import {RotatingLines} from 'react-loader-spinner'

export default function Home() {

  const [loading, setLoading] = useState(false)
  const [videos, setVideos] = useState< any | VideoProps>({})

  useEffect(() => {
    setLoading(true)
    
    fetchVideos(`${url}/videos/popular`)
    .then((response) => setVideos(response)).then(()=> setLoading(false))
    .catch((error)=> console.log(error))
  }, []);


  const handlePage = (e: any, page :string) => {
    e.preventDefault()
    setLoading(true)
    
    fetchVideos(`${page}`)
    .then((response) => setVideos(response)).then(()=> setLoading(false))
    .catch((error)=> console.log(error))
  }


  if(loading) return (
    <div className="flex justify-center">
    <RotatingLines
      strokeColor="#2dd4bf"
      strokeWidth="3"
      width="50"
      visible={true}
    />
    </div>
  )

  if(videos.videos) return (
    <>
    <div className="w-full">
      {/* grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 row-span-6 gap-4">
        <div className='row-span-1'>
          <h1 className='uppercase text-2xl md:text-4xl lg:text-6xl font-bold tracking-tighter mb-10'> biggest bank of copyright free videos</h1>
          <p className='text-xl'>find videos you like, get them with just a click and use them !</p>
        </div>
        <VideoCard
          video={videos.videos[0]}
          containerStyle="lg:col-span-2 xl:col-span-3 md:col-span-1 row-span-2"
        />
      
        {videos.videos.slice(1).map((item : VideoProps) => (
           <VideoCard
             video={item}
             containerStyle="row-span-3"
             key={videos.id}
         />
        ))}
      </div>
    </div>

    {/* pagination */}
    <div className='w-fit mx-auto flex gap-2 mt-5'>
      
      {videos.prev_page && 
      <div className="bg-teal-700 p-2 rounded-full cursor-pointer">
      <ChevronLeftIcon className='text-white h-6' onClick={(e)=>{handlePage(e,videos.prev_page)}}/>
      </div>
      }

      {videos.next_page && 
      <>
      <div className="bg-teal-800 p-2 rounded-lg cursor-pointer">
      page: {videos.page}
      </div>
      <div className="bg-teal-700 p-2 rounded-full cursor-pointer">
      <ChevronRightIcon className='text-white h-6' onClick={(e)=>{handlePage(e,videos.next_page)}}/>
      </div></>}

      </div>
    </>
  )

}
