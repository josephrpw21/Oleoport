import type { UserRol } from "@/lib/supabase/user"

export type IconName =
  | "home"
  | "truck"
  | "warehouse"
  | "clipboard-list"
  | "users"
  | "bar-chart"
  | "settings"

export type NavItem = {
  href: string
  label: string
  iconName: IconName
  rolesAllowed: UserRol[]
}

const ALL_NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Inicio", iconName: "home", rolesAllowed: ["admin", "administrador", "trabajador"] },
  { href: "/camion", label: "Camión", iconName: "truck", rolesAllowed: ["admin", "administrador", "trabajador"] },
  { href: "/casa", label: "Casa", iconName: "warehouse", rolesAllowed: ["admin", "administrador"] },
  { href: "/pedidos", label: "Pedidos", iconName: "clipboard-list", rolesAllowed: ["admin", "administrador"] },
  { href: "/clientes", label: "Clientes", iconName: "users", rolesAllowed: ["admin", "administrador"] },
  { href: "/reportes", label: "Reportes", iconName: "bar-chart", rolesAllowed: ["admin", "administrador"] },
  { href: "/configuracion", label: "Configuración", iconName: "settings", rolesAllowed: ["admin"] },
]

export function getNavItems(rol: UserRol): NavItem[] {
  return ALL_NAV_ITEMS.filter((item) => item.rolesAllowed.includes(rol))
}