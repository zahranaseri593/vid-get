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
        <div className='bg-css w-full h-full rounded-2xl' style={{backgroundImage: `url('${video.image}')`}}>
        <div className='h-full flex flex-col justify-between p-2'>
        <div className=' w-full flex justify-end gap-2'>
          <span className="bg-neutral-50 p-2 rounded-full bg-opacity-75"><HeartIcon 
            className={`h-3 text-neutral-900`}
          /></span>
          <span className="bg-neutral-50 p-2 rounded-full bg-opacity-75"><PlusIcon 
            className='h-3 text-neutral-900 '
          /></span>
        </div>
        
        <Link href={video.user.url} className='flex'>
          <div 
          className='bg-css p-6 rounded-full mr-2' 
          style={{backgroundImage: `url(https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=)`,backgroundSize: '150%'}}/>
          <div>
            <p>{video.user.name}</p>
            <p>Artist</p>
          </div>
        </Link>
      
        </div>
        </div>
      </Link> 
    </div>
  )
}

export default VideoCard