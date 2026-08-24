import type { ContactChannel } from '../types'
import { bodyCopyClass, cardClass, eyebrowClass } from './ui/ui'

type ContactGridProps = {
  items: ContactChannel[]
}

export function ContactGrid({ items }: ContactGridProps) {
  return (
    <div className="grid gap-5">
      {items.map((item) => (
        <article key={item.label} className={`${cardClass} p-6`}>
          <p className={eyebrowClass}>{item.label}</p>
          <h3 className="mb-3 text-xl leading-tight font-semibold text-[color:var(--brand-ink)]">
            {item.value}
          </h3>
          <p className={bodyCopyClass}>{item.note}</p>
        </article>
      ))}
    </div>
  )
}
