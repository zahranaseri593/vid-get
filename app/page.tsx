'use client'

import { Loading, VideoCard } from '@/components'
import { CategoryProps, CollectionProps, VideoProps } from '@/types'
import { fetchVideos, url } from '@/utils'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('searchTerm')

  const [loading, setLoading] = useState(false)
  const [videos, setVideos] = useState< any | VideoProps>({})
  const [categories, setCategories] = useState<any| CategoryProps>({})

  useEffect(() => {
    setLoading(true)

    let searchQuery = `search?query=${searchTerm}`
    
    fetchVideos(`${url}/videos/${searchTerm? searchQuery :'popular'}`)
    .then((response) => setVideos(response)).then(()=> setLoading(false))
    .catch((error)=> console.log(error))

    // get collections
    fetchVideos(`${url}/v1/collections/featured`)
    .then((response) => setCategories(response))
    .catch((error)=> console.log(error))
  }, [searchTerm])


  const handlePage = (e: any, page :string) => {
    e.preventDefault()
    setLoading(true)
    
    fetchVideos(`${page}`)
    .then((response) => setVideos(response)).then(()=> setLoading(false))
    .catch((error)=> console.log(error))
  }


  if(loading) return <Loading />

  if(videos.videos) return (
    <>
    <div className="w-full">
      {/* grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 row-span-6 gap-4">
        
        
        <div className={`row-span-1 ${searchTerm? 'col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-4': ''}`}>
          <h1 className={`uppercase ${searchTerm? 'searchTitle':'homeTitle'}`}>{searchTerm? `searching for : ${searchTerm}` : 'biggest bank of copyright free videos'}</h1>
          <p className='text-xl'>{searchTerm? `${videos.total_results} results found for ${searchTerm} !`:'find videos you like, get them with just a click and use them !'}</p>

          {categories.collections && 
            <div className='collection'>
              {categories.collections.map((c : CollectionProps)=>(
                <Link href={`?searchTerm=${c.title}`} key={c.id} className='category'>{c.title}</Link>
              ))}
            </div>
          }
        </div>
        {!searchTerm && <VideoCard
          video={videos.videos[0]}
          containerStyle="lg:col-span-2 xl:col-span-3 md:col-span-1 row-span-2"
        />}
        
      
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
