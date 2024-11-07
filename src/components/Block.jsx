import React from 'react'

const Block = (props) => {
  return (
    <div onClick={props.onClick} className='w-[6vw] h-[12vh] border-2 border-black rounded-md cursor-pointer flex items-center justify-center text-4xl font-semibold'>
        {props.value}
    </div>
  )
}

export default Block
