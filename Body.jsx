import React, { useState } from 'react'

const Body = () => {

const[count,setCount]=useState(0)
const inc=()=>(
  setCount(count+1)
)
const dec=()=>(
    setCount(count-1)

)



  return (
    <>
      <div>
        body count is: {count}
      </div>

      <div className='flex justify-center gap-[2vw] my-[5vh]'>
        <button className='border cursor-pointer' onClick={inc}>
          add
        </button>

        <button className='border cursor-pointer' onClick={dec}>
          rrrrrr
        </button>
      </div>
    </>
  )
}

export default Body


