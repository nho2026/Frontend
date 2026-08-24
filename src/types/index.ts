export type RoutePath = '/' | '/about' | '/staff' | '/contact'

export type NavigationItem = {
  label: string
  path: RoutePath
  summary: string
}

export type ImpactMetric = {
  value: string
  label: string
  detail: string
}

export type TimelineItem = {
  year: string
  title: string
  body: string
}

export type ContactChannel = {
  label: string
  value: string
  note: string
}

export type ServiceTag = {
  label: string
}

export type CareFeature = {
  title: string
  body: string
}

export type DoctorProfile = {
  name: string
  specialty: string
  role: string
  experience: string
  availability: string
  languages: string[]
  focus: string
}

export type AppointmentOption = {
  title: string
  timing: string
  format: string
  summary: string
}
