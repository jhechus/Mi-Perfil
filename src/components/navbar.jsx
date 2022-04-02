import React, {useState} from "react"
import { FaBars, FaBeer, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { ImInstagram } from "react-icons/im";
import { Link } from "react-scroll/modules";



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
    <div className="fixed w-full h-20 flex justify-end items-center px-4 bg-[#05082A] text-white">
       
        <div className=" ">
            <ul className="hidden md:flex">
                <li>
                    <Link to="home"  smooth={true} duration={500}>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="about"  smooth={true} duration={500}>
                        Sobre mi
                    </Link>
                </li>
                <li>
                    <Link to="skills"  smooth={true} duration={500}>
                        Habilidades
                    </Link>
                </li>
                <li>
                    <Link to="contact"  smooth={true} duration={500}>
                        Contacto
                    </Link>
                </li> 
            </ul>
        </div>

        {/*hamburges*/}
        <div onClick={ handleClick } className="md:hidden z-10">
            { !nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/*mobile menu*/}
        <div>
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#05082A] flex flex-col justify-center items-center '} >
                <li className=" py-4 text-4xl">
                    <Link onClick={ handleClick } to="home"  smooth={true} duration={500}>
                        Inicio
                    </Link>
                </li>
                <li className=" py-4 text-4xl">
                    <Link onClick={ handleClick } to="about"  smooth={true} duration={500}>
                        Sobre mi
                    </Link>
                </li>
                <li className=" py-4 text-4xl">
                    <Link onClick={ handleClick } to="skills"  smooth={true} duration={500}>
                        Habilidades
                    </Link>
                </li>
                <li className=" py-4 text-4xl">
                    <Link onClick={ handleClick } to="contact"  smooth={true} duration={500}>
                        Contacto
                    </Link></li> 
            </ul>
        </div>

        {/*social icons*/}
        <div className=" hidden  lg:flex fixed flex-col top-[35%] left-0 ">
            <ul>
                <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-85px] hover:ml-[-10px] duration-300 bg-[#9f1b89] ">
                    <a className=" flex justify-between items-center w-full text-gray-300" href="https://www.instagram.com/jesusrosas.c/?hl=es-la">
                        Instagram <FaInstagram size={50} />
                    </a>
                </li>
                <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-85px] hover:ml-[-10px] duration-300 bg-black ">
                    <a className=" flex justify-between items-center w-full text-gray-300" href="https://github.com/jhechus">
                        Github <FaGithub size={50} />
                    </a>
                </li>
                <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-85px] hover:ml-[-10px] duration-300 bg-green-600 ">
                    <a className=" flex justify-between items-center w-full text-gray-300" href="https://wa.me/525547824383">
                        Whatsapp <FaWhatsapp size={50} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
};

export default Navbar