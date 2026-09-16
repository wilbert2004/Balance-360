//crearemos los header que contendra ellogo el nombre de la organizacion y los botones de inicio , nosotros, menu,  galeria , eventos , contactos  y reservar
//importaremos los componentes de react y react- router-dom
import { Link } from "react-router-dom";

//import React from "react";
//crearemos la funcion Header que contendra los elementos del header

function Header() {
  return (
    <header className="w-full bg-[#f6f4eb] border-b-2 border-[#ead1a1] px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex item-center space-x-2 font-serif text-2xl  font-black tracking-wide">
          <span className="text-[#054a06]">BALANCE</span>
          <span className="text-[#c5a059]">360</span>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-8 text-sm font-medium text-gray-800">
          <Link to="/" className="hover:text-[#1b3b2b] transition-colors">
            Inicio
          </Link>
          <Link to="/menu" className="hover:text-[#1b3b2b] transition-colors">
            Menú
          </Link>
          <a href="Galeria" className="hover:text-[#1b3b2b] transition-colors">
            Galería
          </a>
          <a href="Eventos" className="hover:text-[#1b3b2b] transition-colors">
            Eventos
          </a>
          <a
            href="Contactos"
            className="hover:text-[#1b3b2b] transition-colors"
          >
            Contactos
          </a>
        </div>

        {/* Reservar Button */}
        <button className="bg-[#054a06] text-white px-4 py-2 rounded hover:bg-[#1b3b2b] transition-colors">
          Reservar
        </button>
      </div>
    </header>
  );
}
export default Header;
