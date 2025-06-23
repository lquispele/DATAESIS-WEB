'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.70;
      setShowFixedNavbar(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavbarContent = ({ textColor = 'text-white' }) => (
    <div className="flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <div className="leading-tight">
          <p className="text-orange-400 font-bold text-4xl">Semillero de investigación</p>
          <p className={`${textColor} text-xl`}>DATA - ESIS</p>
        </div>
      </Link>

      <nav className="hidden md:flex space-x-6 ml-auto">
        <Link href="/miembros/activos" className={`relative font-semibold ${textColor} hover:text-orange-400 transition`}>
          MIEMBROS
        </Link>
        <Link href="/proyectos" className={`relative font-semibold ${textColor} hover:text-orange-400 transition`}>
          PROYECTOS
        </Link>
        <Link href="/noticiaseimpactos" className={`relative font-semibold ${textColor} hover:text-orange-400 transition`}>
          NOTICIAS E IMPACTOS
        </Link>
        <Link href="/nosotros" className={`relative font-semibold ${textColor} hover:text-orange-400 transition`}>
          NOSOTROS
        </Link>
      </nav>

      <Link
        href="/join"
        className="ml-6 px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-900 transition"
      >
        Únete
      </Link>
    </div>
  );

  return (
    <section className="relative bg-[url('/dataesis.jpg')] bg-cover bg-[center_top_-380px] h-[85vh]">
      {/* Fondo oscuro lateral */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-0 pointer-events-none" />

      {/* 🟧 Navbar inicial sobrepuesta (como antes) */}
      <div className="absolute top-0 left-0 w-full z-10">
        {NavbarContent({ textColor: 'text-white' })}
      </div>

      {/* 🟧 Navbar fija que aparece tras scroll */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-orange-500 shadow-md transition-opacity duration-500 ${
          showFixedNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NavbarContent({ textColor: 'text-gray-800' })}
      </div>

      {/* Texto inferior de presentación */}
      <div className="absolute bottom-30 left-10 z-[20]">
        <div className="group relative max-w-xl">
          <h1 className="text-5xl md:text-60xl text-white transition-all duration-300 group-hover:mb-4">
            Explora, aprende y forma parte de la innovación tecnológica.
          </h1>
          <div className="overflow-hidden max-h-0 opacity-0 translate-y-2 transition-all duration-500 ease-in-out group-hover:max-h-48 group-hover:opacity-100 group-hover:translate-y-0">
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Únete a nuestro semillero de investigación para desarrollar proyectos de vanguardia, colaborar con expertos y fortalecer tus habilidades en informática y sistemas. Innovamos, exploramos y transformamos el futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
