import { RotateCcw, Search } from 'lucide-react'
import {
  SORT_DIRECTION_OPTIONS,
  SORT_FIELD_OPTIONS,
  STATUS_OPTIONS,
} from '../../app/options.ts'
import type { Category } from '../../types/application.ts'
import Button from '../ui/Button.tsx'
import Field from '../ui/Field.tsx'
import Select from '../ui/Select.tsx'
import TextInput from '../ui/TextInput.tsx'
import styles from './ApplicationsFilters.module.css'

interface ApplicationsFiltersProps {
  categories: readonly Category[]
}

/** Панель поиска, фильтров и сортировки списка откликов. */
function ApplicationsFilters({ categories }: ApplicationsFiltersProps) {
  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }))

  return (
    <form
      className={styles.filters}
      role="search"
      aria-label="Поиск, фильтры и сортировка откликов"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className={styles.search}>
        <Field id="filter-search" label="Поиск по компании и должности">
          <div className={styles.searchWrap}>
            <Search size={18} className={styles.searchIcon} aria-hidden="true" />
            <TextInput
              id="filter-search"
              type="search"
              name="search"
              placeholder="Например, Северный Код или React"
              autoComplete="off"
            />
          </div>
        </Field>
      </div>

      <Field id="filter-status" label="Статус">
        <Select id="filter-status" name="status" options={STATUS_OPTIONS} placeholder="Все статусы" />
      </Field>

      <Field id="filter-category" label="Категория">
        <Select
          id="filter-category"
          name="category"
          options={categoryOptions}
          placeholder="Все категории"
        />
      </Field>

      <Field id="filter-sort" label="Сортировать по">
        <Select id="filter-sort" name="sort" options={SORT_FIELD_OPTIONS} />
      </Field>

      <Field id="filter-direction" label="Порядок">
        <Select id="filter-direction" name="direction" options={SORT_DIRECTION_OPTIONS} />
      </Field>

      <div className={styles.reset}>
        <Button variant="secondary" icon={<RotateCcw size={16} aria-hidden="true" />}>
          Сбросить фильтры
        </Button>
      </div>
    </form>
  )
}

export default ApplicationsFilters
