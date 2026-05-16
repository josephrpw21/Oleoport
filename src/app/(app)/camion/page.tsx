export default function CamionPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-neutral-900">Camión</h1>
        <p className="text-neutral-500 text-sm mt-1">
          Cargas, entregas en ruta y conciliación.
        </p>
      </header>
      <div className="bg-white rounded-2xl border border-neutral-200 p-6">
        <p className="text-sm text-neutral-600">
          Próximamente: iniciar carga, registrar entregas en ruta y conciliar al regresar.
        </p>
      </div>
    </div>
  )
}