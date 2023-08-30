'use client'

import { VideoProps } from '@/types'
import { ClockIcon, HeartIcon, PlusIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Loading } from '.';
import { RotatingLines } from 'react-loader-spinner';

interface VideoCardProps {
    video: VideoProps;
    containerStyle: string;
}

const VideoCard = ({video,containerStyle}: VideoCardProps) => {
  
  const handleHover = (e:any) =>{
    e.target.currentTime = 1;
    e.target.playbackRate = 0.5;
    e.target.play()
  }
  const handleLeave = (e:any) => {
    e.target.currentTime = 0;
    e.target.playbackRate = 1;
    e.target.pause()
  }
  
  return (
    <div className={`${containerStyle} min-h-[20rem] md:min-h-[30rem] `}>
       <Link href={`/video/id?vid=${video.id}`} >
        <div className='bg-css bg-teal-900 w-full h-full rounded-2xl' style={{backgroundImage: `url(${video.image})`}}>
              <div className='h-full flex flex-col justify-between p-2 '>
                <div className='w-full flex justify-end gap-2 z-20'>
                  <span className="bg-neutral-50 p-2 rounded-full bg-opacity-75"><HeartIcon 
                    className={`h-3 text-neutral-900`}
                  /></span>
                  <span className="bg-neutral-50 p-2 rounded-full bg-opacity-75"><PlusIcon 
                    className='h-3 text-neutral-900 '
                  /></span>
                </div>


              <div className='flex justify-between '>
                <Link href={video.user.url} className='flex '>
                  <div 
                  className='bg-css p-6 rounded-full mr-2' 
                  style={{backgroundImage: `url(https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=)`,backgroundSize: '150%'}}/>
                  <div>
                    <p>{video.user.name}</p>
                    <p>Artist</p>
                  </div>
                </Link>

                <div className='flex items-end pr-2'>
                  <ClockIcon className='h-6 text-white'/>
                  <span>{video.duration} s</span>
                </div>
              </div>

            </div>
        </div>
      </Link> 
    </div>
  )
}

export default VideoCard