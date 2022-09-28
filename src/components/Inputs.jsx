import React from 'react'
import { UilSearch, UilLocationPoint  } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='my-6 flex flex-row justify-center'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input type="text" className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' placeholder='search for city...'/>
            <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
            <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-x text-white font-light'>&#176;C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button name='imperior' className='text-xl text-white font-light'>&#176;F</button>
        </div>
    </div>
  )
}

export default Inputs