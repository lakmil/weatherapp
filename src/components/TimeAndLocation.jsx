import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='flex justify-center items-center my-6'>
            <p className='text-white font-extralight text-xl'>Time Zone</p>
        </div>
        <div className='flex justify-center items-center mt-3'>
            <p className='text-white font-bold text-xl'>City</p>
        </div>
    </div>
  )
}

export default TimeAndLocation