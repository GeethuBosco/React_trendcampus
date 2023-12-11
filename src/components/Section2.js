import React, { useState } from 'react'

function Section2() {

    const [isExpanded, setExpanded] = useState(false);
      
        const toggleExpand = () => {
          setExpanded(!isExpanded);
        }

  return (
    <div className=' bg-gradient-to-tr from-red-600 via-black to-black lg:pb-8 pb-4'>
        <div className='text-white text-center pt-10'>
            <p className='text-3xl font-semibold'> Strring Up Great Conversations Over Coffee!</p>
            <p className='text-sm font-normal pt-3 px-4'>From a variety of topics to choose from, every talk in the series corresponds to a flavor and an intensity.
                <span className=' lg:block'>
                    Blend the flavor with the intensity you enjoy and get the conversation of your choice.
                </span>
            </p>
        </div>
        {/* Video Grid */}
        
            <div className='grid lg:grid-cols-2 lg:mx-44 lg:my-10 md:mx-14 mx-10 my-5 gap-6'>
                <div className=''>
                    <p className='text-red-500 text-4xl font-medium mb-10'>Flavor</p>

                        {/* Technology */}
                        <div className='flex '>
                            <p className={`${isExpanded ? 'hidden' : ''}`} onClick={toggleExpand}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25 " strokeWidth="1.5" stroke="currentColor" className="w-8 h-8  text-white  bg-red-500 rounded-full p-2 inline ml-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </p>
                            <p className={`text-white font-normal text-xl pl-4 ${isExpanded ? 'hidden' : ''}`}>Technology</p>
                            {isExpanded && (
                                <div className='flex bg-gradient-to-r from-red-900  to-red-700 w-full rounded-md   py-5 pr-14'>
                                    <p onClick={toggleExpand}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25 " strokeWidth="1.5" stroke="currentColor" className="w-8 h-8  text-red-500  bg-white rounded-full p-2 inline ml-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </p>
                                    <p className={`text-white font-normal text-xl pl-4 `}>Technology
                                    <span className='block text-sm pt-2'>
                                        Tech talks on evolving trends and deeper aspects of cybersecurity. Brewed to perfection for technology connoisseurs.
                                    </span>
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Business */}
                        <div className='flex '>
                            <p className={`mt-5`}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512" className="w-8 h-8  text-white  bg-red-500 rounded-full p-2 inline ml-5">
                                    <path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/>
                                </svg>
                            </p>
                            <p className='text-white font-normal text-xl pl-4 pt-5'>Business</p>
                        </div>

                        {/* Visionary */}
                        <div className='flex '>
                            <p className={`mt-5`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25 " strokeWidth="1.5" stroke="currentColor" className="w-8 h-8  text-white  bg-red-500 rounded-full p-2 inline ml-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </p>
                            <p className='text-white font-normal text-xl pl-4 pt-5'>Visionary</p>
                        </div>
                   
                </div>
                <div className=' h-64 '>
                    <img src='./image/video.png' alt='not found' className='rounded-md'/>
                </div>
            </div>
            {/* Intensity Grid */}
            <div className='grid lg:grid-cols-4 gap-6 text-white lg:ml-44 lg:mr-20 ml-14 mr-14 lg:mt-36'>
                <div className='  flex items-center justify-center  text-3xl font-medium'>Intensity</div>
                <div className='bg-gradient-to-r from-red-900  to-red-700 rounded-lg h-52'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="44" viewBox="0 0 640 512" className='m-4'>
                        <path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
                    </svg>
                    <p className='text-xl font-normal ml-4 mr-7 pt-5'>Mocha
                        <span className='block font-normal text-sm'>
                            Light and relaxed talks for those who like easy-going conversations sprinkled with insights.
                        </span>
                    </p>
                </div>
                <div className='bg-gradient-to-r from-red-900  to-red-700 rounded-lg h-52'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="44" viewBox="0 0 640 512" className='m-4'>
                        <path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
                    </svg>
                    <p className='text-xl font-normal ml-4 mr-7 pt-5'>Americano
                        <span className='block font-normal text-sm'>
                            The prefect blend of acumen clubbed with friendly wisdom for those looking to augment their knowledge and skills.
                        </span>
                    </p>
                </div>
                <div className='bg-gradient-to-r from-red-900  to-red-700 rounded-lg h-52'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="44" viewBox="0 0 640 512" className='m-4'>
                        <path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
                    </svg>
                    <p className='text-xl font-normal ml-4 mr-7 pt-5'>Espresso
                        <span className='block font-normal text-sm'>
                            Intense and power-packed talks for those who love to dive deep into specific topics.
                        </span>
                    </p>
                </div>
            </div>

        
    </div>
  )
}

export default Section2