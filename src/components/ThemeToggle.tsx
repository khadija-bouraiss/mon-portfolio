import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Basculer le thème"
      className="w-9 h-9 rounded-full border border-[#FAB95B] flex items-center justify-center text-[#FAB95B] hover:bg-[#FAB95B] hover:text-[#1A3263] transition-all"
    >
      {dark ? '☀' : '☾'}
    </button>
  )
}