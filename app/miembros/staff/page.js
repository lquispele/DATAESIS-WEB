'use client'

import { useEffect, useState } from 'react'
import NavbarContent from '@/components/NavbarContent'
import Link from 'next/link'

export default function ExtraoficialesPage() {
  const [miembros, setMiembros] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/miembros')
      .then(res => res.json())
      .then(data => {
        const filtrados = Array.isArray(data) ? data.filter(m => m?.tipo === 'staff') : []
        setMiembros(filtrados)
      })
      .catch(err => console.error('Error al cargar miembros:', err))
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* 🟧 Navbar fija con fondo blanco */}
      <div className="w-full z-50 bg-white border-b-4 border-orange-500 shadow-md">
        <NavbarContent textColor="text-gray-800" />
      </div>

      {/* 🔶 Encabezado */}
      <section className="bg-orange-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white tracking-tight">Staff</h1>
        </div>
      </section>

      {/* 👤 Contenido */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-[#fdfcfa]">
        <div className="flex gap-8">
          {/* 📌 Barra lateral */}
          <aside className="w-1/4 hidden md:block">
            <div className="space-y-6 sticky top-24">
              <div>
                <h2 className="text-xl font-bold text-blue-900 border-b-2 border-orange-400 pb-1 mb-2">Secciones</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/miembros/activos" className="text-blue-800 hover:underline font-medium">Miembros Activos</Link>
                  </li>
                  <li>
                    <Link href="/miembros/staff" className="text-blue-800 hover:underline font-medium">Staff</Link>
                  </li>
                  <li>
                    <Link href="/miembros/extraoficial" className="text-blue-800 hover:underline font-medium">Extraoficiales</Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* 👥 Lista de miembros extraoficiales */}
          <main className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {miembros.map((m) => (
                <div key={m.id} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                  <img src={m.foto || '/perfil-default.png'} alt={m.nombre} className="w-full h-60 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-blue-900">{m.nombre}</h3>
                    <p className="text-gray-700">{m.rol}</p>
                    <p className="text-gray-500 text-sm">{m.carrera}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  )
}
