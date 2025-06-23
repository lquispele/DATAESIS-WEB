'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Impactos() {
  const [impactos, setImpactos] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/impactos')
      .then(res => res.json())
      .then(data => {
        const ordenados = data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
        setImpactos(ordenados)
      })
  }, [])

  if (impactos.length === 0) return <p className="text-center py-20">Cargando impactos...</p>

  const principal = impactos[0]
  const secundarios = impactos.slice(1, 5)

  return (
    <section className="py-20 bg-[#fdfcfa]">
      <div className="max-w-7xl mx-auto px-4 animate-fade-in">
        
        {/* 🟠 Título */}
        <h2 className="text-3xl font-extrabold text-slate-800 border-b-4 border-orange-400 inline-block mb-12">
          Impactos
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          
          {/* 🔶 Principal con efecto */}
          <div className="md:col-span-1 transition duration-300 hover:scale-[1.02] hover:shadow-lg p-1 rounded-lg">
            {principal.imagenUrl && (
              <img
                src={principal.imagenUrl}
                alt={principal.titulo}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
            <p className="text-sm text-orange-400 font-semibold mt-4 uppercase tracking-wide">
              {principal.categoria?.toUpperCase() || 'DESTACADO'}
            </p>
            <Link
              href={`/impactos/${principal.slug}`}
              className="block text-xl font-bold text-slate-900 hover:text-orange-600 mt-2 transition-colors"
            >
              {principal.titulo}
            </Link>
          </div>

          {/* 🔷 Secundarios */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {secundarios.map((impacto) => (
              <div
                key={impacto.id}
                className="p-4 transition duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                {impacto.imagenUrl && (
                  <img
                    src={impacto.imagenUrl}
                    alt={impacto.titulo}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                )}
                <p className="text-sm text-orange-400 font-semibold uppercase">
                  {impacto.categoria?.toUpperCase() || 'OTRO'}
                </p>
                <Link
                  href={`/impactos/${impacto.slug}`}
                  className="block text-slate-800 hover:text-orange-600 font-medium mt-1"
                >
                  {impacto.titulo}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 🔻 Botón */}
        <div className="mt-12 text-center">
          <Link
            href="/noticiaseimpactos/impactos"
            className="inline-block bg-orange-400 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            MÁS IMPACTOS DEL SEMILLERO →
          </Link>
        </div>
      </div>
    </section>
  )
}
