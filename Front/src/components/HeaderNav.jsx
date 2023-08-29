import {NavLink} from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { useState } from 'react';

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">INICIO</NavLink>
      <NavLink to="/catalogo">CATALOGO</NavLink>
      <NavLink to="/empresa">EMPRESA</NavLink>
      <NavLink to="/nosotros">NOSOTROS</NavLink>
      <NavLink to="/contacto">CONTACTO</NavLink>      

    </>
  )
}; 

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }
  return ( 
    <>
    <nav className='flex w-auto justify-end'>
      <div className='hidden md:flex justify-between items-center gap-4 mx-16'>
        <NavLinks/>
      </div>
      <div className='md:hidden mr-6'>
        <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu/>} </button>
      </div>
    </nav>
    {isOpen &&(
      <div className='flex basis-full flex-col items-center'>
        <NavLinks/>
      </div>
    )}
    </>
  )
}

export default Nav;