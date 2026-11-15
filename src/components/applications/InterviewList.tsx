import { ExternalLink, MapPin, Phone, Video } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Interview, InterviewFormat } from '../../types/interview.ts'
import { INTERVIEW_FORMAT_LABELS, formatDate } from '../../utils/format.ts'
import styles from './InterviewList.module.css'

const FORMAT_ICONS: Record<InterviewFormat, LucideIcon> = {
  online: Video,
  offline: MapPin,
  phone: Phone,
}

interface InterviewListProps {
  interviews: readonly Interview[]
}

/** Собеседования, связанные с откликом. */
function InterviewList({ interviews }: InterviewListProps) {
  return (
    <ul className={styles.list}>
      {interviews.map((interview) => {
        const FormatIcon = FORMAT_ICONS[interview.format]

        return (
          <li key={interview.id} className={styles.item}>
            <div className={styles.header}>
              <h3 className={styles.title}>{interview.title}</h3>
              <span className={styles.format}>
                <FormatIcon size={14} aria-hidden="true" />
                {INTERVIEW_FORMAT_LABELS[interview.format]}
              </span>
            </div>

            <dl className={styles.details}>
              <div className={styles.detail}>
                <dt>Дата и время</dt>
                <dd>
                  <time dateTime={`${interview.date}T${interview.time}`}>
                    {formatDate(interview.date)}, {interview.time}
                  </time>
                </dd>
              </div>
              <div className={styles.detail}>
                <dt>Этап</dt>
                <dd>{interview.type}</dd>
              </div>
              {interview.contactPerson ? (
                <div className={styles.detail}>
                  <dt>Контактное лицо</dt>
                  <dd>{interview.contactPerson}</dd>
                </div>
              ) : null}
              {interview.location ? (
                <div className={styles.detail}>
                  <dt>Место</dt>
                  <dd>{interview.location}</dd>
                </div>
              ) : null}
              {interview.meetingUrl ? (
                <div className={styles.detail}>
                  <dt>Видеоконференция</dt>
                  <dd>
                    <a
                      className={styles.link}
                      href={interview.meetingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Открыть ссылку
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>

            {interview.notes ? <p className={styles.notes}>{interview.notes}</p> : null}
          </li>
        )
      })}
    </ul>
  )
}

export default InterviewList
