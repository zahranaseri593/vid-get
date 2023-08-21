'use client'

import { VideoProps } from '@/types'
import Image from 'next/image';

interface VideoCardProps {
    video: VideoProps;
    containerStyle: string;
}

const VideoCard = ({video,containerStyle}: VideoCardProps) => {
  return (
    <div className={`${containerStyle}`}>
      <div className='bg-cover bg-no-repeat bg-center w-full h-full rounded-2xl' style={{backgroundImage: `url('${video.image}')`}}>
      {/* play video on hover */}
      </div>
    </div>
  )
}

export default VideoCard