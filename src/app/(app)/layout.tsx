import { redirect } from "next/navigation"
import { getCurrentProfile } from "@/lib/supabase/user"
import { getNavItems } from "@/lib/nav"
import { AppShell } from "@/components/app-shell"

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const profile = await getCurrentProfile()
  if (!profile) {
    redirect("/login")
  }

  const navItems = getNavItems(profile.rol)

  return (
    <AppShell navItems={navItems} profile={profile}>
      {children}
    </AppShell>
  )
}
