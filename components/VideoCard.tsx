'use client'

import { VideoProps } from '@/types'
import { ClockIcon, HeartIcon, PlusIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className='bg-css bg-teal-700 w-full h-full rounded-2xl relative'>
            <video src={`${video.video_files[0].link}`}
              type={`${video.video_files[0].file_type}`} muted onMouseEnter={(e)=>{handleHover(e)}} onMouseLeave={(e)=>{handleLeave(e)}} className="absolute w-full h-full object-cover rounded-2xl z-0" loop style={{top: 0 , left: 0}}>
            </video>

            <Image 
              src={`${video.image}`}
              width={video.width}
              height={video.height}
              alt='thumbnail'
              className='object-cover w-full h-full absolute rounded-2xl z-10'
              style={{top:0, left: 0}}
              onMouseOver={(e:any)=>{e.target.hidden = true}}
              onMouseLeave={(e:any)=>{e.target.hidden = true}}
            />

              <div className='h-full flex flex-col justify-between p-2 z-10'>
                <div className='w-full flex justify-end gap-2 z-20'>
                  <span className="bg-neutral-50 p-2 rounded-full bg-opacity-75"><HeartIcon 
                    className={`h-3 text-neutral-900`}
                  /></span>
                  <span className="bg-neutral-50 p-2 rounded-full bg-opacity-75"><PlusIcon 
                    className='h-3 text-neutral-900 '
                  /></span>
                </div>


              <div className='flex justify-between z-10'>
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