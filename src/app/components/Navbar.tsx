"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cierra el menú al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cierra el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-sm rounded-b-lg bg-white/30 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/80 hover:bg-amber-500/70 transition duration-300 ease-in-out">
      <div className="w-full px-1 sm:px-1">
        <div className="flex justify-center sm:justify-between items-center h-16 relative">
          {/* Logo y Hamburguesa centrados en móvil */}
          <div className="flex items-center justify-center w-full sm:w-auto">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 ml-0 sm:ml-6">
              <Link href="/">
                <Image
                  src="/logonitido.png"
                  alt="logo"
                  width={120}
                  height={120}
                  className="object-contain max-h-12 sm:max-h-16"
                  priority
                />
              </Link>
            </div>
            {/* Hamburguesa solo en móvil */}
            <div className="flex sm:hidden ml-2">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-amber-700 hover:text-white hover:bg-amber-500 focus:outline-none"
                aria-label="Menu"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                  <path
                    d={menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 8h16M4 16h16"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Links */}
          <div
            className={`flex-col sm:flex-row sm:flex items-center justify-end space-y-4 sm:space-y-0 sm:space-x-8 mr-0 sm:mr-16 absolute sm:static top-16 left-0 w-full sm:w-auto bg-white/90 sm:bg-transparent shadow-md sm:shadow-none transition-all duration-300 ease-in-out ${
              menuOpen ? 'flex' : 'hidden sm:flex'
            }`}
            style={{
              minWidth: menuOpen ? '60vw' : undefined,
              padding: menuOpen ? '1rem' : undefined,
            }}
          >
            <Link
              href="/"
              className="block px-4 py-2 no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400 hover:text-white text-lg sm:text-xl"
              style={{ textShadow: '2px 2px 4px #e5771b' }}
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/pages/about"
              className="block px-4 py-2 no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400 hover:text-white text-lg sm:text-xl"
              style={{ textShadow: '2px 2px 4px #e5771b' }}
              onClick={() => setMenuOpen(false)}
            >
              Quiénes Somos
            </Link>
            <Link
              href="/pages/profile"
              className="block px-4 py-2 no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400 hover:text-white text-lg sm:text-xl"
              style={{ textShadow: '2px 2px 4px #e5771b' }}
              onClick={() => setMenuOpen(false)}
            >
              Perfil
            </Link>

            {/* Dropdown */}
            <div className="relative w-full sm:w-auto" ref={dropdownRef}>
              <button
                className="flex justify-center items-center w-full px-4 py-2 no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400 hover:text-white text-lg sm:text-xl"
                style={{ textShadow: '2px 2px 4px #e5771b' }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                tabIndex={0}
                type="button"
              >
                Prestaciones
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 15l-5-5h10l-5 5z" />
                </svg>
              </button>
              <div className={`origin-top-left absolute left-0 w-56 rounded-md shadow-lg bg-white/90 transition-all duration-200 ease-in-out z-50 ${dropdownOpen ? 'block' : 'hidden'}`}>
                <div className="py-2">
                  <Link
                    href="/pages/training"
                    className="block px-4 py-2 hover:bg-gray-500 hover:text-white no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400"
                    onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}
                  >
                    Capacitaciones
                  </Link>
                  <Link
                    href="/pages/service"
                    className="block px-4 py-2 hover:bg-gray-500 hover:text-white no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400"
                    onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}
                  >
                    Servicios
                  </Link>
                  <Link
                    href="/pages/sales&rent"
                    className="block px-4 py-2 hover:bg-gray-500 hover:text-white no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400"
                    onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}
                  >
                    Venta y Alquileres
                  </Link>
                  
                </div>
              </div>
            </div>

            
            <Link
              href="/pages/contact"
              className="block px-4 py-2 no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400 hover:text-white text-lg sm:text-xl"
              style={{ textShadow: '2px 2px 4px #e5771b' }}
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;