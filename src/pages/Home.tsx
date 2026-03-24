import { profile } from '@/data/profile'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <section className="grid gap-10 md:grid-cols-2 items-center py-10">

      <Helmet>
        <title>Khadija Bouraiss — Portfolio Développeuse Junior</title>
        <meta
          name="description"
          content="Portfolio de Khadija Bouraiss, étudiante en Licence SIR à FST Marrakech."
        />
      </Helmet>

      <div>
        <p className="text-[#547792] font-medium mb-2">Bonjour, je suis</p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#1A3263] dark:text-[#FAB95B] leading-tight">
          {profile.name}
        </h1>

        <p className="mt-3 text-xl text-[#547792]">
          {profile.role}
        </p>

        <p className="mt-4 text-gray-600 dark:text-[#E8E2DB] leading-relaxed">
          {profile.about}
        </p>

        {/* Skills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs font-medium px-3 py-1 rounded-full border border-[#FAB95B] text-[#FAB95B] hover:bg-[#FAB95B] hover:text-[#1A3263] transition cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <Link to="/projects">
            <Button className="bg-[#1A3263] text-white hover:bg-[#547792]">
              Voir mes projets
            </Button>
          </Link>

          <Link to="/contact">
            <Button
              variant="outline"
              className="border-[#1A3263] text-[#1A3263] hover:bg-[#E8E2DB]"
            >
              Me contacter
            </Button>
          </Link>
        </div>

        {/* Socials */}
        <div className="mt-6 flex gap-4 text-sm">

          <a
            href="https://github.com/khadija-bouraiss"
            target="_blank"
            rel="noreferrer"
            className="text-[#FAB95B] hover:underline transition"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/khadija-bouraiss"
            target="_blank"
            rel="noreferrer"
            className="text-[#FAB95B] hover:underline transition"
          >
            LinkedIn ↗
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="text-[#FAB95B] hover:underline transition"
          >
            Email ↗
          </a>

        </div>

      </div>

      {/* Avatar */}
      <div className="flex justify-center">
        <div className="w-64 h-64 rounded-full border-4 border-[#FAB95B] bg-[#E8E2DB] flex items-center justify-center text-[#547792] text-6xl font-bold shadow-lg">
          KB
        </div>
      </div>

    </section>
  )
}