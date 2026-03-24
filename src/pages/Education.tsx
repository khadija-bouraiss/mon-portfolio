import { education } from '@/data/education'
import { Badge } from '@/components/ui/badge'
import { Helmet } from 'react-helmet-async'

function fmt(s?: string) {
  if (!s) return 'Présent'
  const [y, m] = s.split('-')
  return `${m}/${y}`
}

export default function Education() {
  return (
    <section className="grid gap-8">
      <Helmet>
        <title>Formations — Khadija Bouraiss</title>
        <meta name="description" content="Formations académiques de Khadija Bouraiss." />
      </Helmet>

      <div>
        <h2 className="text-3xl font-bold text-[#1A3263]">Formations</h2>
        <p className="text-[#547792] mt-1">Parcours académique</p>
      </div>

      <div className="grid gap-6">
        {education.map(e => (
          <div
            key={e.school + e.start}
            className="bg-white dark:bg-[#1a2a3a] border border-[#E8E2DB] rounded-2xl p-6 hover:border-[#FAB95B] transition-all"
          >
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-full bg-[#FAB95B]" />
                  <span className="text-xs text-[#547792]">
                    {fmt(e.start)} — {fmt(e.end)}
                    {e.location ? ` • ${e.location}` : ''}
                  </span>
                </div>
                <h3 className="font-bold text-[#1A3263] dark:text-[#FAB95B] text-lg">
                  {e.degree}{e.field ? ` — ${e.field}` : ''}
                </h3>
                <p className="text-[#547792] text-sm">{e.school}</p>
              </div>
              {e.highlights?.map(h => (
                <span
                  key={h}
                  className="text-xs bg-[#FAB95B] text-[#1A3263] font-semibold px-3 py-1 rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>

            {e.courses && e.courses.length > 0 && (
              <div className="mt-4">
                <p className="text-xs text-[#547792] mb-2 font-medium uppercase tracking-wide">
                  Cours suivis
                </p>
                <div className="flex flex-wrap gap-2">
                  {e.courses.map(c => (
                    <Badge key={c} className="bg-[#E8E2DB] text-[#1A3263] hover:bg-[#547792] hover:text-white transition">
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}