import { ArrowRight, Clock3, Handshake } from "lucide-react";
import logoImage from "../assets/brand-logo.svg";
import { BookingForm } from "../components/BookingForm";
import { ContactGrid } from "../components/ContactGrid";
import { SectionHeading } from "../components/SectionHeading";
import {
  bodyCopyClass,
  cardClass,
  pageBannerClass,
  primaryButtonClass,
  sectionClass,
  shellClass,
  splitLayoutClass,
} from "../components/ui/ui";
import { useI18n } from "../i18n";

export function ContactPage() {
  const { content } = useI18n();
  const { contact, site } = content;

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <>
      <section className={pageBannerClass}>
        <div className={`${shellClass} ${splitLayoutClass} items-start`}>
          <div className="grid max-w-[700px] gap-5">
            <p className="m-0 text-[0.84rem] font-bold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
              {contact.heroEyebrow}
            </p>
            <h1 className="m-0 max-w-[11ch] text-[3rem] leading-[0.98] font-semibold text-[color:var(--brand-ink)] md:text-[4.8rem]">
              {contact.heroTitle}
            </h1>
            <p className={bodyCopyClass}>{contact.heroBody}</p>
          </div>

          <article className={`${cardClass} grid gap-4 p-5`}>
            <div className="flex items-center gap-4">
              <span className="flex h-18 w-18 shrink-0 items-center justify-center overflow-hidden rounded-[20px] border border-[color:var(--brand-line)] bg-white shadow-[0_14px_28px_rgba(14,55,39,0.1)]">
                <img
                  src={logoImage}
                  alt="Nadir Health Organization logo"
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-primary)]">
                  {contact.deskLabel}
                </p>
                <p className="mt-2 text-base font-medium text-[color:var(--brand-ink)]">
                  {contact.deskBody}
                </p>
              </div>
            </div>
            <button
              type="button"
              className={`${primaryButtonClass} w-fit gap-2`}
              onClick={() => navigateTo("/staff")}
            >
              {contact.reviewStaff}
              <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        </div>
      </section>

      <section className={sectionClass}>
        <div className={`${shellClass} ${splitLayoutClass} items-start`}>
          <SectionHeading
            eyebrow={contact.getInTouchEyebrow}
            title={contact.getInTouchTitle}
            body={contact.getInTouchBody}
          />
          <div className="grid gap-5">
            <BookingForm />
            <ContactGrid items={site.contactChannels} />
            <article className={`${cardClass} grid gap-4 p-6 md:grid-cols-2`}>
              <div>
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)]">
                  <Handshake className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-[color:var(--brand-ink)]">
                  {contact.referralTitle}
                </h3>
                <p className={`${bodyCopyClass} mt-3`}>
                  {contact.referralBody}
                </p>
              </div>
              <div>
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand-green)]/12 text-[color:var(--brand-green)]">
                  <Clock3 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-[color:var(--brand-ink)]">
                  {contact.responseTitle}
                </h3>
                <p className={`${bodyCopyClass} mt-3`}>
                  {contact.responseBody}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
