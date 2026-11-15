# Лабораторная работа №2. Первая главная страница приложения

## 1. Название проекта и цель главной страницы

**Проект:** MyJob – Трекер поиска работы.

**Цель главной страницы:** сразу показать пользователю, что это за приложение, и дать общую картину поиска работы: сколько откликов отправлено, сколько процессов активно, сколько собеседований, предложений и отказов, а также какие отклики добавлены последними. Данные на странице приходят из mock-источника, который имитирует ответ сервера.

## 2. Mock-данные и их поля

Данные лежат в `src/mocks/`. Функция `getDashboardData()` из `src/services/applicationsService.ts` возвращает их через `Promise` с задержкой 1200 мс (`setTimeout`).

**Отклики** (`src/mocks/applications.ts`, 12 записей, тип `JobApplication`):

| Поле | Тип | Описание |
|---|---|---|
| `id` | строка | Идентификатор отклика |
| `company` | строка | Компания |
| `position` | строка | Должность |
| `description` | многострочный текст | Описание вакансии |
| `categoryId` | строка | Идентификатор категории |
| `status` | `applied`, `viewed`, `interview`, `offer`, `rejected`, `withdrawn` | Статус |
| `salary`, `salaryMax` | число | Зарплатные ожидания (`salaryMax` необязательное) |
| `currency` | `RUB`, `USD`, `EUR` | Валюта |
| `appliedAt` | дата | Дата отправки отклика |
| `createdAt`, `updatedAt` | дата и время ISO | Создание и последнее изменение записи |
| `employmentType` | `full-time`, `part-time`, `internship`, `contract` | Тип занятости |
| `workFormat` | `remote`, `hybrid`, `office` | Формат работы |
| `jobUrl`, `contactEmail` | строка | Ссылка на вакансию и контактный e-mail |
| `notes` | многострочный текст | Заметки |
| `isFavorite`, `isArchived` | логическое | Избранное и архив |

**Категории** (`src/mocks/categories.ts`, 6 записей, тип `Category`): `id`, `name`, `color`.

В данных представлены все шесть статусов, разные компании, должности, даты, зарплаты и три валюты. Ссылки и e-mail в mock-данных вымышленные (домены `example.com` и `.example`).

## 3. Список созданных компонентов

| Компонент | Файл | Назначение |
|---|---|---|
| `App` | `src/App.tsx` | Корневой компонент: шапка и страница |
| `DashboardPage` | `src/pages/DashboardPage.tsx` | Главная страница, загрузка данных, состояния |
| `AppHeader` | `src/components/layout/AppHeader.tsx` | Шапка с названием и навигацией |
| `ThemeToggle` | `src/components/layout/ThemeToggle.tsx` | Переключатель темы |
| `StatsSummary` | `src/components/dashboard/StatsSummary.tsx` | Сводные показатели |
| `ApplicationList` | `src/components/applications/ApplicationList.tsx` | Список карточек откликов |
| `ApplicationCard` | `src/components/applications/ApplicationCard.tsx` | Карточка одного отклика |
| `StatusBadge` | `src/components/applications/StatusBadge.tsx` | Цветной индикатор статуса |
| `LoadingIndicator` | `src/components/ui/LoadingIndicator.tsx` | Сообщение «Загрузка...» |
| `ErrorMessage` | `src/components/ui/ErrorMessage.tsx` | Сообщение об ошибке с повтором |

Данные передаются в дочерние компоненты через props. Дополнительно созданы хук `useTheme` (`src/hooks/useTheme.ts`) и вспомогательные функции форматирования и расчёта (`src/utils/`).

## 4. Где используется `useState`

В `DashboardPage` (`src/pages/DashboardPage.tsx`):

- `state` – данные страницы и состояние загрузки: `loading` (идёт загрузка), `error` (ошибка с текстом) или `success` (загруженные отклики и категории). Именно в нём хранятся данные, пришедшие из mock-источника.
- `reloadKey` – счётчик, изменение которого запускает повторную загрузку после ошибки.

Также `useState` используется в хуке `useTheme` для хранения текущей темы.

## 5. Где используется `useEffect`

В `DashboardPage` эффект запускается при открытии страницы (и при изменении `reloadKey`): вызывает `getDashboardData()`, и после получения ответа записывает данные в `state`. Если вместо данных пришла ошибка, в `state` записывается сообщение об ошибке. Функция очистки эффекта ставит флаг отмены, чтобы устаревший ответ не записался в состояние после размонтирования компонента или повторного запуска эффекта (в `React.StrictMode` эффекты в режиме разработки запускаются дважды).

В хуке `useTheme` эффект применяет выбранную тему к документу и сохраняет её в `localStorage`.

## 6. Команды запуска проекта

```bash
npm install
npm run dev
npm run build
```
