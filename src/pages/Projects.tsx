import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Helmet } from 'react-helmet-async'

export default function Projects() {
  return (
    <section className="grid gap-8">

      <Helmet>
        <title>Projets — Khadija Bouraiss</title>
        <meta
          name="description"
          content="Projets de développement de Khadija Bouraiss."
        />
      </Helmet>

      <div>
        <h2 className="text-3xl font-bold text-[#1A3263]">Mes Projets</h2>
        <p className="text-[#547792] mt-1">
          Projets académiques et personnels
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group relative bg-white dark:bg-[#1a2a3a] border border-[#E8E2DB] rounded-2xl p-6 hover:border-[#FAB95B] hover:shadow-lg transition-all duration-300"
          >

            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E8E2DB] flex items-center justify-center text-[#1A3263] font-bold text-lg">
                {String(i + 1).padStart(2, '0')}
              </div>

              {p.period && (
                <span className="text-xs text-[#547792] bg-[#E8E2DB] px-2 py-1 rounded-full">
                  {p.period}
                </span>
              )}
            </div>

            <h3 className="font-bold text-[#1A3263] dark:text-[#FAB95B] text-lg mb-2 group-hover:text-[#547792] transition">
              {p.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-[#E8E2DB] mb-4 leading-relaxed">
              {p.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tags.map((t) => (
                <Badge
                  key={t}
                  className="bg-[#E8E2DB] text-[#1A3263] text-xs hover:bg-[#FAB95B] transition"
                >
                  {t}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 text-sm pt-4 border-t border-[#E8E2DB]">

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#547792] hover:text-[#FAB95B] font-medium transition"
                >
                  Demo →
                </a>
              )}

              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#547792] hover:text-[#FAB95B] font-medium transition"
                >
                  GitHub →
                </a>
              )}

            </div>

          </article>
        ))}
      </div>

    </section>
  )
}