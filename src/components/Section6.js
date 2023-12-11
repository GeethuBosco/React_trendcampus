import React, { useState } from 'react'

function Section6() {

    const [isExpanded, setExpanded] = useState(false);
      
        const toggleExpand = () => {
          setExpanded(!isExpanded);
        }

  return (
    <div>
        <div className='bg-gradient-to-tr from-red-600 via-black to-black lg:py-10 py-5'>
            <h1 className='text-white text-3xl font-bold text-center '>FAQs</h1>
            <div className='grid lg:grid-cols-2 lg:px-28 px-10 lg:pt-12 pt-4'>
                <div>
                    <div className='flex '>
                        <p className={`text-red-500 text-2xl h-9 w-9 text-center  font-extrabold bg-white rounded-full ${isExpanded ? 'hidden' : ''}`} onClick={toggleExpand}>+</p>
                        <p className={`text-white text-sm font-normal pl-7 pt-2 ${isExpanded ? 'hidden' : ''}`}>What does flavor means?</p>
                        {isExpanded && (
                            <div className='flex bg-white lg:w-full rounded-md  lg:-ml-5 py-5 px-2'>
                                <p className='text-red-500 text-2xl px-3 h-9 lg:ml-4 text-center  font-extrabold bg-white rounded-full border border-red-500' onClick={toggleExpand}>-</p>
                                <p className='text-black text-sm font-normal pl-7 pt-2'>
                                    <span className='block font-medium'>What does flavor means?</span>
                                    Flavor Signifies the topic types. We're focusing on relevant topic which help expand your knowledge and understanding. Our talks are broadly classified into the following categories:
                                    <ul className='list-disc'>
                                        <li>Business: Focussed on the business aspect of technology</li>
                                        <li>Visionary: Thought leadership talks focussed on changing trends, emerging trends and other aspects which influence industry behaviour</li>
                                        <li>Technology: for the nerds who are interested in understanding behind the scenes</li>
                                    </ul>
                                </p>
                            </div>
                        )}
                    </div>
                    <div className='flex '>
                        <p className={`text-red-500 text-2xl h-9 w-9 text-center mt-5 font-extrabold bg-white rounded-full ` } >+</p>
                        <p className={`text-white text-sm font-normal pl-7 pt-7 `}>What does it mean by content intensity?</p>
                    </div>
                    <div className='flex'>
                        <p className='text-red-500 text-2xl h-9 w-9 text-center mt-5 font-extrabold bg-white rounded-full'>+</p>
                        <p className='text-white text-sm font-normal pl-7 pt-7'>Can we nominate topics of our choice?</p>
                    </div>
                    <div className='flex'>
                        <p className='text-red-500 text-2xl h-9 w-9 text-center mt-5 font-extrabold bg-white rounded-full'>+</p>
                        <p className='text-white text-sm font-normal pl-7 pt-7'>Can we share snippets to our social platforms?</p>
                    </div>
                    <div className='flex'>
                        <p className='text-red-500 text-2xl h-9 w-9 text-center mt-5 font-extrabold bg-white rounded-full'>+</p>
                        <p className='text-white text-sm font-normal pl-7 pt-7'>What time is the Webinar? what time zone is "SGT"?</p>
                    </div>
                </div>
                <div className=''>
                    <img src='./image/coffee_cup2.png' alt='not found'className='rounded-lg lg:pt-0 pt-3'/>
                </div>
            </div>
        </div>
        <footer className='bg-black h-72 py-10 relative'>
           
            <div className='inline-flex absolute lg:pl-24 pl-10'>
                <p className='text-3xl font-thin text-white '>Trend
                    <span className='font-normal block'>Campus
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-red-600 inline font-medium">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                    </span>
                </p>
            </div>

            {/* social media icons */}
            <div className='inline-flex absolute pt-12 pl-48 right-24 '>
                {/* Linkedin */}
                <svg xmlns="http://www.w3.org/2000/svg" height="26" width="24" viewBox="0 0 448 512" className='bg-white py-1 rounded-full'>
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
                {/* facebook */}
                <svg xmlns="http://www.w3.org/2000/svg" height="26" width="24" viewBox="0 0 448 512" className='bg-white py-1 rounded-full ml-2'>
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
                </svg>
                {/* Twitter */}
                <svg xmlns="http://www.w3.org/2000/svg" height="26" width="24" viewBox="0 0 512 512" className='bg-white py-1 rounded-full ml-2'>
                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/>
                </svg>
                {/* Insta */}
                <svg xmlns="http://www.w3.org/2000/svg" height="26" width="24" viewBox="0 0 448 512" className='bg-white py-1 rounded-full ml-2'>
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
                {/* Youtube */}
                <svg xmlns="http://www.w3.org/2000/svg" height="26" width="28" viewBox="0 0 576 512" className='bg-white py-1 rounded-full ml-2'>
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                </svg>
            </div>
            
            <div className='border-b-2 border-gray-400 h-1 w-full absolute pt-24'></div>
            
            <div className='lg:inline-flex lg:absolute pt-28 lg:pl-24 pl-12'>
                <p className='text-sm font-mono text-white'>Privacy Policy | Legal</p>
            </div>
            <div className='lg:inline-flex lg:absolute lg:pt-28  lg:right-24 pl-12'>
                <p className='text-sm font-mono text-white'>Copyright 2023 Trend Micro Incorporated. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Section6