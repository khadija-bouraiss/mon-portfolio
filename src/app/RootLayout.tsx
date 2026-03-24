import { Outlet, NavLink } from 'react-router-dom'
import ThemeToggle from '@/components/ThemeToggle'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#0f1923] text-[#1A3263] dark:text-[#E8E2DB]">
      <header className="sticky top-0 z-50 border-b border-[#E8E2DB] bg-white/90 dark:bg-[#1A3263]/90 backdrop-blur">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <NavLink to="/" className="font-bold text-lg text-[#1A3263] dark:text-[#FAB95B]">
            Khadija Bouraiss
          </NavLink>
          <div className="flex items-center gap-4 text-sm">
            {[
              { to: '/projects', label: 'Projets' },
              { to: '/experience', label: 'Parcours' },
              { to: '/education', label: 'Formations' },
              { to: '/certifications', label: 'Certifications' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold text-[#FAB95B] border-b-2 border-[#FAB95B]'
                    : 'text-[#547792] hover:text-[#1A3263] dark:hover:text-[#FAB95B] transition'
                }
              >
                {label}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>
      <footer className="border-t border-[#E8E2DB] py-6 text-center text-sm text-[#547792]">
        © {new Date().getFullYear()} • Khadija Bouraiss — FST Marrakech
      </footer>
    </div>
  )
}