import { HeartPulse } from 'lucide-react'
import surgeryImage from '../assets/surgery-team.png'
import { AppointmentGrid } from '../components/AppointmentGrid'
import { DoctorPortfolioGrid } from '../components/DoctorPortfolioGrid'
import { SectionHeading } from '../components/SectionHeading'
import {
  bodyCopyClass,
  cardClass,
  pageBannerClass,
  sectionClass,
  shellClass,
  splitLayoutClass,
} from '../components/ui/ui'
import { useI18n } from '../i18n'

export function StaffPage() {
  const { content } = useI18n()
  const { staff, site } = content

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <>
      <section className={pageBannerClass}>
        <div className={`${shellClass} grid max-w-205 gap-4.5`}>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-(--brand-line) bg-white/80 px-4 py-2 text-sm font-semibold text-(--brand-primary)">
            <HeartPulse className="h-4 w-4" />
            {staff.heroBadge}
          </div>
          <h1 className="m-0 text-[3rem] leading-[0.98] font-semibold text-(--brand-ink) md:text-[4.8rem]">
            {staff.heroTitle}
          </h1>
          <p className={bodyCopyClass}>{staff.heroBody}</p>
        </div>
      </section>

      <section className={sectionClass}>
        <div className={shellClass}>
          <SectionHeading
            eyebrow={staff.doctorsEyebrow}
            title={staff.doctorsTitle}
            body={staff.doctorsBody}
          />
          <DoctorPortfolioGrid doctors={site.doctorProfiles} />
        </div>
      </section>

      <section className="border-y border-white/40 bg-white/56 py-16 md:py-24">
        <div className={`${shellClass} ${splitLayoutClass}`}>
          <div className="grid gap-5">
            <SectionHeading
              eyebrow={staff.operatingEyebrow}
              title={staff.operatingTitle}
              body={staff.operatingBody}
            />
            <div className={`${cardClass} overflow-hidden p-4`}>
              <img
                src={surgeryImage}
                alt="Surgical team performing a procedure in a modern operating room."
                className="block aspect-16/10 w-full rounded-[18px] object-cover"
              />
            </div>
          </div>

          <div className="grid gap-5">
            <article className={`${cardClass} p-6`}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-(--brand-green)/10 px-3 py-1 text-sm font-semibold text-(--brand-green)">
                <HeartPulse className="h-4 w-4" />
                {staff.scopeBadge}
              </div>
              <p className={bodyCopyClass}>{staff.scopeBody}</p>
            </article>
            <article className={`${cardClass} p-6`}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-(--brand-primary)">
                {staff.bookingFlow}
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-700">
                {staff.bookingSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand-primary),var(--brand-primary-deep))] px-5.5 font-semibold text-white shadow-[0_16px_32px_rgba(192,34,39,0.22)] transition duration-200 hover:-translate-y-0.5"
                onClick={() => navigateTo('/contact')}
              >
                {staff.requestAppointment}
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className={shellClass}>
          <SectionHeading
            eyebrow={staff.appointmentsEyebrow}
            title={staff.appointmentsTitle}
            body={staff.appointmentsBody}
          />
          <AppointmentGrid
            appointments={site.appointmentOptions}
            onBook={() => navigateTo('/contact')}
          />
        </div>
      </section>
    </>
  )
}
