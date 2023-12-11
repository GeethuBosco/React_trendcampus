import React from 'react'

function Section4() {
  return (
    <div className='lg:h-screen bg-gradient-to-tr from-red-600 via-black to-black lg:pb-8 pb-4'>
        {/* Webinar Showcase */}
        <div className='text-white text-center pt-10'>
            <p className='text-3xl font-semibold'>Webinar Showcase</p>
            <p className='text-sm font-normal pt-3 px-4'>Watch the recordings of some of our best-received webinars, on-demand. Sip, pause, ponder,
                <span className=' lg:block'>
                    play-enjoy your cold brews the way you like them!
                </span>
            </p>
        </div>
        {/* Grid part */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:px-28 pt-14 px-10'>
            <div className="relative">
                <img src='./image/barbie.jpeg' alt='not found' className='lg:h-56 md:h-48 h-64 w-full rounded-md'/>
                <div className='absolute left-6 lg:top-24 md:top-16 top-32 text-white'>
                    <h1 className='text-3xl font-semibold'>Trend<span className='block'>Cloud One</span></h1>
                    <button className='text-sm bg-red-500 px-6 py-0.5 rounded-md mt-3'>View All</button>
                </div>
            </div>
            <div>
                <img src='./image/trend_managed.png' alt='not found' className='rounded-md'/>
            </div>
            <div>
                <img src='./image/services_support.png' alt='not found' className='rounded-md'/>
            </div>
            <div>
                <img src='./image/thread_landscape.png' alt='not found' className='rounded-md'/>
            </div>
            <div>
                <img src='./image/trend_vision.png' alt='not found' className='rounded-md'/>
            </div>
            <div>
                <img src='./image/trend_workforce.png' alt='not found' className='rounded-md'/>
            </div>
        </div>
    </div>
  )
}

export default Section4