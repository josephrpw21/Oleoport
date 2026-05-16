import { login } from './actions'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams

  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-neutral-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-neutral-200 p-8">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-neutral-900">Oleoport</h1>
          <p className="text-neutral-500 text-sm mt-1">
            Inicia sesión para continuar
          </p>
        </header>

        {params.error && (
          <div className="mb-4 text-red-700 bg-red-50 border border-red-200 rounded-lg p-3 text-sm">
            {params.error === 'invalid_credentials'
              ? 'Email o contraseña incorrectos.'
              : 'Error al iniciar sesión. Intenta de nuevo.'}
          </div>
        )}

        <form action={login} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  )
}