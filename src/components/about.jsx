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
                        <p> Hola, soy jesus, un gusto conocerte, espero te guste lo que estas viendo.</p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veritatis distinctio, repellendus dignissimos voluptas eveniet quam excepturi consequuntur laborum quas officia aliquam nesciunt illo unde, voluptates maxime doloribus. Molestias, cumque!
                            Corrupti error maiores fuga? Cum, ullam nisi praesentium quia autem facilis odio deserunt ipsam facere, molestiae repellendus est nostrum, debitis rem officiis natus quas quibusdam dicta architecto at quod et.
                            Dignissimos, sunt minus qui id facere eius rerum dolore officiis laborum cumque culpa eveniet? Aliquam obcaecati ad, omnis eum, tempore incidunt atque, ratione architecto sit magni qui! Enim, reiciendis optio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About