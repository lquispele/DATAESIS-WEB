'use client'
import { useState } from 'react'

export default function CrearImpacto() {
  const [titulo, setTitulo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [imagenUrl, setImagenUrl] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const slug = titulo
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')

    // Construir el objeto impacto
    const impacto = {
      titulo,
      categoria,
      slug,
      fecha: new Date().toISOString().split('T')[0],
      ...(imagenUrl.trim() && { imagenUrl })  // Solo agregar si no está vacío
    }

    const res = await fetch('http://127.0.0.1:8000/api/impactos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(impacto),
    })

    if (res.ok) {
      setMensaje('Impacto creado exitosamente ✅')
      setTitulo('')
      setCategoria('')
      setImagenUrl('')
    } else {
      setMensaje('Error al crear el impacto ❌')
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Añadir Impacto</h2>
      {mensaje && <p className="mb-4 text-sm text-green-700">{mensaje}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Título del impacto"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Categoría (ej: EDUCACIÓN, INNOVACIÓN)"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="URL de la imagen (opcional)"
          value={imagenUrl}
          onChange={(e) => setImagenUrl(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Publicar
        </button>
      </form>
    </div>
  )
}
