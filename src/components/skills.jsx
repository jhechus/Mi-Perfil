import React from 'react'

import HTMl from '../assets/html-icon.png';
import CSS from '../assets/css-icon.png';
import Javascript from '../assets/js-icon.png';
import VUE from '../assets/vue-icon.png';
import Tailwind from '../assets/tailwind.png';
import Github from '../assets/github-icon.png';
import react from '../assets/react-icon.png';


const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen  bg-[#05082A] text-gray-300'>
        {/*container*/}
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className=' text-4xl font-bold inline border-b-4 border-red-500 '> 
                    Habilidades 
                </p>
                <p className=' py-4 text-xl'> 
                   /* Estas son las tecnologias con las que he trabajado 
                </p>
            </div>

            <div className=' w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-4'>
                <div className=' shadow-md shadow-red-500 hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={HTMl} alt="HTML-icon" />
                    <p> HTML </p>
                </div>
                <div className=' shadow-md shadow-blue-400 hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={CSS} alt="CSS-icon" />
                    <p> CSS </p>
                </div>
                <div className=' shadow-md shadow-yellow-200 hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={Javascript} alt="Js-icon" />
                    <p> Javascript </p>
                </div>
                <div className=' shadow-md shadow-green-300 hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={VUE} alt="VUE-icon" />
                    <p> Vue.js </p>
                </div>
                <div className=' shadow-md shadow-white hover:scale-110 duration-500 py-2'>
                    <img className=' w-20 mx-auto' src={Tailwind} alt="Tailwind-icon" />
                    <p> Tailwindcss </p>
                </div>
                <div className=' shadow-md shadow-[#9e5d93] hover:scale-110 duration-500 py-2'>
                    <img className=' w-20 mx-auto' src={Github} alt="Github-icon" />
                    <p> Github </p>
                </div>
                <div className=' shadow-md shadow-[#3A3A3D] hover:scale-110 duration-500 py-2'>
                    <img className=' w-20 mx-auto' src={react} alt="HTML icon" />
                    <p> React </p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Skills
