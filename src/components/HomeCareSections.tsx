import { ArrowRight, Baby, ChevronDown, HeartPulse, Stethoscope } from 'lucide-react';
import { useI18n } from '../i18n';
import { homeSections } from '../data/home-sections';
import { RouteLink } from './RouteLink';
import { SectionHeading } from './SectionHeading';
import { bodyCopyClass, primaryButtonClass, sectionClass, shellClass } from './ui/ui';
import type { RoutePath } from '../types';

type SectionProps = { navigate: (path: RoutePath) => void };

export function CareServicesSection({ navigate }: SectionProps) {
  const { language, isRTL } = useI18n();
  const { services } = homeSections[language];
  const icons = [HeartPulse, Stethoscope, Baby];
  return (
    <section className={`${sectionClass} bg-white`} aria-labelledby="care-services-title">
      <div className={shellClass}>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-160">
            <p className="text-sm font-semibold text-(--brand-primary)">{services.eyebrow}</p>
            <h2 id="care-services-title" className="mt-3 text-[2rem] font-semibold leading-[1.3] text-(--brand-ink) md:text-[2.75rem]">{services.title}</h2>
            <p className={`${bodyCopyClass} mt-3`}>{services.body}</p>
          </div>
          <RouteLink currentPath="/" path="/staff" navigate={navigate} className="inline-flex min-h-11 items-center gap-3 border-b border-(--brand-green)/25 text-sm font-semibold text-(--brand-green) transition-colors hover:border-(--brand-green)">
            {services.link}<ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
          </RouteLink>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <RouteLink key={item.title} currentPath="/" path="/contact" navigate={navigate} className={`group flex flex-col rounded-2xl border p-6 transition-colors md:p-8 ${index === 0 ? 'border-[#ecd4d3] bg-[#fff8f7] hover:border-(--brand-primary)' : 'border-(--brand-line) bg-white hover:border-(--brand-green)/40'}`}>
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className={`grid h-12 w-12 place-items-center rounded-xl ${index === 0 ? 'bg-(--brand-primary)/8 text-(--brand-primary)' : 'bg-(--brand-green)/6 text-(--brand-green)'}`}><Icon className="h-6 w-6" strokeWidth={1.6} /></span>
                  <span className="text-xs font-medium tracking-widest text-(--brand-muted)" aria-hidden="true">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold leading-[1.5] text-(--brand-ink)">{item.title}</h3>
                <p className="mb-8 mt-3 flex-1 text-base leading-8 text-(--brand-copy)">{item.body}</p>
                <span className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${index === 0 ? 'border-(--brand-primary)/20 text-(--brand-primary) group-hover:bg-(--brand-primary)/8' : 'border-(--brand-line) text-(--brand-green) group-hover:bg-(--brand-green)/6'}`} aria-hidden="true"><ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} /></span>
              </RouteLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CareJourneySection() {
  const { language } = useI18n();
  const { journey } = homeSections[language];
  return (
    <section className={`${sectionClass} border-y border-(--brand-line) bg-white`}>
      <div className={shellClass}>
        <SectionHeading eyebrow={journey.eyebrow} title={journey.title} body={journey.body} />
        <ol className="grid gap-8 pt-4 md:grid-cols-3 md:gap-10">
          {journey.items.map((item, index) => (
            <li key={item.title} className="relative border-t border-(--brand-line) pt-8">
              <span className="absolute -top-4.5 inline-flex h-9 items-center bg-white pe-4 text-sm font-semibold tracking-wider text-(--brand-primary)">0{index + 1}</span>
              <h3 className="text-xl font-semibold text-(--brand-ink)">{item.title}</h3>
              <p className={`${bodyCopyClass} mt-3 max-w-80`}>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CareFaqSection({ navigate }: SectionProps) {
  const { language } = useI18n();
  const { faq } = homeSections[language];
  return (
    <section className={sectionClass}>
      <div className={`${shellClass} grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
        <div>
          <SectionHeading eyebrow={faq.eyebrow} title={faq.title} body={faq.body} />
          <RouteLink currentPath="/" path="/contact" navigate={navigate} className={primaryButtonClass}>{faq.contact}</RouteLink>
        </div>
        <div className="divide-y divide-(--brand-line) border-y border-(--brand-line)">
          {faq.items.map(item => (
            <details key={item.question} name="care-faq" className="care-faq group py-5">
              <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold text-(--brand-ink)">{item.question}<ChevronDown className="h-5 w-5 shrink-0 text-(--brand-green) transition-transform group-open:rotate-180" /></summary>
              <p className={`${bodyCopyClass} pe-8 pt-3`}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
