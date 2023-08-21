import { VideoCard } from '@/components'
import Image from 'next/image'

const videoData = {
  "id": 2499611,
  "width": 1080,
  "height": 1920,
  "url": "https://www.pexels.com/video/2499611/",
  "image": "https://images.pexels.com/videos/2499611/free-video-2499611.jpg?fit=crop&w=1200&h=630&auto=compress&cs=tinysrgb",
  "full_res": null,
  "tags": [],
  "duration": 22,
  "user": {
    "id": 680589,
    "name": "Joey Farina",
    "url": "https://www.pexels.com/@joey"
  },
  "video_files": [
    {
      "id": 125004,
      "quality": "hd",
      "file_type": "video/mp4",
      "width": 1080,
      "height": 1920,
      "fps": 23.976,
      "link": "https://player.vimeo.com/external/342571552.hd.mp4?s=6aa6f164de3812abadff3dde86d19f7a074a8a66&profile_id=175&oauth2_token_id=57447761"
    },
    {
      "id": 125005,
      "quality": "sd",
      "file_type": "video/mp4",
      "width": 540,
      "height": 960,
      "fps": 23.976,
      "link": "https://player.vimeo.com/external/342571552.sd.mp4?s=e0df43853c25598dfd0ec4d3f413bce1e002deef&profile_id=165&oauth2_token_id=57447761"
    },
    {
      "id": 125006,
      "quality": "sd",
      "file_type": "video/mp4",
      "width": 240,
      "height": 426,
      "fps": 23.976,
      "link": "https://player.vimeo.com/external/342571552.sd.mp4?s=e0df43853c25598dfd0ec4d3f413bce1e002deef&profile_id=139&oauth2_token_id=57447761"
    }
  ],
  "video_pictures": [
    {
      "id": 308178,
      "picture": "https://static-videos.pexels.com/videos/2499611/pictures/preview-0.jpg",
      "nr": 0
    },
    {
      "id": 308179,
      "picture": "https://static-videos.pexels.com/videos/2499611/pictures/preview-1.jpg",
      "nr": 1
    },
    {
      "id": 308180,
      "picture": "https://static-videos.pexels.com/videos/2499611/pictures/preview-2.jpg",
      "nr": 2
    },
    {
      "id": 308181,
      "picture": "https://static-videos.pexels.com/videos/2499611/pictures/preview-3.jpg",
      "nr": 3
    }
  ]
}


const dataArray = [1,2,3,4,5,6]

export default function Home() {
  return (
    <>
    <div className="w-full">

      {/* grid */}
      <div className="grid grid-cols-3 gap-4">
        <div className='row-span-1'>
          <h1 className='uppercase text-6xl font-bold tracking-tighter mb-10'> biggest bank of copyright free videos</h1>
          <p className='text-xl'>find videos you like, get them with just a click and use them !</p>
        </div>
        <VideoCard
          video={videoData}
          containerStyle="col-span-2 row-span-4"
        />
      
        {dataArray.map((item) => (
          <VideoCard
            video={videoData}
            containerStyle="row-span-4"
            key={videoData.id}
        />
        ))}
      </div>
        
    </div>
    </>
  )
}
