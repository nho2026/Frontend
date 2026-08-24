import type {
  AppointmentOption,
  CareFeature,
  ContactChannel,
  DoctorProfile,
  ImpactMetric,
  NavigationItem,
  ServiceTag,
  TimelineItem,
} from '../types'

export const siteNavigation: NavigationItem[] = [
  { label: 'Home', path: '/', summary: 'Heart and dental surgery services.' },
  { label: 'About', path: '/about', summary: 'Surgical focus and operating standards.' },
  {
    label: 'Staff',
    path: '/staff',
    summary: 'Heart, teeth, and children specialists.',
  },
  {
    label: 'Contact',
    path: '/contact',
    summary: 'Referrals, appointments, and case coordination.',
  },
]

export const keyMetrics: ImpactMetric[] = [
  {
    value: '3,200+',
    label: 'surgeries completed',
    detail:
      'Heart surgery and dental surgery cases coordinated from assessment through recovery.',
  },
  {
    value: '2',
    label: 'specialty lines',
    detail:
      'The organization is limited to heart surgery and dental surgery.',
  },
  {
    value: '96%',
    label: 'follow-up completion',
    detail:
      'Post-operative review schedules are confirmed before discharge whenever required.',
  },
]

export const operatingPrinciples = [
  'The surgical scope stays narrow: heart surgery and dental surgery.',
  'Pre-operative review, operating room planning, and recovery follow-up are handled as one workflow.',
  'Patients are booked into named surgeon schedules instead of a general intake queue.',
]

export const serviceTags: ServiceTag[] = [
  { label: 'Heart Surgery' },
  { label: 'Dental Surgery' },
  { label: 'Cardiac Procedures' },
  { label: 'Oral Surgery' },
  { label: 'Surgical Assessment' },
  { label: 'Post-Op Review' },
]

export const careFeatures: CareFeature[] = [
  {
    title: 'Heart Surgery Focus',
    body: 'Case review, surgeon scheduling, and operating preparation are built specifically for cardiac procedures.',
  },
  {
    title: 'Dental Surgery Focus',
    body: 'Dental and oral surgery cases follow a separate track with clear assessment and recovery planning.',
  },
  {
    title: 'Operating Discipline',
    body: 'A narrower scope allows the team to keep equipment, staffing, and planning aligned to surgical work.',
  },
  {
    title: 'Post-Op Continuity',
    body: 'Recovery checks and next-step instructions are structured around the actual surgery performed.',
  },
]

export const doctorProfiles: DoctorProfile[] = [
  {
    name: 'Dr. Darya Nadir',
    specialty: 'Heart',
    role: 'Board-Certified Heart Doctor',
    experience: '10 years experience',
    availability: 'Mon, Wed, Thu',
    languages: ['Arabic', 'English'],
    focus: 'Heart cases, surgery review, and structured cardiac follow-up.',
  },
  {
    name: 'Dr. Sonya Nadir',
    specialty: 'Teeth',
    role: 'Board-Certified Teeth Doctor',
    experience: '5 years experience',
    availability: 'Sun, Tue, Thu',
    languages: ['Arabic', 'Kurdish'],
    focus: 'Teeth treatment, dental surgery review, and recovery planning.',
  },
  {
    name: 'Dr. Dunya Nadir',
    specialty: 'Children',
    role: 'Board-Certified Child Doctor',
    experience: '5 years experience',
    availability: 'Daily appointments',
    languages: ['Arabic', 'English'],
    focus: 'Children care, child assessment, and structured follow-up for young patients.',
  },
  {
    name: 'Dr. Saray Abdulrahman',
    specialty: 'Children',
    role: 'Board-Certified Child Doctor',
    experience: '10 years experience',
    availability: 'Mon to Fri',
    languages: ['Arabic', 'English'],
    focus: 'Children consultations, ongoing child care, and family guidance.',
  },
]

export const appointmentOptions: AppointmentOption[] = [
  {
    title: 'Heart Surgery Evaluation',
    timing: '30 to 45 minutes',
    format: 'In-person surgical review',
    summary:
      'Patients are assessed for heart surgery needs, case complexity, and preparation steps before scheduling.',
  },
  {
    title: 'Dental Surgery Assessment',
    timing: '20 to 30 minutes',
    format: 'In-person dental surgery consult',
    summary:
      'Dental surgery cases are reviewed for imaging, procedure scope, anesthesia planning, and recovery needs.',
  },
  {
    title: 'Post-Surgery Follow-Up',
    timing: 'Scheduled by case',
    format: 'Staff-coordinated review',
    summary:
      'Recovery checks, wound review, medication instructions, and surgeon follow-up are structured around the completed procedure.',
  },
]

function buildAvailableBookingDates(count: number) {
  const dates: string[] = []
  const cursor = new Date()
  cursor.setHours(0, 0, 0, 0)

  while (dates.length < count) {
    cursor.setDate(cursor.getDate() + 1)
    const day = cursor.getDay()

    if (day === 5 || day === 6) {
      continue
    }

    dates.push(cursor.toISOString().slice(0, 10))
  }

  return dates
}

export const availableBookingDates = buildAvailableBookingDates(12)

export const impactTimeline: TimelineItem[] = [
  {
    year: '2021',
    title: 'Heart surgery service established',
    body: 'The organization formalized a focused cardiac surgery workflow with surgeon-led case review and operating coordination.',
  },
  {
    year: '2023',
    title: 'Dental surgery line added',
    body: 'Dental and oral surgery were added as the second and only other specialty line within the organization.',
  },
  {
    year: '2025',
    title: 'Surgical workflow standardized',
    body: 'Assessment, procedure scheduling, and post-operative follow-up were tightened into a single operating model across both specialties.',
  },
]

export const contactChannels: ContactChannel[] = [
  {
    label: 'Surgical Referrals',
    value: 'referrals@nadirhealth.org',
    note: 'For heart surgery and dental surgery referral cases that need surgeon review.',
  },
  {
    label: 'Operating Coordination',
    value: 'coordination@nadirhealth.org',
    note: 'For scheduling, pre-operative preparation, and case logistics.',
  },
  {
    label: 'Main Office',
    value: '+964 (0) 750 245 0788',
    note: 'Weekdays, 9:00 to 17:00 Baghdad time.',
  },
]
