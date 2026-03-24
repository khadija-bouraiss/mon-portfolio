import { certifications } from '@/data/certifications'
import { useMemo, useState } from 'react'
import CertificationCard from '@/components/CertificationCard'
import { Helmet } from 'react-helmet-async'

export default function Certifications() {
  const [q, setQ] = useState('')

  const list = useMemo(
    () =>
      certifications
        .filter(c =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(' ')
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  )

  return (
    <section className="grid gap-8">
      <Helmet>
        <title>Certifications — Khadija Bouraiss</title>
        <meta name="description" content="Certifications professionnelles de Khadija Bouraiss." />
      </Helmet>

      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-[#1A3263]">Certifications</h2>
          <p className="text-[#547792] mt-1">{list.length} certification{list.length > 1 ? 's' : ''}</p>
        </div>
        <input
          placeholder="Filtrer (ex: Cisco, Java...)"
          value={q}
          onChange={e => setQ(e.target.value)}
          className="border border-[#E8E2DB] rounded-xl px-4 py-2 text-sm w-64 focus:outline-none focus:border-[#FAB95B] focus:ring-1 focus:ring-[#FAB95B]"
        />
      </div>

      {list.length === 0 ? (
        <p className="text-[#547792]">Aucune certification trouvée.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(c => (
            <CertificationCard key={c.title + c.issueDate} c={c} />
          ))}
        </div>
      )}
    </section>
  )
}
