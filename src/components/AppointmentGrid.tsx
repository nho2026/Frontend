import { CalendarDays, Clock3, ShieldCheck } from 'lucide-react'
import { useI18n } from '../i18n'
import type { AppointmentOption } from '../types'
import { bodyCopyClass, cardClass, primaryButtonClass } from './ui/ui'

type AppointmentGridProps = {
  appointments: AppointmentOption[]
  onBook: () => void
}

export function AppointmentGrid({
  appointments,
  onBook,
}: AppointmentGridProps) {
  const { content } = useI18n()
  const { appointmentGrid } = content

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {appointments.map((appointment) => (
        <article key={appointment.title} className={`${cardClass} p-6`}>
          <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--brand-blue)]/10 text-[color:var(--brand-blue)]">
            <CalendarDays className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl leading-tight font-semibold text-[color:var(--brand-ink)]">
            {appointment.title}
          </h3>
          <p className={`${bodyCopyClass} mb-5`}>{appointment.summary}</p>

          <div className="grid gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[color:var(--brand-blue)]" />
              <span>{appointment.timing}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[color:var(--brand-blue)]" />
              <span>{appointment.format}</span>
            </div>
          </div>

          <button
            type="button"
            className={`${primaryButtonClass} mt-6 w-full`}
            onClick={onBook}
          >
            {appointmentGrid.bookButton}
          </button>
        </article>
      ))}
    </div>
  )
}
