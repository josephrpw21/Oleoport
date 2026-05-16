export default function ConfiguracionPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-neutral-900">Configuración</h1>
        <p className="text-neutral-500 text-sm mt-1">
          Parámetros del sistema (solo administradores principales).
        </p>
      </header>
      <div className="bg-white rounded-2xl border border-neutral-200 p-6">
        <p className="text-sm text-neutral-600">
          Próximamente: comisiones semanales, precios base, usuarios y roles.
        </p>
      </div>
    </div>
  )
}