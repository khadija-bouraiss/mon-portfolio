import { experience } from '@/data/experience'
import { Badge } from '@/components/ui/badge'
import { Helmet } from 'react-helmet-async'

export default function Experience() {
  return (
    <section className="grid gap-8">
      <Helmet>
        <title>Parcours — Khadija Bouraiss</title>
        <meta name="description" content="Parcours et projets de Khadija Bouraiss." />
      </Helmet>

      <div>
        <h2 className="text-3xl font-bold text-[#1A3263]">Parcours</h2>
        <p className="text-[#547792] mt-1">Projets académiques réalisés</p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#FAB95B]" />
        <div className="grid gap-8">
          {experience.map(e => (
            <div key={e.role + e.start} className="pl-12 relative">
              <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-[#FAB95B] border-2 border-white shadow" />
              <div className="bg-white dark:bg-[#1a2a3a] border border-[#E8E2DB] rounded-2xl p-6 hover:border-[#FAB95B] transition-all">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-[#1A3263] dark:text-[#FAB95B] text-lg">
                      {e.role}
                    </h3>
                    <p className="text-[#547792] text-sm">{e.company}</p>
                  </div>
                  <span className="text-xs text-[#547792] bg-[#E8E2DB] px-3 py-1 rounded-full whitespace-nowrap">
                    {e.start}{e.end && e.end !== e.start ? ` → ${e.end}` : ''}
                    {e.location ? ` • ${e.location}` : ''}
                  </span>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {e.description.map(d => (
                    <li key={d} className="text-sm text-gray-600 dark:text-[#E8E2DB] flex gap-2">
                      <span className="text-[#FAB95B] mt-0.5">▸</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {e.tags.map(t => (
                    <Badge key={t} className="bg-[#E8E2DB] text-[#1A3263] hover:bg-[#FAB95B] transition">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}