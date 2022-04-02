import React from 'react'

const Contacto = () => {
  return (
    <div name='contact' className=' w-full h-screen bg-[#05082A] flex items-center justify-center p-4 pt-8'>
        <form method='POST' action="https://getform.io/f/197b26f4-dbc8-43eb-af9d-73ae18f0e631" className=' flex flex-col max-w-[600px] w-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-red-500 text-gray-300'>
                    Contacto
                </p>
                <p className=' text-gray-300 py-4 text-xl'>
                   /* llene el formulario o escribame directamente a mi correo: <br /> "jess.osm1412@gmail.com"
                </p>
            </div>

            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nombre' name='name'/>
            <input className=' my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="mensaje" id="" cols="30" rows="6" placeholder='Mensaje'></textarea>
            <button className=' text-white border-2 hover:bg-red-500 hover:border-red-500 px-4 py-2 my-4 mx-auto flex items-center font-bold text-2xl rounded-3xl'> enviar </button>
        </form>
    </div>
  )
}

export default Contacto