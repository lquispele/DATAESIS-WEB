'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Noticias() {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/noticias')
      .then(res => res.json())
      .then(data => {
        const ordenadas = data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
        setNoticias(ordenadas.slice(0, 5))
      })
  }, [])

  if (noticias.length === 0) return <p className="text-center py-20">Cargando noticias...</p>

  const destacada = noticias[0]
  const otras = noticias.slice(1)

  return (
    <section className="py-32 bg-[#fdfcfa]">
      {/* 🟧 Encabezado afuera del fondo */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <span className="uppercase text-4xl text-black font-bold tracking-wider">
            ULTIMAS NOTICIAS
          </span>
          <Link
            href="/noticiaseimpactos"
            className="inline-block bg-orange-400 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            MAS NOTICIAS →
          </Link>

        </div>
      </div>

      <div
        className="max-w-6xl mx-auto px-4 md:px-4 py-10 bg-cover bg-center relative overflow-visible"
        style={{ backgroundImage: "url('/fondo.jpg')" }}
      >
        <div className="space-y-2 text-white relative z-10">

          {/* 🟨 Noticia destacada */}
          <div className="md:flex h-110 items-start">
            <div className="md:w-350 relative z-10">
              <img
                src={destacada.imagenUrl}
                alt={destacada.titulo}
                className="md:w-700 h-100 md:h-120 object-cover md:-translate-x-10 md:-translate-y-15"
              />
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              {/* ✅ Fecha de publicación */}
              <p className="text-xl text-[#047857] font-semibold mt-1">
                {new Date(destacada.fecha).toLocaleDateString('es-PE', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>

              <h2 className="text-5xl text-slate-800 font-semibold">
                <Link
                  href={`/noticias/${destacada.slug}`}
                  className="hover:underline hover:decoration-[#2563EB] "
                >
                  {destacada.titulo}
                </Link>
              </h2>
            </div>
          </div>

          {/* 🟦 Otras noticias */}
          <div className="divide-y divide-[#047857] ml-15 ">
            {otras.map((noticia) => (
              <div key={noticia.id} className="py-4">
                <h3 className="text-2xl text-slate-800 font-medium">
                  <Link
                    href={`/noticias/${noticia.slug}`}
                    className="hover:underline hover:decoration-[#2563EB] "
                  >
                    {noticia.titulo}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
