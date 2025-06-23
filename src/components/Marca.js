export default function Marca() {
  return (
    <footer className="bg-white text-gray-700 text-sm border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Información institucional */}
        <div className="md:col-span-2">
          <p className="font-semibold text-blue-900 mb-2">
            Escuela Profesional de Ingeniería Informática y Sistemas - UNJBG
          </p>
          <p>
            Av. Jorge Basadre Grohmann s/n <br />
            Ciudad Universitaria, Tacna - Perú <br />
            Sala de Innovación 3er piso, ESIS
          </p>
        </div>

        {/* Recursos */}
        <div>
          <p className="font-semibold text-blue-900 mb-2">Recursos</p>
          <ul className="space-y-1">
            <li><a href="/admin" className="hover:underline hover:text-orange-500 transition">Panel de Administración</a></li>
            <li><a href="#" className="hover:underline hover:text-orange-500 transition">Accesibilidad</a></li>
            <li><a href="#" className="hover:underline hover:text-orange-500 transition">Inicio de sesión</a></li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <p className="font-semibold text-blue-900 mb-2">Redes Sociales</p>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline hover:text-orange-500 transition">LinkedIn</a></li>
            <li><a href="#" className="hover:underline hover:text-orange-500 transition">Facebook</a></li>
            <li><a href="#" className="hover:underline hover:text-orange-500 transition">X (Twitter)</a></li>
          </ul>
        </div>
      </div>

      {/* Línea final con logo */}
      <div className="flex justify-between items-center border-t border-gray-200 py-4 px-6 max-w-7xl mx-auto">
        <p className="text-gray-600">
          © 2025 Universidad Nacional Jorge Basadre Grohmann | Escuela Profesional de Ingeniería Informática y Sistemas
        </p>
        <img
          src="/logo_UNJBG.png"
          alt="Logo UNJBG"
          className="h-10 w-auto object-contain"
        />
      </div>
    </footer>
  );
}
