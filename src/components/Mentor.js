'use client'

import { motion } from 'framer-motion'

export default function Mentor() {
  return (
    <section className="relative bg-[url('/dataesis.jpg')] bg-cover bg-center py-20 text-white overflow-hidden">
      {/* Fondo oscuro limitado solo a esta sección */}
      <div className="absolute inset-0 bg-orange-400 bg-opacity-70 z-0 pointer-events-none"></div>

      {/* Contenido sobre el fondo */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Imagen */}
        <motion.div
          className="flex-shrink-0"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="rounded-full overflow-hidden border-4 border-white w-64 h-64 shadow-lg">
            <img
              src="/dataesis.jpg"
              alt="Ing. Edgar Taya"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Texto */}
        <div>
          <h3 className="text-sm tracking-widest text-gray-300 uppercase">Mentor del Semillero</h3>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">Ing. Edgar Taya</h2>
          <p className="text-lg text-gray-100 leading-relaxed max-w-2xl">
            Docente e investigador de la Escuela Profesional de Ingeniería en Informática y Sistemas de la UNJBG, con amplia trayectoria en proyectos
            de innovación tecnológica, ciencia de datos e inteligencia artificial. Mentor activo de iniciativas estudiantiles orientadas al impacto social
            mediante el uso de tecnologías emergentes.
          </p>

          <div className=" mt-6">
            <a
              href="/mentor"
              className="inline-block bg-orange-500   px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300"
            >
              Conocer al mentor
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
