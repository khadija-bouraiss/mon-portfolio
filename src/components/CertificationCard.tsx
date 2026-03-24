import type { Certification } from '@/data/certifications'
import clsx from 'clsx'

function mmYYYY(s: string) {
  const [y, m] = s.split('-')
  return `${m}/${y}`
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired = c.status === 'expired'

  return (
    <article
      className={clsx(
        'group bg-white dark:bg-[#1a2a3a] border border-[#E8E2DB] rounded-2xl p-5 hover:border-[#FAB95B] hover:shadow-md transition-all duration-300',
        isExpired && 'opacity-60'
      )}
    >
      <div className="flex items-start gap-4 mb-4">
        {c.image ? (
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            width={56}
            height={56}
            loading="lazy"
            className="w-14 h-14 object-contain rounded-xl border border-[#E8E2DB]"
          />
        ) : (
          <div className="w-14 h-14 rounded-xl bg-[#E8E2DB] flex items-center justify-center text-[#547792] font-bold text-lg shrink-0">
            {c.issuer.slice(0, 2).toUpperCase()}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-[#1A3263] dark:text-[#FAB95B] text-sm leading-snug">
            {c.title}
          </h3>
          <p className="text-xs text-[#547792] mt-1">
            {c.issuer} • {mmYYYY(c.issueDate)}
          </p>
        </div>
      </div>

      {/* Skills */}
      {c.skills && c.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {c.skills.map((s) => (
            <span
              key={s}
              className="text-xs bg-[#E8E2DB] text-[#1A3263] px-2 py-0.5 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-[#E8E2DB]">

        <div className="flex gap-2">
          {c.tags?.map((t) => (
            <span key={t} className="text-xs text-[#547792]">
              #{t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">

          {c.credentialUrl && (
            <a
              href={c.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#547792] hover:text-[#FAB95B] font-medium transition"
            >
              Voir →
            </a>
          )}

          {c.status === 'active' && !isExpired && (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
              Active
            </span>
          )}

          {isExpired && (
            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
              Expirée
            </span>
          )}

        </div>
      </div>
    </article>
  )
}