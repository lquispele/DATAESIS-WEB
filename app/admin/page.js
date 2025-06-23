'use client'
import Link from 'next/link'

export default function AdminPanel() {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/admin/noticias" className="text-blue-600 hover:underline">
            Añadir Noticias
          </Link>
        </li>

        <li>
          <Link href="/admin/impactos" className="text-blue-600 hover:underline">
            Añadir Impactos
          </Link>
        </li>

      </ul>
    </section>
  )
}
