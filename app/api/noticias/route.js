// app/api/noticias/route.js
import { NextResponse } from 'next/server'

// Puedes usar aquí una base de datos, o por ahora datos falsos
const noticias = [
  {
    id: '1',
    titulo: 'Nuevas oportunidades de investigación en IA',
    descripcion: 'El semillero inicia un nuevo proyecto sobre aprendizaje automático...',
    slug: 'proyecto-ia',
    imagenUrl: '/noticias-img.jpg',
    fecha: '2025-06-16'
  },
  {
    id: '2',
    titulo: 'Cobertura: Semana de la Ciencia 2025',
    descripcion: 'Participamos con talleres, posters y exposiciones...',
    slug: 'semana-ciencia',
    imagenUrl: '/noticias-img2.jpg',
    fecha: '2025-05-30'
  }
]

export async function GET() {
  return NextResponse.json(noticias)
}
