import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    await fetch('https://formspree.io/f/maqprprw', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    setSent(true)
    setLoading(false)
  }

  return (
    <section className="max-w-lg grid gap-8">

      <Helmet>
        <title>Contact — Khadija Bouraiss</title>
        <meta
          name="description"
          content="Contactez Khadija Bouraiss pour toute collaboration."
        />
      </Helmet>

      <div>
        <h2 className="text-3xl font-bold text-[#1A3263]">Contact</h2>
        <p className="text-[#547792] mt-1">Envoyez-moi un message !</p>
      </div>

      {sent ? (
        <div className="bg-[#FAB95B]/10 border border-[#FAB95B]/30 rounded-2xl p-6 text-center">
          <p className="text-[#1A3263] font-semibold text-lg">Message envoyé !</p>
          <p className="text-[#547792] text-sm mt-1">
            Je vous réponds bientôt sur khadijabouraiss11@gmail.com
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">

          <div className="grid gap-1.5">
            <label className="text-sm font-medium text-[#1A3263] dark:text-[#E8E2DB]">
              Nom
            </label>
            <input
              name="name"
              type="text"
              placeholder="Votre nom"
              required
              className="border border-[#E8E2DB] dark:border-[#547792] rounded-xl px-4 py-2.5 text-sm bg-white dark:bg-[#1a2a3a] text-[#1A3263] dark:text-[#E8E2DB] placeholder:text-gray-400 dark:placeholder:text-[#547792] focus:outline-none focus:border-[#FAB95B] focus:ring-1 focus:ring-[#FAB95B] transition"
            />
          </div>

          <div className="grid gap-1.5">
            <label className="text-sm font-medium text-[#1A3263] dark:text-[#E8E2DB]">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="votre@email.com"
              required
              className="border border-[#E8E2DB] dark:border-[#547792] rounded-xl px-4 py-2.5 text-sm bg-white dark:bg-[#1a2a3a] text-[#1A3263] dark:text-[#E8E2DB] placeholder:text-gray-400 dark:placeholder:text-[#547792] focus:outline-none focus:border-[#FAB95B] focus:ring-1 focus:ring-[#FAB95B] transition"
            />
          </div>

          <div className="grid gap-1.5">
            <label className="text-sm font-medium text-[#1A3263] dark:text-[#E8E2DB]">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Votre message..."
              required
              rows={5}
              className="border border-[#E8E2DB] dark:border-[#547792] rounded-xl px-4 py-2.5 text-sm bg-white dark:bg-[#1a2a3a] text-[#1A3263] dark:text-[#E8E2DB] placeholder:text-gray-400 dark:placeholder:text-[#547792] focus:outline-none focus:border-[#FAB95B] focus:ring-1 focus:ring-[#FAB95B] resize-none transition"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="bg-[#1A3263] hover:bg-[#547792] text-white rounded-xl py-2.5 transition"
          >
            {loading ? 'Envoi en cours...' : 'Envoyer le message'}
          </Button>

        </form>
      )}

      {/* Contact direct */}
      <div className="border-t border-[#E8E2DB] pt-6">
        <p className="text-sm text-[#547792] mb-3">
          Ou contactez-moi directement :
        </p>

        <div className="flex flex-col gap-2 text-sm">

          <a
            href="mailto:khadijabouraiss11@gmail.com"
            className="text-[#FAB95B] hover:text-[#1A3263] hover:underline transition"
          >
            khadijabouraiss11@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/khadija-bouraiss"
            target="_blank"
            rel="noreferrer"
            className="text-[#FAB95B] hover:text-[#1A3263] hover:underline transition"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/khadija-bouraiss"
            target="_blank"
            rel="noreferrer"
            className="text-[#FAB95B] hover:text-[#1A3263] hover:underline transition"
          >
            GitHub ↗
          </a>

        </div>
      </div>

    </section>
  )
}