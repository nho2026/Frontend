import { HeartPulse, Languages, Star, Stethoscope } from 'lucide-react'
import { useI18n } from '../i18n'
import type { DoctorProfile } from '../types'
import { bodyCopyClass, cardClass } from './ui/ui'

type DoctorPortfolioGridProps = {
  doctors: DoctorProfile[]
}

export function DoctorPortfolioGrid({
  doctors,
}: DoctorPortfolioGridProps) {
  const { content } = useI18n()
  const { doctorGrid } = content

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {doctors.map((doctor) => (
        <article key={doctor.name} className={`${cardClass} p-6`}>
          <div className="mb-5 flex items-start justify-between gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)]">
              <HeartPulse className="h-7 w-7" />
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-[color:var(--brand-green)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--brand-green)]">
              <Star className="h-3.5 w-3.5 fill-current" />
              {doctorGrid.available}
            </div>
          </div>

          <h3 className="mb-1 text-xl leading-tight font-semibold text-[color:var(--brand-ink)]">
            {doctor.name}
          </h3>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-primary)]">
            {doctor.specialty}
          </p>
          <p className={`${bodyCopyClass} mb-4`}>{doctor.focus}</p>

          <div className="grid gap-3 text-sm text-[color:var(--brand-copy)]">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-[color:var(--brand-primary)]" />
              <span>{doctor.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartPulse className="h-4 w-4 text-[color:var(--brand-primary)]" />
              <span>{doctor.experience}</span>
            </div>
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-[color:var(--brand-primary)]" />
              <span>{doctor.languages.join(' • ')}</span>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-[color:var(--brand-line)] bg-white/75 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-muted)]">
              {doctorGrid.appointmentDays}
            </p>
            <p className="mt-1 text-sm font-medium text-[color:var(--brand-ink)]">
              {doctor.availability}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
