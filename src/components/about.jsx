import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#05082A] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className=' max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className=' sm:text-right pb-8 pl-4'>
                    <p className=' text-4xl font-bold inline border-b-4 border-red-500 '> 
                    Sobre mi 
                    </p>
                </div>
                <div></div>
                </div>
                <div className=' max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className=' sm:text-right text-4xl font-bold'>
                        <p> Hola, soy Jesus, un gusto conocerte, espero te guste lo que estas viendo.</p>
                    </div>
                    <div>
                        <p>
                            Mis habilidades por la tecnologia han sido gracias a launch x, un curso de "innovaccion virtual" donde gracias a ellos pude
                            adquirir ciertas habilidades para el desarrollo de front end, como diseños, estilos, frameworks y en la base de backend, el consumo de 
                            apis, como usar una base de datos; Me apasione mas por la parte de front ya que es lo que la gente mas suele ver y observar y yo cuando 
                            entro a una pagina web lo que mas me gusta es el diseño UX/UI por esa razon me especialice mas por el lado de front-end. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About