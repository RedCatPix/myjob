import { Save } from 'lucide-react'
import {
  CURRENCY_OPTIONS,
  EMPLOYMENT_TYPE_OPTIONS,
  WORK_FORMAT_OPTIONS,
} from '../../app/options.ts'
import type { Category } from '../../types/application.ts'
import type { ApplicationFormValues } from '../../types/applicationForm.ts'
import Button from '../ui/Button.tsx'
import ButtonLink from '../ui/ButtonLink.tsx'
import Field from '../ui/Field.tsx'
import Select from '../ui/Select.tsx'
import TextArea from '../ui/TextArea.tsx'
import TextInput from '../ui/TextInput.tsx'
import styles from './ApplicationForm.module.css'

interface ApplicationFormProps {
  /** Начальные значения полей: пустые для создания, текущие данные для редактирования. */
  values: ApplicationFormValues
  categories: readonly Category[]
  /** Куда ведёт кнопка «Отмена». */
  cancelTo: string
}

/** Форма отклика, общая для создания и редактирования. */
function ApplicationForm({ values, categories, cancelTo }: ApplicationFormProps) {
  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }))

  return (
    <form
      className={styles.form}
      aria-label="Данные отклика"
      noValidate
      onSubmit={(event) => event.preventDefault()}
    >
      <fieldset className={styles.group}>
        <legend className={styles.legend}>Вакансия</legend>
        <div className={styles.grid}>
          <Field id="form-company" label="Компания" required>
            <TextInput
              id="form-company"
              name="company"
              defaultValue={values.company}
              placeholder="Название компании"
              autoComplete="off"
              required
            />
          </Field>
          <Field id="form-position" label="Должность" required>
            <TextInput
              id="form-position"
              name="position"
              defaultValue={values.position}
              placeholder="Например, Frontend-разработчик"
              autoComplete="off"
              required
            />
          </Field>
          <Field id="form-category" label="Категория" required>
            <Select
              id="form-category"
              name="categoryId"
              options={categoryOptions}
              placeholder="Выберите категорию"
              defaultValue={values.categoryId}
              required
            />
          </Field>
          <Field id="form-applied-at" label="Дата отклика" required>
            <TextInput
              id="form-applied-at"
              name="appliedAt"
              type="date"
              defaultValue={values.appliedAt}
              required
            />
          </Field>
          <Field id="form-job-url" label="Ссылка на вакансию">
            <TextInput
              id="form-job-url"
              name="jobUrl"
              type="url"
              defaultValue={values.jobUrl}
              placeholder="https://"
              autoComplete="off"
            />
          </Field>
          <Field id="form-contact-email" label="Контактный e-mail">
            <TextInput
              id="form-contact-email"
              name="contactEmail"
              type="email"
              defaultValue={values.contactEmail}
              placeholder="hr@company.ru"
              autoComplete="off"
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend className={styles.legend}>Условия работы</legend>
        <div className={styles.grid}>
          <Field id="form-salary" label="Зарплата от" required>
            <TextInput
              id="form-salary"
              name="salary"
              type="number"
              inputMode="numeric"
              min={0}
              step={1000}
              defaultValue={values.salary}
              placeholder="0"
              required
            />
          </Field>
          <Field id="form-salary-max" label="Зарплата до">
            <TextInput
              id="form-salary-max"
              name="salaryMax"
              type="number"
              inputMode="numeric"
              min={0}
              step={1000}
              defaultValue={values.salaryMax}
              placeholder="Необязательно"
            />
          </Field>
          <Field id="form-currency" label="Валюта" required>
            <Select
              id="form-currency"
              name="currency"
              options={CURRENCY_OPTIONS}
              defaultValue={values.currency}
              required
            />
          </Field>
          <Field id="form-employment-type" label="Тип занятости" required>
            <Select
              id="form-employment-type"
              name="employmentType"
              options={EMPLOYMENT_TYPE_OPTIONS}
              defaultValue={values.employmentType}
              required
            />
          </Field>
          <Field id="form-work-format" label="Формат работы" required>
            <Select
              id="form-work-format"
              name="workFormat"
              options={WORK_FORMAT_OPTIONS}
              defaultValue={values.workFormat}
              required
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend className={styles.legend}>Описание и заметки</legend>
        <div className={styles.grid}>
          <Field id="form-description" label="Описание вакансии" wide>
            <TextArea
              id="form-description"
              name="description"
              rows={5}
              defaultValue={values.description}
              placeholder="Обязанности, требования, условия"
            />
          </Field>
          <Field id="form-notes" label="Заметки" wide>
            <TextArea
              id="form-notes"
              name="notes"
              rows={4}
              defaultValue={values.notes}
              placeholder="Личные заметки по отклику"
            />
          </Field>
        </div>
      </fieldset>

      <p className={styles.legendNote}>
        <span className={styles.required} aria-hidden="true">
          *
        </span>{' '}
        – обязательные поля
      </p>

      <div className={styles.actions}>
        <Button icon={<Save size={18} aria-hidden="true" />}>Сохранить</Button>
        <ButtonLink to={cancelTo} variant="secondary">
          Отмена
        </ButtonLink>
      </div>
    </form>
  )
}

export default ApplicationForm
