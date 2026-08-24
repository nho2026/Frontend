import { bodyCopyClass, pageBannerClass, shellClass } from '../components/ui/ui'

export function ProgramsPage() {
  return (
    <>
      <section className={pageBannerClass}>
        <div className={`${shellClass} grid max-w-180 gap-4.5`}>
          <p className="m-0 text-[0.84rem] font-bold uppercase text-[color:var(--brand-blue)]">
            Programs
          </p>
          <h1 className="m-0 max-w-[10ch] text-5xl leading-[1.08] font-semibold text-[color:var(--brand-ink)] md:text-7xl">
            Heart surgery and dental surgery service lines only.
          </h1>
          <p className={bodyCopyClass}>
            The organization does not operate broader clinic programs outside
            those two surgical specialties.
          </p>
        </div>
      </section>
    </>
  )
}
