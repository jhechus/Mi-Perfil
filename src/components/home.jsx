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
        Soy Jesus, Ingeniero en energia, con un gran gusto hacia la tecnologia y gracias a ese gusto es que logre aprender desarrollo frontend y backend, en esta pagina encontraras un poco de mi, de mi perfil y de las tecnologias que hasta el dia de hoy he utilizado para trabajar
    </p>
    </div>


    </div>
  )
}

export default Home