'use client'
import { useState } from 'react'

export default function CrearNoticia() {
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [imagenUrl, setImagenUrl] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const slug = titulo
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')

    const noticia = { titulo, descripcion,   fecha: new Date().toISOString().split('T')[0],slug,  ...(imagenUrl.trim() && { imagenUrl })}

    const res = await fetch('http://127.0.0.1:8000/api/noticias', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(noticia),
    })

    if (res.ok) {
      setMensaje('Noticia creada exitosamente ✅')
      setTitulo('')
      setDescripcion('')
      setImagenUrl('')

    } else {
      setMensaje('Error al crear la noticia ❌')
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Crear Noticia</h2>
      {mensaje && <p className="mb-4 text-sm">{mensaje}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full border p-2 rounded"
          required
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
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Publicar
        </button>
      </form>
    </div>
  )
}
