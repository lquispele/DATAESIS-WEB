'use client'

import Link from 'next/link'

export default function NavbarContent({ textColor = 'text-white' }) {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <div className="leading-tight">
          <p className="text-orange-400 font-bold text-4xl">Semillero de investigación</p>
          <p className={`${textColor} text-xl`}>DATA - ESIS</p>
        </div>
      </Link>

      <nav className="hidden md:flex space-x-6 ml-auto">
        <Link href="/miembros" className={`relative font-semibold ${textColor} hover:text-orange-400 transition`}>
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
  )
}
