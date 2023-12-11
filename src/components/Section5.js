import React, { useState } from 'react'

function Section5() {

    const images = [
        "./image/coffee.png",
        "./image/lotus.jpg",
        "./image/barbie.jpeg",
        // Add more image URLs as needed
      ];

    const [currt, setCurrt] = useState(0)

    const next = () => {
        setCurrt((currt + 1) % images.length);
      };
    
      const prev = () => {
        setCurrt((currt - 1 + images.length) % images.length);
      };

  return (
    <div className='lg:h-screen'>
        <div className='grid grid-rows-2'>
            {/* Carousel part */}
            <div className='overflow-hidden relative lg:h-96 '>
              <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${currt * 100}%)`}}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className='w-full h-full object-cover'
                    />
                    ))}
              </div>

                {/* Arrow Buttons */}
                <div className='absolute inset-0 flex items-center justify-between lg:px-44 px-5'>
                  <button onClick={prev} className='p-1 rounded-full shadow bg-red-500 text-white hover:bg-red-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button onClick={next} className='p-1 rounded-full shadow bg-red-500 text-white hover:bg-red-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
            </div>

            {/* Slide indicator */}
            <div className="absolute lg:mt-80 md:mt-96 mt-52 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                        {images.map((_, i) => (
                            <div
                            className={`
                            transition-all w-16 h-1 bg-red-500 
                            ${currt === i ? "p-0" : "bg-opacity-30"}
                            `}
                            />
                        ))}
                    </div>
                </div>
            
            {/* Form Part */}
            <div className="lg:h-96 text-center py-5" style={{ backgroundImage: `url('/image/lotus.jpg')` }}>
              <h1 className='text-white text-4xl font-semibold'>
                Talk to Us
              </h1>
              <form className='flex flex-col items-center pt-12'>
                <div className='grid lg:grid-cols-2 gap-4'>
                  <div>
                    <input type="text" name="first-name" id="first-name" placeholder='First Name*' required className="text-black w-96 py-1 px-4 rounded-md"/>
                  </div>
                  <div>
                    <input type="text" name="last-name" id="last-name" placeholder='Last Name*'required className="text-black w-96 py-1 px-4 rounded-md"/>
                  </div>
                  <div>
                    <input id="email" name="email" type="email" placeholder='Your Email*' required Your Email className="text-black w-96 py-1 px-4 rounded-md"/>
                  </div>
                  <div>
                    <select id="topic" name="topic" className="text-black w-96 py-1 px-4 rounded-md">
                      <option>Select Topic</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div className=' mt-10'>
                  <button className='text-white bg-red-500 text-sm font-normal py-1 px-5 rounded-md'>Submit</button>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Section5