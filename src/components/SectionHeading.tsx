import { bodyCopyClass, eyebrowClass, sectionHeadingClass } from './ui/ui'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  body: string
}

export function SectionHeading({
  eyebrow,
  title,
  body,
}: SectionHeadingProps) {
  return (
    <div className={sectionHeadingClass}>
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 className="m-0 text-[2.2rem] leading-[1.06] font-semibold text-[color:var(--brand-ink)] md:text-[3.2rem]">
        {title}
      </h2>
      <p className={bodyCopyClass}>{body}</p>
    </div>
  )
}
