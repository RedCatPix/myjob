import { Download, Trash2, Upload } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader.tsx'
import Button from '../components/ui/Button.tsx'
import Checkbox from '../components/ui/Checkbox.tsx'
import Field from '../components/ui/Field.tsx'
import Section from '../components/ui/Section.tsx'
import TextInput from '../components/ui/TextInput.tsx'
import { PREVIEW_STORAGE } from './previewData.ts'
import styles from './SettingsPage.module.css'

interface ParameterItem {
  label: string
  value: string
}

const APP_PARAMETERS: readonly ParameterItem[] = [
  { label: 'Приложение', value: 'MyJob – Трекер поиска работы' },
  { label: 'Язык интерфейса', value: 'Русский' },
  { label: 'Формат дат', value: 'ДД.ММ.ГГ' },
  { label: 'Первый день недели', value: 'Понедельник' },
  { label: 'Валюта по умолчанию', value: 'RUB' },
  { label: 'Темы оформления', value: 'Светлая и тёмная' },
]

function SettingsPage() {
  return (
    <div className={styles.page}>
      <PageHeader
        title="Настройки"
        description="Управление данными приложения: импорт и экспорт в формате JSON, просмотр локальных данных и их очистка."
      />

      <Section
        id="import-title"
        title="Импорт данных"
        description="Загрузите JSON-файл с откликами и другими данными, ранее выгруженными из MyJob."
      >
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <Field id="import-file" label="Файл JSON" hint="Поддерживается формат JSON (.json).">
            <TextInput
              id="import-file"
              name="file"
              type="file"
              accept=".json,application/json"
              aria-describedby="import-file-hint"
            />
          </Field>
          <div>
            <Button icon={<Upload size={18} aria-hidden="true" />}>Импортировать</Button>
          </div>
        </form>
      </Section>

      <Section
        id="export-title"
        title="Экспорт данных"
        description="Выберите, какие данные выгрузить в JSON-файл."
      >
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <fieldset className={styles.checks}>
            <legend className={styles.legend}>Коллекции для экспорта</legend>
            {PREVIEW_STORAGE.map((item) => (
              <Checkbox key={item.id} name="collections" value={item.id} label={item.label} defaultChecked />
            ))}
          </fieldset>
          <div>
            <Button icon={<Download size={18} aria-hidden="true" />}>Экспортировать в JSON</Button>
          </div>
        </form>
      </Section>

      <Section
        id="storage-title"
        title="Локальные данные"
        description="Сколько записей хранится в браузере на этом устройстве."
      >
        <dl className={styles.list}>
          {PREVIEW_STORAGE.map((item) => (
            <div key={item.id} className={styles.listRow}>
              <dt>{item.label}</dt>
              <dd className={styles.count}>{item.count}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section
        id="parameters-title"
        title="Параметры приложения"
        description="Основные параметры работы MyJob."
      >
        <dl className={styles.list}>
          {APP_PARAMETERS.map((item) => (
            <div key={item.label} className={styles.listRow}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="clear-title" title="Очистка данных">
        <div className={styles.danger}>
          <div className={styles.dangerText}>
            <p className={styles.dangerTitle}>Удалить все локальные данные</p>
            <p>
              Будут удалены отклики, собеседования, напоминания и история изменений, сохранённые в
              этом браузере. Действие нельзя отменить, поэтому заранее выгрузите данные в JSON.
            </p>
          </div>
          <Button variant="danger" icon={<Trash2 size={18} aria-hidden="true" />}>
            Очистить данные
          </Button>
        </div>
      </Section>
    </div>
  )
}

export default SettingsPage
