'use client'

import { VideoProps } from '@/types'
import { fetchVideos } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {useState,useEffect} from 'react'
import { RotatingLines } from 'react-loader-spinner'
import ReactPlayer from 'react-player'

interface VidDetail {
    video: VideoProps
}

const page = ({video}: VidDetail) => {
    const router = usePathname()
    //how to write it better and cleaner?
    const [loading, setLoading] = useState(true)
    const [videoDetail, setVideoDetail] = useState< any | VideoProps>({})

  useEffect(() => {
    fetchVideos(`/videos/${router}`)
    .then((response) => setVideoDetail(response)).then(()=> setLoading(false))
    .catch((error)=> console.log(error))
  })


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


  return (
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
            {/* <a href={`${videoDetail.video_files[0].link}`}  download={`${videoDetail.user.name}`} target="_blank">download</a> */}
            <Link href={`${videoDetail.video_files[0].link}`} download='' className='bg-cyan-800 px-5 py-2 rounded-sm text-white'>
              download
            </Link>
        </div>

    </div>
  )
}

export default page