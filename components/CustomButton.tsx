'use client'

import { CustomButtonProps } from '@/types'

const CustomButton = ({title,btnType,containerStyles} : CustomButtonProps) => {
  return (
    <button
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
    >
        {title}
    </button>
  )
}

export default CustomButton