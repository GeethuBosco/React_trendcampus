import React, { useState } from 'react'

function Section1({ 
        children: slides,
        autoSlide = false,
        autoSlideInterval = 1000,
    }) {

        const Links = [
            {name: 'The story', link: '/'},
            {name: 'Flavours', link: '/'},
            {name: 'Upcoming', link: '/'},
            {name: 'On Demand', link: '/'},
            {name: 'FAQS', link: '/'},
            {name: 'Contact us', link: '/'},
        ]

    const [curr, setCurr] = useState(0)
    const [isOpen, setisOpen] = useState(false)

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))


  return (
    <div className='flex flex-col lg:h-screen'>
        <nav className='sticky top-0 z-10 block w-full max-w-full  text-white bg-black px-14 py-4 lg:px-28 lg:py-6'>
            <div className="md:flex items-center justify-between text-blue-gray-900">
                <p className='lg:text-3xl text-xl font-thin '>Trend
                    <span className='font-normal block'>Campus
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-red-600 inline font-medium">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                    </span>
                </p>
                {/* Menu Button */}
                <div onClick={() => setisOpen(!isOpen)} className='absolute right-8 top-6 cursor-pointer lg:hidden'>
                    {
                        isOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    }
                </div>
                <div className={`flex items-center gap-4 `}>
                    <div className=' mr-4 '>
                        <ul className={` lg:flex lg:items-center absolute lg:static gap-2 mt-2 mb-4 lg:mb-0 lg:mt-8  lg:gap-6 lg:z-auto z-[-1] left-0 w-full lg:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in } ${isOpen ? 'top-24 bg-black' : 'top-[-490px]'}`}>
                            {
                                Links.map(link => (
                                    <li className='block p-1 font-medium hover:font-normal hover:bg-red-500 rounded-md px-4'>
                                        <a href='/'>{link.name}</a>
                                    </li>
                                ))
                            }

                            <div className='h-12 lg:mt-3 lg:-ml-6 mt-2'>
                                <img src='./image/logo.png' alt='not found' className='h-full object-cover'/>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        {/* Slider start */}
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
                <div className='absolute inset-0 flex items-center justify-between lg:px-20 px-10'>
                    {/* Prev Arrow buttom */}
                <button onClick={prev} className='p-1 rounded-full shadow bg-white text-red-500 hover:bg-white/80'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div className='flex items-start flex-col w-full pl-7'>
                    <h1 className='lg:text-6xl text-3xl text-white lg:font-bold font-semibold'>Partner<span className='lg:block'> Webinar Series</span></h1>
                    <h6 className='text-white lg:text-2xl text-md font-medium mt-3'>Coffee conversations for though leaders.</h6>
                    <button className='text-white bg-red-500 px-4 rounded-md lg:mt-10 mt-5'>Know More</button>
                </div>
                {/* Next Arrow buttom */}
                <button onClick={next} className='p-1 rounded-full shadow bg-white text-red-500 hover:bg-white/80'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
        {/* Slide indicator */}
        <div className="absolute lg:bottom-12  lg:left-36">
            <div className="flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                    <div
                    className={`
                    transition-all w-16 h-1 bg-white 
                    ${curr === i ? "p-0" : "bg-opacity-50"}
                    `}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Section1