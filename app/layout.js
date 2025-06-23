// app/layout.js
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const ibm = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Tu sitio',
  description: 'Sitio del semillero',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={ibm.variable}>
    <body className="font-sans antialiased bg-white">{children}</body>

    </html>
  )
}
