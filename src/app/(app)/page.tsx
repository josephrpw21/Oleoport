import { createClient } from "@/lib/supabase/server"

export default async function Home() {
  const supabase = await createClient()

  const { count: clientesCount, error } = await supabase
    .from("clientes")
    .select("*", { count: "exact", head: true })

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-neutral-900">Inicio</h1>
        <p className="text-neutral-500 text-sm mt-1">
          Resumen del sistema
        </p>
      </header>

      {error ? (
        <div className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-4 text-sm">
          <p className="font-medium">Error conectando a Supabase</p>
          <p className="mt-1 text-xs font-mono">{error.message}</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 max-w-md">
          <p className="text-sm text-neutral-600">Clientes registrados</p>
          <p className="text-3xl font-bold text-neutral-900 mt-1">
            {clientesCount ?? 0}
          </p>
        </div>
      )}

      <p className="text-xs text-neutral-400">
        Construcción en progreso · Fase 1: Camión y Entregas
      </p>
    </div>
  )
}