import {
  ArrowRight,
  CalendarDays,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Syringe,
} from "lucide-react";
import logoImage from "../assets/brand-logo.svg";
import HeartViewer from "../components/HeartViewer";
import { CareServicesSection, CareJourneySection, CareFaqSection } from "../components/HomeCareSections";
import { AppointmentGrid } from "../components/AppointmentGrid";
import { DoctorPortfolioGrid } from "../components/DoctorPortfolioGrid";
import { SectionHeading } from "../components/SectionHeading";
import { StatStrip } from "../components/StatStrip";
import { useI18n } from "../i18n";
import {
  bodyCopyClass,
  cardClass,
  primaryButtonClass,
  secondaryButtonClass,
  sectionClass,
  shellClass,
  splitLayoutClass,
} from "../components/ui/ui";

export function HomePage() {
  const { content, isRTL } = useI18n();
  const { home, site } = content;

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const featureIcons = [HeartPulse, Syringe, ShieldCheck, Stethoscope];

  return (
    <>
      <section className="home-hero heart-focused-hero pb-10 pt-5 md:pb-14 md:pt-8">
        <img className="hero-background" src="/images/brand-landscape.webp" alt="" aria-hidden="true" fetchPriority="low" />
        <div
          className="hero-layout mx-auto grid w-full max-w-[1480px] items-center gap-6 px-4 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-4"
        >
          <div className="hero-copy grid content-center gap-5 lg:py-10">
            <p className="m-0 inline-flex w-fit items-center gap-2 rounded-full border border-(--brand-line) bg-white/82 px-3.5 py-2 text-[0.86rem] font-bold text-(--brand-primary)">
              <HeartPulse className="h-4 w-4" />
              {home.heroBadge}
            </p>
            <h1 className="hero-title m-0 max-w-[18ch] text-[2.7rem] leading-[1.08] font-semibold text-(--brand-ink) md:text-[3.8rem]">
              {home.heroTitle}
            </h1>
            <p className={`${bodyCopyClass} max-w-[64ch]`}>{home.heroBody}</p>

            <div className="flex flex-wrap gap-3.5 pt-1.5">
              <button
                type="button"
                className={`${primaryButtonClass} gap-2`}
                onClick={() => navigateTo("/contact")}
              >
                {home.primaryCta}
                <ArrowRight
                  className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`}
                />
              </button>
              <button
                type="button"
                className={secondaryButtonClass}
                onClick={() => navigateTo("/staff")}
              >
                {home.secondaryCta}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 md:gap-4">
              {home.heroStats.map((item) => (
                <div
                  key={item.label}
                  className="border-s-2 border-(--brand-primary)/30 px-2 py-2 md:px-4"
                >
                  <strong className="whitespace-nowrap text-xl leading-none font-bold text-(--brand-green) md:text-[2rem]">
                    {item.value}
                  </strong>
                  <p className="mt-2 text-xs text-[color:var(--brand-muted)] md:text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="heart-hero-visual order-first lg:order-last">
            <HeartViewer />
          </div>
        </div>
      </section>

      <CareServicesSection navigate={navigateTo} />

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
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-(--brand-green)/12 text-(--brand-green)">
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
                onClick={() => navigateTo("/about")}
              >
                {home.learnMore}
              </button>
            </div>
          </div>

          <div
            className={`${cardClass} brand-panel flex min-h-105 items-center justify-center p-8`}
          >
            <img
              src={logoImage}
              alt="Nadir Health Organization logo"
              className="max-h-70 w-full max-w-70 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="care-background border-y border-(--brand-line) py-16 md:py-24">
        <div className={`${shellClass} ${splitLayoutClass}`}>
          <SectionHeading
            eyebrow={home.whyEyebrow}
            title={home.whyTitle}
            body={home.whyBody}
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {site.careFeatures.map((feature, index) => {
              const Icon = featureIcons[index] ?? HeartPulse;

              return (
                <article
                  key={feature.title}
                  className={`${cardClass} relative overflow-hidden p-6`}
                >
                  <span
                    className={`pointer-events-none absolute top-0 h-24 w-24 bg-(--brand-primary)/8 ${
                      isRTL
                        ? "left-0 rounded-br-[38px]"
                        : "right-0 rounded-bl-[38px]"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className="mb-4.5 grid h-11 w-11 place-items-center rounded-3.5 bg-(--brand-primary)/12 text-(--brand-primary)"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-3 text-xl leading-tight font-semibold text-(--brand-ink)">
                    {feature.title}
                  </h3>
                  <p className={bodyCopyClass}>{feature.body}</p>
                </article>
              );
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
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-(--brand-primary)">
                    {item.title}
                  </p>
                  <p className={`${bodyCopyClass} mt-3`}>{item.body}</p>
                </article>
              ))}
            </div>
            <button
              type="button"
              className={`${primaryButtonClass} w-fit`}
              onClick={() => navigateTo("/staff")}
            >
              {home.viewStaff}
            </button>
          </div>

          <div className={`${cardClass} overflow-hidden p-4`}>
            <img
              src="/images/cardiac-care-team.webp"
              loading="lazy"
              decoding="async"
              alt="A cardiology care team reviewing a heart illustration in a bright consultation room."
              className="block aspect-16/11 w-full rounded-[20px] object-cover"
            />
          </div>
        </div>
      </section>

      <CareJourneySection />

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
            onBook={() => navigateTo("/contact")}
          />
          <div className="mt-8 flex">
            <button
              type="button"
              className={`${secondaryButtonClass} inline-flex items-center gap-2`}
              onClick={() => navigateTo("/staff")}
            >
              <CalendarDays className="h-4 w-4" />
              {home.browseSchedule}
            </button>
          </div>
        </div>
      </section>

      <CareFaqSection navigate={navigateTo} />

      <section className="pb-16 pt-2 md:pb-24">
        <div
          className={`${shellClass} ${cardClass} border-t-4 border-t-(--brand-primary) flex flex-wrap items-center justify-between gap-4 p-8`}
        >
          <div>
            <p className="m-0 text-sm font-semibold uppercase tracking-[0.18em] text-(--brand-primary)">
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
            onClick={() => navigateTo("/contact")}
          >
            {home.reviewCta}
            <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
          </button>
        </div>
      </section>
    </>
  );
}
