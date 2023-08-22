'use client'

import { VideoProps } from '@/types'
import { HeartIcon, PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface VideoCardProps {
    video: VideoProps;
    containerStyle: string;
}

const VideoCard = ({video,containerStyle}: VideoCardProps) => {
  return (
    <div className={`${containerStyle} min-h-[20rem] md:min-h-[30rem] `}>
       <Link href='/' >
        <div className='bg-cover bg-no-repeat bg-center w-full h-full rounded-2xl' style={{backgroundImage: `url('${video.image}')`}}>
        <div className='h-full flex flex-col justify-between p-2'>
        <div className=' w-full flex justify-end gap-2'>
          <span className="bg-neutral-50 p-2 rounded-full bg-opacity-75"><HeartIcon 
            className='h-3 text-neutral-900 '
          /></span>
          <span className="bg-neutral-50 p-2 rounded-full bg-opacity-75"><PlusIcon 
            className='h-3 text-neutral-900 '
          /></span>
        </div>
        
        <div className='flex'>
          <div className='bg-red-200 p-6 rounded-full mr-2'></div>
          <div>
            <p>John Doe</p>
            <p>The Artist</p>
          </div>
        </div>
      
        </div>
        </div>
      </Link> 
    </div>
  )
}

export default VideoCard