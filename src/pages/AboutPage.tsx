import { HeartPulse, ShieldCheck, Users } from "lucide-react";
import logoImage from "../assets/brand-logo.svg";
import { SectionHeading } from "../components/SectionHeading";
import {
  bodyCopyClass,
  cardClass,
  pageBannerClass,
  sectionClass,
  shellClass,
  splitLayoutClass,
} from "../components/ui/ui";
import { useI18n } from "../i18n";

export function AboutPage() {
  const { content } = useI18n();
  const { about } = content;

  const missionCards = [
    {
      icon: HeartPulse,
      ...about.missionCards[0],
    },
    {
      icon: Users,
      ...about.missionCards[1],
    },
    {
      icon: ShieldCheck,
      ...about.missionCards[2],
    },
  ];

  return (
    <>
      <section className={pageBannerClass}>
        <div className={`${shellClass} ${splitLayoutClass} items-start`}>
          <div className="grid max-w-[680px] gap-5">
            <p className="m-0 text-[0.84rem] font-bold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
              {about.heroEyebrow}
            </p>
            <h1 className="m-0 max-w-[11ch] text-[3rem] leading-[0.98] font-semibold text-[color:var(--brand-ink)] md:text-[4.8rem]">
              {about.heroTitle}
            </h1>
            <p className={bodyCopyClass}>{about.heroBody}</p>
          </div>

          <div className={`${cardClass} flex items-center gap-4 p-5`}>
            <span className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-[24px] border border-[color:var(--brand-line)] bg-white shadow-[0_16px_28px_rgba(14,55,39,0.1)]">
              <img
                src={logoImage}
                alt="Nadir Health Organization logo"
                className="h-full w-full object-contain"
              />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-primary)]">
                {about.brandPrincipleLabel}
              </p>
              <p className="mt-2 text-base font-medium text-[color:var(--brand-ink)]">
                {about.brandPrincipleValue}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className={`${shellClass} ${splitLayoutClass}`}>
          <SectionHeading
            eyebrow={about.missionEyebrow}
            title={about.missionTitle}
            body={about.missionBody}
          />

          <div className="grid gap-4">
            {missionCards.map(({ icon: Icon, title, body }) => (
              <article key={title} className={`${cardClass} p-5`}>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-[color:var(--brand-ink)]">
                  {title}
                </h3>
                <p className={`${bodyCopyClass} mt-3`}>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/40 bg-white/56 py-16 md:py-24">
        <div className={shellClass}>
          <SectionHeading
            eyebrow={about.leadershipEyebrow}
            title={about.leadershipTitle}
            body={about.leadershipBody}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {about.leadershipPoints.map((point) => (
              <article key={point} className={`${cardClass} p-6`}>
                <p className={bodyCopyClass}>{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
