'use client'

import { Loading } from '@/components'
import { VideoFilesProps, VideoProps } from '@/types'
import { fetchVideos, url } from '@/utils'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {useState,useEffect, ChangeEventHandler} from 'react'
import ReactPlayer from 'react-player'

const page = () => {
  const videoParams = useSearchParams()
  const VideoId = videoParams.get('vid')

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [videoDetail, setVideoDetail] = useState< {} | VideoProps>({})

  const [selected , setSelected] = useState<string>('')
  const setUrl = (e: React.ChangeEvent<HTMLSelectElement> ) =>{
    setSelected(e.target.value) 
  }

  useEffect(() => {
    setLoading(true)
    
    fetchVideos(`${url}videos/videos/${VideoId}`)
    .then((response) => setVideoDetail(response)).then(()=> setLoading(false))
    .catch((error)=> setError(error))
  },[])

  if(loading || !(videoDetail as VideoProps).video_files) return <Loading />
  

  if((videoDetail as VideoProps).video_files) return (
    <div className='flex flex-col gap-8 max-w-5xl mx-auto'>
        <div className=''>
           <ReactPlayer 
            url={`${(videoDetail as VideoProps).video_files[0].link}`}
            width='100%' 
            height='100%' 
            controls={true} 
          /> 

        </div>

        <div className="max-w-md flex flex-col gap-3 text-center mx-auto">
            <Link href={(videoDetail as VideoProps).user.url} className="text-3xl text-white">Artist : {(videoDetail as VideoProps).user.name } </Link>
            <p>video duration: {(videoDetail as VideoProps).duration} sec</p>
            <select id="underline_select"  className="select-css" onChange={(e)=>{setUrl(e)}}>
                <option selected disabled>choose a resolution</option>
                {(videoDetail as VideoProps).video_files.map((v :VideoFilesProps)=>(
                  <option key={v.id} value={v.link}>quality {v.quality} - {v.width} * {v.height}</option>
                ))}
            </select>
            <Link href={`${selected}`} target='_blank' className='bg-teal-700 text-white px-5 py-2 rounded-lg'>Download</Link>
        </div>
        
    </div>
  )

  if(error) return <p>internal server error, try again in a few seconds</p>

}
export default page