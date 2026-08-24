import {
  ArrowRight,
  CalendarDays,
  Heart,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Syringe,
} from 'lucide-react'
import logoImage from '../assets/Logo.png'
import heartSurgeryImage from '../assets/heart_surgery.png'
import surgeryImage from '../assets/surgery-team.png'
import { AppointmentGrid } from '../components/AppointmentGrid'
import { DoctorPortfolioGrid } from '../components/DoctorPortfolioGrid'
import { SectionHeading } from '../components/SectionHeading'
import { StatStrip } from '../components/StatStrip'
import { useI18n } from '../i18n'
import {
  bodyCopyClass,
  cardClass,
  primaryButtonClass,
  secondaryButtonClass,
  sectionClass,
  shellClass,
  splitLayoutClass,
} from '../components/ui/ui'

export function HomePage() {
  const { content, isRTL } = useI18n()
  const { home, site } = content

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  const featureIcons = [HeartPulse, Syringe, ShieldCheck, Stethoscope]

  return (
    <>
      <section className="pb-14 pt-8 md:pb-18 md:pt-12">
        <div className={`${shellClass} grid gap-10 xl:grid-cols-[1.02fr_0.98fr]`}>
          <div className="grid content-center gap-5">
            <p className="m-0 inline-flex w-fit items-center gap-2 rounded-full border border-(--brand-line) bg-white/82 px-3.5 py-2 text-[0.86rem] font-bold text-(--brand-blue)">
              <HeartPulse className="h-4 w-4" />
              {home.heroBadge}
            </p>
            <h1 className="m-0 max-w-[18ch] text-[3.2rem] leading-[0.96] font-semibold text-(--brand-ink) md:text-[5.4rem]">
              {home.heroTitle}
            </h1>
            <p className={`${bodyCopyClass} max-w-[64ch]`}>{home.heroBody}</p>

            <div className="flex flex-wrap gap-2.5" aria-label="Service categories">
              {site.serviceTags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex min-h-9 items-center rounded-full border border-(--brand-line) bg-white/76 px-3.5 text-[0.92rem] text-slate-600"
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3.5 pt-1.5">
              <button
                type="button"
                className={`${primaryButtonClass} gap-2`}
                onClick={() => navigateTo('/contact')}
              >
                {home.primaryCta}
                <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
              <button
                type="button"
                className={secondaryButtonClass}
                onClick={() => navigateTo('/staff')}
              >
                {home.secondaryCta}
              </button>
            </div>

            <div className="grid gap-4 pt-2 md:grid-cols-3">
              {home.heroStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-(--brand-line) bg-white/76 px-5 py-4 shadow-[0_14px_30px_rgba(18,38,63,0.06)]"
                >
                  <strong className="text-[2rem] leading-none font-bold text-(--brand-ink)">
                    {item.value}
                  </strong>
                  <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-4xl border border-(--brand-line) bg-white/78 p-4 shadow-[0_28px_60px_rgba(18,38,63,0.1)]">
              <span
                className={`pointer-events-none absolute top-6 h-40 w-40 rounded-full bg-(--brand-blue)/12 blur-3xl ${
                  isRTL ? '-right-12' : '-left-12'
                }`}
              />
              <span
                className={`pointer-events-none absolute bottom-12 h-44 w-44 rounded-full bg-(--brand-teal)]/14 blur-3xl ${
                  isRTL ? '-left-10' : '-right-10'
                }`}
              />
              <div
                className={`heart-widget absolute top-7 z-20 rounded-4xl border border-white/55 bg-white/84 px-4 py-3 shadow-[0_20px_42px_rgba(18,38,63,0.14)] backdrop-blur-sm max-[720px]:top-5 ${
                  isRTL ? 'left-7 max-[720px]:left-5' : 'right-7 max-[720px]:right-5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative grid h-13 w-13 place-items-center">
                    <span className="heart-ripple absolute inset-0 rounded-full bg-(--brand-teal)]/18" />
                    <span className="heart-ripple heart-ripple-delay absolute inset-0 rounded-full bg-(--brand-blue)/14" />
                    <span className="relative grid h-13 w-13 place-items-center rounded-full bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-teal))] text-white shadow-[0_14px_24px_rgba(17,91,166,0.25)]">
                      <Heart className="heart-core h-6 w-6 fill-current" />
                    </span>
                  </div>
                  <div>
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-(--brand-blue)">
                      {home.heartWidgetLabel}
                    </p>
                    <p className="mt-1 text-sm font-medium text-(--brand-ink)">
                      {home.heartWidgetValue}
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={heartSurgeryImage}
                alt="Heart surgery procedure in progress."
                className="relative z-10 block aspect-5/4 w-full rounded-3xl object-cover object-center"
              />
              <article
                className={`${cardClass} absolute bottom-7 z-20 w-[min(320px,calc(100%-56px))] p-4.5 shadow-[0_24px_48px_rgba(18,38,63,0.12)] max-[720px]:static max-[720px]:mt-3.5 max-[720px]:w-full ${
                  isRTL ? 'right-7' : 'left-7'
                }`}
              >
                <p className="mb-2.5 text-[0.82rem] font-bold uppercase tracking-[0.16em] text-(--brand-blue)">
                  {home.coordinationEyebrow}
                </p>
                <h3 className="mb-2 text-xl leading-tight font-semibold text-(--brand-ink)">
                  {home.coordinationTitle}
                </h3>
                <p className={bodyCopyClass}>{home.coordinationBody}</p>
              </article>
            </div>

            <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
              <article className={`${cardClass} flex items-center gap-4 p-4`}>
                <span className="flex h-18 w-18 items-center justify-center overflow-hidden rounded-[20px] border border-(--brand-line) bg-white shadow-[0_14px_28px_rgba(18,38,63,0.1)]">
                  <img
                    src={logoImage}
                    alt="Nadir Health Organization logo"
                    className="h-full w-full object-contain"
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold text-(--brand-ink)">
                    {home.scopeCardTitle}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {home.scopeCardBody}
                  </p>
                </div>
              </article>

              <article className="rounded-3xl border border-(--brand-line) bg-[linear-gradient(135deg,rgba(21,104,200,0.12),rgba(22,184,176,0.16))] p-5 shadow-[0_18px_36px_rgba(18,38,63,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-(--brand-blue-deep)]">
                  {home.accessTitle}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {home.accessItems.map((item) => (
                    <div key={item.value}>
                      <p className="text-[1.8rem] font-bold text-(--brand-ink)">
                        {item.value}
                      </p>
                      <p className="text-sm text-slate-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/40 bg-white/52">
        <div className={`${shellClass} ${sectionClass}`}>
          <StatStrip items={site.keyMetrics} />
        </div>
      </section>

      <section className={sectionClass}>
        <div className={`${shellClass} ${splitLayoutClass}`}>
          <div className="grid gap-5">
            <SectionHeading
              eyebrow={home.aboutEyebrow}
              title={home.aboutTitle}
              body={home.aboutBody}
            />
            <div className="grid gap-4 md:grid-cols-3">
              {site.operatingPrinciples.map((principle) => (
                <article key={principle} className={`${cardClass} p-5`}>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-(--brand-teal)]/12 text-(--brand-teal)]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <p className={bodyCopyClass}>{principle}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-3.5">
              <button
                type="button"
                className={primaryButtonClass}
                onClick={() => navigateTo('/about')}
              >
                {home.learnMore}
              </button>
            </div>
          </div>

          <div className={`${cardClass} flex min-h-105 items-center justify-center p-8`}>
            <img
              src={logoImage}
              alt="Nadir Health Organization logo"
              className="max-h-70 w-full max-w-70 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/40 bg-[linear-gradient(180deg,rgba(21,104,200,0.06),rgba(22,184,176,0.08))] py-16 md:py-24">
        <div className={`${shellClass} ${splitLayoutClass}`}>
          <SectionHeading
            eyebrow={home.whyEyebrow}
            title={home.whyTitle}
            body={home.whyBody}
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {site.careFeatures.map((feature, index) => {
              const Icon = featureIcons[index] ?? HeartPulse

              return (
                <article
                  key={feature.title}
                  className={`${cardClass} relative overflow-hidden p-6`}
                >
                  <span
                    className={`pointer-events-none absolute top-0 h-24 w-24 bg-(--brand-blue)/8 ${
                      isRTL ? 'left-0 rounded-br-[38px]' : 'right-0 rounded-bl-[38px]'
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className="mb-4.5 grid h-11 w-11 place-items-center rounded-3.5 bg-(--brand-blue)/12 text-(--brand-blue)"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-3 text-xl leading-tight font-semibold text-(--brand-ink)">
                    {feature.title}
                  </h3>
                  <p className={bodyCopyClass}>{feature.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className={`${shellClass} ${splitLayoutClass}`}>
          <div className="grid gap-5">
            <SectionHeading
              eyebrow={home.advancedEyebrow}
              title={home.advancedTitle}
              body={home.advancedBody}
            />
            <div className="grid gap-4 md:grid-cols-2">
              {home.advancedCards.map((item) => (
                <article key={item.title} className={`${cardClass} p-5`}>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-(--brand-blue)">
                    {item.title}
                  </p>
                  <p className={`${bodyCopyClass} mt-3`}>{item.body}</p>
                </article>
              ))}
            </div>
            <button
              type="button"
              className={`${primaryButtonClass} w-fit`}
              onClick={() => navigateTo('/staff')}
            >
              {home.viewStaff}
            </button>
          </div>

          <div className={`${cardClass} overflow-hidden p-4`}>
            <img
              src={surgeryImage}
              alt="Medical care team in an operating room."
              className="block aspect-16/11 w-full rounded-[20px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/40 bg-white/56 py-16 md:py-24">
        <div className={shellClass}>
          <SectionHeading
            eyebrow={home.doctorsEyebrow}
            title={home.doctorsTitle}
            body={home.doctorsBody}
          />
          <DoctorPortfolioGrid doctors={site.doctorProfiles} />
        </div>
      </section>

      <section className={sectionClass}>
        <div className={shellClass}>
          <SectionHeading
            eyebrow={home.appointmentsEyebrow}
            title={home.appointmentsTitle}
            body={home.appointmentsBody}
          />
          <AppointmentGrid
            appointments={site.appointmentOptions}
            onBook={() => navigateTo('/contact')}
          />
          <div className="mt-8 flex">
            <button
              type="button"
              className={`${secondaryButtonClass} inline-flex items-center gap-2`}
              onClick={() => navigateTo('/staff')}
            >
              <CalendarDays className="h-4 w-4" />
              {home.browseSchedule}
            </button>
          </div>
        </div>
      </section>

      <section className="pb-16 pt-2 md:pb-24">
        <div className={`${shellClass} ${cardClass} flex flex-wrap items-center justify-between gap-4 p-8`}>
          <div>
            <p className="m-0 text-sm font-semibold uppercase tracking-[0.18em] text-(--brand-blue)">
              {home.reviewEyebrow}
            </p>
            <h2 className="mt-2 text-[2rem] leading-tight font-semibold text-(--brand-ink)">
              {home.reviewTitle}
            </h2>
            <p className={`${bodyCopyClass} mt-3 max-w-[56ch]`}>
              {home.reviewBody}
            </p>
          </div>
          <button
            type="button"
            className={`${primaryButtonClass} gap-2`}
            onClick={() => navigateTo('/contact')}
          >
            {home.reviewCta}
            <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>
    </>
  )
}
