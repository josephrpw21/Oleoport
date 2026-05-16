export default function PedidosPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-neutral-900">Pedidos</h1>
        <p className="text-neutral-500 text-sm mt-1">
          Pedidos pendientes, programados y en camion.
        </p>
      </header>
      <div className="bg-white rounded-2xl border border-neutral-200 p-6">
        <p className="text-sm text-neutral-600">
          Proximamente: tomar pedidos por telefono o WhatsApp, asignar a carga del camion.
        </p>
      </div>
    </div>
  )
}
