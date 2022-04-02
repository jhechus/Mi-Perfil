import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#05082A]'>

    {/*container*/}
    <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'> 
    <p className=' text-3xl text-red-500'> Hola, mi nombre es: </p>
    <h1 className=' text-4xl sm:text-7xl font-bold text-[#ccd6f6] '> Jesus Rosas Cruz. </h1>
    <h2 className=' text-4xl sm:text-7xl font-bold text-[#8892b0] '> Desarrollador Front-end.</h2>
    <p className=' text-[#8892b0] py-4 max-w-[850px] text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam autem excepturi necessitatibus ab dolorem illo vel dicta, ipsum voluptatum, quasi tempore eius. Ea molestiae quam dignissimos quidem sint tenetur dolorum.
        Vero, eos dignissimos! Dignissimos ut, aliquam ex repellat voluptatum quam. Ut qui reprehenderit minus rem placeat maiores minima, accusantium maxime veritatis quasi, quos voluptate sequi saepe commodi! Suscipit, vero iure!
    </p>
    </div>


    </div>
  )
}

export default Home