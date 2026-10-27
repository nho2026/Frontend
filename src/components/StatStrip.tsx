import type { ImpactMetric } from '../types'
import { bodyCopyClass } from './ui/ui'

type StatStripProps = {
  items: ImpactMetric[]
}

export function StatStrip({ items }: StatStripProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.label}
          className="rounded-[24px] border border-[color:var(--brand-line)] bg-white/86 p-6 shadow-[0_20px_42px_rgba(14,55,39,0.08)]"
        >
          <p className="mb-3 text-[2.6rem] leading-none font-bold text-[color:var(--brand-ink)]">
            {item.value}
          </p>
          <h3 className="mb-3 text-xl leading-tight font-semibold text-[color:var(--brand-ink)]">
            {item.label}
          </h3>
          <p className={bodyCopyClass}>{item.detail}</p>
        </article>
      ))}
    </div>
  )
}
