import { createClient } from './server'

export type UserRol = 'admin' | 'administrador' | 'trabajador'

export type Perfil = {
  id: string
  nombres: string
  rol: UserRol
  trabajador_id: string | null
  activo: boolean
  email: string
}

/**
 * Obtiene el perfil del usuario actualmente autenticado.
 * Devuelve null si no hay sesion.
 */
export async function getCurrentProfile(): Promise<Perfil | null> {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data: perfil, error } = await supabase
    .from('perfiles')
    .select('id, nombres, rol, trabajador_id, activo')
    .eq('id', user.id)
    .single()

  if (error || !perfil) return null

  return {
    ...perfil,
    email: user.email ?? '',
  }
}
