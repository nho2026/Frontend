import { useMemo, useState } from 'react'
import { CalendarDays, CheckCircle2, Phone, User } from 'lucide-react'
import { format } from 'date-fns'
import { availableBookingDates } from '../data/site'
import { useI18n } from '../i18n'
import { bodyCopyClass, cardClass } from './ui/ui'
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

const availableDates = availableBookingDates.map((date) => new Date(date))
const availableDateSet = new Set(
  availableDates.map((date) => format(date, 'yyyy-MM-dd')),
)

const quickPickDates = availableDates.slice(0, 6)

export function BookingForm() {
  const { content, dateLocale, formatDate, isRTL } = useI18n()
  const { bookingForm } = content
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [submitted, setSubmitted] = useState(false)
  const [pickerOpen, setPickerOpen] = useState(false)

  const canSubmit = Boolean(name.trim() && phone.trim() && selectedDate)

  const availableDateSummary = useMemo(
    () =>
      quickPickDates.map((date) => ({
        label: format(date, 'EEE, MMM d', { locale: dateLocale }),
        value: format(date, 'yyyy-MM-dd'),
        date,
      })),
    [dateLocale],
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!canSubmit) {
      return
    }

    setSubmitted(true)
    setName('')
    setPhone('')
    setSelectedDate(undefined)
  }

  return (
    <article className={`${cardClass} grid gap-5 p-6`}>
      <div className="grid gap-2">
        <p className="text-[0.84rem] font-bold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
          {bookingForm.eyebrow}
        </p>
        <h3 className="text-[1.8rem] font-semibold text-[color:var(--brand-ink)]">
          {bookingForm.title}
        </h3>
        <p className={bodyCopyClass}>{bookingForm.body}</p>
      </div>

      <div className="grid gap-3">
        <p className="text-sm font-semibold text-[color:var(--brand-ink)]">
          {bookingForm.availableDates}
        </p>
        <div className="flex flex-wrap gap-2.5">
          {availableDateSummary.map((item) => {
            const isActive =
              selectedDate && format(selectedDate, 'yyyy-MM-dd') === item.value

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => setSelectedDate(item.date)}
                className={`inline-flex min-h-10 items-center rounded-full border px-3.5 text-sm font-medium transition duration-200 ${
                  isActive
                    ? 'border-transparent bg-[linear-gradient(135deg,var(--brand-primary),var(--brand-primary-deep))] text-white shadow-[0_12px_22px_rgba(192,34,39,0.18)]'
                    : 'border-[color:var(--brand-line)] bg-white text-[color:var(--brand-copy)] hover:bg-[color:var(--brand-primary)]/8'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[color:var(--brand-ink)]">
            {bookingForm.name}
          </span>
          <span className="relative">
            <User
              className={`pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--brand-primary)] ${isRTL ? 'right-4' : 'left-4'}`}
            />
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={bookingForm.namePlaceholder}
              className={`min-h-12 w-full rounded-[18px] border border-[color:var(--brand-line)] bg-white text-sm text-[color:var(--brand-ink)] shadow-[0_10px_22px_rgba(14,55,39,0.06)] outline-none transition duration-200 placeholder:text-slate-400 focus:border-[color:var(--brand-primary)] ${isRTL ? 'pr-11 pl-4 text-right' : 'pl-11 pr-4 text-left'}`}
              required
            />
          </span>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[color:var(--brand-ink)]">
            {bookingForm.phone}
          </span>
          <span className="relative">
            <Phone
              className={`pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--brand-primary)] ${isRTL ? 'right-4' : 'left-4'}`}
            />
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder={bookingForm.phonePlaceholder}
              className={`min-h-12 w-full rounded-[18px] border border-[color:var(--brand-line)] bg-white text-sm text-[color:var(--brand-ink)] shadow-[0_10px_22px_rgba(14,55,39,0.06)] outline-none transition duration-200 placeholder:text-slate-400 focus:border-[color:var(--brand-primary)] ${isRTL ? 'pr-11 pl-4 text-right' : 'pl-11 pr-4 text-left'}`}
              required
            />
          </span>
        </label>

        <div className="grid gap-2">
          <span className="text-sm font-semibold text-[color:var(--brand-ink)]">
            {bookingForm.date}
          </span>
          <Popover open={pickerOpen} onOpenChange={setPickerOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-between rounded-[18px] px-4 ${isRTL ? 'text-right' : 'text-left'}`}
              >
                <span className="flex items-center gap-3">
                  <CalendarDays className="h-4 w-4 text-[color:var(--brand-primary)]" />
                  {selectedDate ? (
                    formatDate(selectedDate, { dateStyle: 'full' })
                  ) : (
                    <span className="font-medium text-slate-400">
                      {bookingForm.pickDate}
                    </span>
                  )}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-2" sideOffset={12}>
              <Calendar
                locale={dateLocale}
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date)
                  if (date) {
                    setPickerOpen(false)
                  }
                }}
                disabled={(date) =>
                  !availableDateSet.has(format(date, 'yyyy-MM-dd'))
                }
              />
            </PopoverContent>
          </Popover>
        </div>

        <Button type="submit" className="mt-1 w-full" disabled={!canSubmit}>
          {bookingForm.submit}
        </Button>
      </form>

      {submitted ? (
        <div className="flex items-start gap-3 rounded-[20px] border border-[color:var(--brand-green)]/20 bg-[color:var(--brand-green)]/8 px-4 py-3 text-sm text-[color:var(--brand-ink)]">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-green)]" />
          <span>{bookingForm.success}</span>
        </div>
      ) : null}
    </article>
  )
}
