import type { TimelineItem } from '../types'
import { bodyCopyClass, cardClass } from './ui/ui'

type TimelineProps = {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="grid gap-4.5">
      {items.map((item) => (
        <article
          key={item.year}
          className={`${cardClass} grid gap-6 p-6 md:grid-cols-[110px_1fr]`}
        >
          <p className="m-0 text-[0.88rem] font-bold text-[color:var(--brand-primary)]">
            {item.year}
          </p>
          <div>
            <h3 className="mb-3 text-xl leading-tight font-semibold text-[color:var(--brand-ink)]">
              {item.title}
            </h3>
            <p className={bodyCopyClass}>{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
