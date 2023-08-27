'use client'

import { RotatingLines } from 'react-loader-spinner'

const Loading = () => {
  return (
  <div className="flex justify-center">
    <RotatingLines
      strokeColor="#2dd4bf"
      strokeWidth="3"
      width="50"
      visible={true}
    />
</div>
)
}

export default Loading