import React from 'react'

function Section3() {
  return (
    <div className='lg:h-screen bg-black py-14'>
        <div className='text-white text-center '>
            <p className='text-3xl font-semibold'> Upcomming Events</p>
            <p className='text-sm font-normal pt-3 px-4'>Attend a live webinar with industry stalwarts sharing their views, tips and vision on trends that are reinventing the
                <span className=' lg:block'>
                    way we work, live and function. Register for the upcomming webinar or choose as per your preference!
                </span>
            </p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 lg:gap-x-7 gap-4 lg:px-20 lg:pt-20 px-10 pt-10'>
            <div className='relative'>
                <img src='./image/barbie.jpeg' alt='not found' className='rounded-md'/>
                <div className='absolute left-1 lg:bottom-40 bottom-36 text-white'>
                    <p className='border-2 text-center'>Trend Cloud One</p>
                    <h1 className='text-xl font-medium'>Workload<span className='block'>Security Demo</span></h1>
                    <p className='text-sm'>06 Apr 2023 | 14:3-1530 (SGST)</p>
                </div>
                <h1 className='text-white'>SPEAKER:<span className='lg:block'>ROGGERS KOESCH</span></h1>
                <p className='text-red-700'> Technical Sales Engineer, Trend Micro</p>
                <h1 className='text-white font-medium py-2'>EPISODE 01</h1>
                <button className='bg-red-500 px-4 py-1 text-white rounded-md'>Register Now</button>
            </div>
            
            <div className='relative'>
            <img src='./image/barbie.jpeg' alt='not found' className='rounded-md'/>
                <div className='absolute left-1 lg:bottom-40 bottom-36 text-white'>
                    <p className='border-2 text-center'>Trend Vision One</p>
                    <h1 className='text-xl font-medium'>Discover the<span className='block'>Undiscovered</span></h1>
                    <p className='text-sm'>06 Apr 2023 | 14:3-1530 (SGST)</p>
                </div>
                <h1 className='text-white'>SPEAKER:<span className='lg:block'>AMISH DABHI</span></h1>
                <p className='text-red-700'> Technical Sales Engineer, Trend Micro</p>
                <h1 className='text-white font-medium py-2'>EPISODE 01</h1>
                <button className='bg-red-500 px-4 py-1 text-white rounded-md'>Register Now</button>
            </div>
            <div className='relative'>
            <img src='./image/barbie.jpeg' alt='not found' className='rounded-md'/>
                <div className='absolute left-1 lg:bottom-40 bottom-36 text-white'>
                    <p className='border-2 text-center'>Trend Workforce One</p>
                    <h1 className='text-xl font-medium'>Intorduction to<span className='block'>EmailSecurity</span></h1>
                    <p className='text-sm'>06 Apr 2023 | 14:3-1530 (SGST)</p>
                </div>
                <h1 className='text-white'>SPEAKER:<span className='lg:block'>BILAL ISSA</span></h1>
                <p className='text-red-700'> Technical Sales Engineer, Trend Micro</p>
                <h1 className='text-white font-medium py-2'>EPISODE 01</h1>
                <button className='bg-red-500 px-4 py-1 text-white rounded-md'>Register Now</button>
            </div>
        </div>
    </div>
  )
}

export default Section3