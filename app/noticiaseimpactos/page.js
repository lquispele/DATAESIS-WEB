'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import NavbarContent from '@/components/NavbarContent'

export default function NewsAndImpact() {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/noticias')
      .then(res => res.json())
      .then(data => {
        const ordenadas = data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
        setNoticias(ordenadas)
      })
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* 🟧 Navbar siempre con fondo blanco y letras oscuras */}
      <div className="w-full z-50 bg-white border-b-4 border-orange-500 shadow-md">
        <NavbarContent textColor="text-gray-800" />
      </div>

      {/* 🔶 Título con fondo naranja */}
      <section className="bg-orange-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white tracking-tight">Noticias e Impactos</h1>
        </div>
      </section>

      {/* 📄 Contenido de noticias */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-[#fdfcfa]">
        <div className="flex gap-8">
          {/* 📌 Barra lateral izquierda */}
          <aside className="w-1/4 hidden md:block">
            <div className="space-y-6 sticky top-24">
              <div>
                <h2 className="text-xl font-bold text-blue-900 border-b-2 border-orange-400 pb-1 mb-2">Secciones</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#noticias" className="text-blue-800 hover:underline font-medium">Noticias</a>
                  </li>
                  <li>
                    <a href="noticiaseimpactos/impactos" className="text-blue-800 hover:underline font-medium">Impactos</a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* 📰 Contenido principal */}
          <main className="w-full md:w-3/4 space-y-10" id="noticias">
            {noticias.map((noticia) => (
              <div key={noticia.id} className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <img
                  src={noticia.imagenUrl || '/default.jpg'}
                  alt={noticia.titulo}
                  className="w-full md:w-1/3 h-48 object-cover rounded-md"
                />
                <div className="flex flex-col justify-between py-2 md:py-0 px-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-1">{noticia.titulo}</h3>
                    <p className="text-sm text-emerald-700 mb-2 font-medium">
                      {new Date(noticia.fecha).toLocaleDateString('es-PE', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                    <p className="text-gray-800">{noticia.descripcion}</p>
                  </div>
                  <Link href={`/noticias/${noticia.slug}`} className="mt-2 text-orange-500 hover:underline font-semibold text-sm">
                    Leer más →
                  </Link>
                </div>
              </div>
            ))}
          </main>
        </div>
      </section>
    </div>
  )
}
