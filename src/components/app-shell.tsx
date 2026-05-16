"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  LogOut,
  Home,
  Truck,
  Warehouse,
  ClipboardList,
  Users,
  BarChart3,
  Settings,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { NavItem, IconName } from "@/lib/nav"
import { logout } from "@/app/logout/actions"

type Profile = {
  nombres: string
  rol: "admin" | "administrador" | "trabajador"
}

const ROL_LABELS: Record<string, string> = {
  admin: "Admin (acceso total)",
  administrador: "Administrador",
  trabajador: "Trabajador",
}

const ICON_MAP: Record<IconName, LucideIcon> = {
  "home": Home,
  "truck": Truck,
  "warehouse": Warehouse,
  "clipboard-list": ClipboardList,
  "users": Users,
  "bar-chart": BarChart3,
  "settings": Settings,
}

export function AppShell({
  navItems,
  profile,
  children,
}: {
  navItems: NavItem[]
  profile: Profile
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(true)
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <header className="bg-white border-b border-neutral-200 px-3 h-14 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Link href="/" className="font-bold text-lg text-neutral-900">
            Oleoport
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="text-sm font-medium text-neutral-900 leading-tight">
              {profile.nombres}
            </div>
            <div className="text-xs text-neutral-500 leading-tight">
              {ROL_LABELS[profile.rol]}
            </div>
          </div>
          <form action={logout}>
            <Button type="submit" variant="ghost" size="sm" className="gap-2">
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Salir</span>
            </Button>
          </form>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside
          className={cn(
            "bg-white border-r border-neutral-200 transition-all duration-200 overflow-hidden shrink-0",
            open ? "w-60" : "w-0"
          )}
        >
          <nav className="py-4 px-2 space-y-1 w-60">
            {navItems.map((item) => {
              const Icon = ICON_MAP[item.iconName]
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                    isActive
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-700 hover:bg-neutral-100"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </aside>

        <main className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}