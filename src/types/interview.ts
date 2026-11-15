export type InterviewFormat = 'online' | 'offline' | 'phone'

export interface Interview {
  id: string
  applicationId: string

  title: string
  type: string

  date: string
  time: string

  format: InterviewFormat

  location?: string
  meetingUrl?: string
  contactPerson?: string

  notes: string
}
