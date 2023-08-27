'use client'

import { VideoProps } from '@/types'
import { fetchVideos, url } from '@/utils'
import { usePathname } from 'next/navigation'
import {useState,useEffect} from 'react'
import { RotatingLines } from 'react-loader-spinner'
import ReactPlayer from 'react-player'

const page = () => {
    const router = usePathname()
    //how to write it better and cleaner?
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [videoDetail, setVideoDetail] = useState< any | VideoProps>({})

  useEffect(() => {
    setLoading(true)
    
    fetchVideos(`${url}videos/videos/${router}`)
    .then((response) => setVideoDetail(response)).then(()=> setLoading(false))
    .catch((error)=> setError(error))
  },[])



  if(loading || !videoDetail.video_files) return (
    <div className="flex justify-center">
    <RotatingLines
      strokeColor="#2dd4bf"
      strokeWidth="3"
      width="50"
      visible={true}
    />
    </div>
  )

  
  if(videoDetail.video_files) return (
    <div className='grid grid-cols-3 gap-3'>
        <div className='lg:col-span-2 col-span-3'>
           <ReactPlayer 
          url={`${videoDetail.video_files[0].link}`}
          width='100%' 
          height='100%' 
          controls={true} 
          /> 

        </div>
        <div className='col-span-1'>
            <h1 className="text-3xl text-white">{videoDetail.user.name}</h1>
            <p>duration: {videoDetail.duration}</p>
        </div>
    </div>
  )

  if(error) return <p>internal error, try again in a few seconds</p>

}
export default page