import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,    
} from '@iconscout/react-unicons'

function TemperatureAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-cyan-300'>
            <p>Clear</p>
        </div>
        <div className='flex flex-row items-center justify-between py-3 text-white'>
            <img src='http://openweathermap.org/img/wn/01d@2x.png' alt='img' className='w-20' />
            <p className='text-5xl'>34&#176;</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className='mr-1' />
                    Real Fell:
                    <span className='fond-meduim ml-l'>32&#176;</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className='mr-1' />
                    Humidity:
                    <span className='fond-meduim ml-l'>43%</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className='mr-1' />
                    Wind:
                    <span className='font-meduim ml-l'>3km/h</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-content py-3 text-white text-sm space-x-2'>
            <UilSun />
            <p className='font-light'>   
                Rise:
                <span className='font-meduim ml-1'>04:50 AM</span>
            </p>
            <p className='font-light'>|</p>

            <UilSunset />
            <p className='font-light'>   
                High:
                <span className='font-meduim ml-1'>04:50 PM</span>
            </p>
            <p className='font-light'>|</p>
            
            <UilSun />
            <p className='font-light'>   
                High:
                <span className='font-meduim ml-1'>45&#176;</span>
            </p>
            <p className='font-light'>|</p>

            <UilSun />
            <p className='font-light'>   
                Low:
                <span className='font-meduim ml-1'>40&#176;</span>
            </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails