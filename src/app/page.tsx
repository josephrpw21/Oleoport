import { createClient } from '@/lib/supabase/server'
import { getCurrentProfile } from '@/lib/supabase/user'
import { logout } from './logout/actions'

const ROL_LABELS: Record<string, string> = {
  admin: 'Admin (acceso total)',
  administrador: 'Administrador',
  trabajador: 'Trabajador',
}

export default async function Home() {
  const supabase = await createClient()
  const profile = await getCurrentProfile()

  const { count: clientesCount, error } = await supabase
    .from('clientes')
    .select('*', { count: 'exact', head: true })

  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-neutral-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 space-y-4">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Oleoport</h1>
            <p className="text-neutral-500 text-sm">
              Sistema de gestión — negocio de aceite de palma
            </p>
          </div>
          {profile && (
            <form action={logout}>
              <button
                type="submit"
                className="text-xs text-neutral-500 hover:text-neutral-900 underline whitespace-nowrap"
              >
                Cerrar sesión
              </button>
            </form>
          )}
        </header>

        {profile && (
          <div className="border-t border-neutral-200 pt-4">
            <p className="text-sm text-neutral-700">
              Sesión iniciada como{' '}
              <span className="font-medium">{profile.nombres}</span>
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Rol:{' '}
              <span className="font-mono">
                {ROL_LABELS[profile.rol] ?? profile.rol}
              </span>
            </p>
          </div>
        )}

        <div className="border-t border-neutral-200 pt-4">
          {error ? (
            <div className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-3 text-sm">
              <p className="font-medium">Error conectando a Supabase</p>
              <p className="mt-1 text-xs font-mono">{error.message}</p>
            </div>
          ) : (
            <div className="text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm">
              <p className="font-medium">Conexión a Supabase OK</p>
              <p className="mt-1 text-xs">
                Clientes registrados:{' '}
                <span className="font-mono">{clientesCount ?? 0}</span>
              </p>
            </div>
          )}
        </div>

        <footer className="text-xs text-neutral-400 pt-2">
          Construcción en progreso · Fase 1: Camión y Entregas
        </footer>
      </div>
    </main>
  )
}