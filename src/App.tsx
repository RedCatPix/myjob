import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './app/paths.ts'
import AppLayout from './components/layout/AppLayout.tsx'
import AnalyticsPage from './pages/AnalyticsPage.tsx'
import ApplicationCreatePage from './pages/ApplicationCreatePage.tsx'
import ApplicationDetailsPage from './pages/ApplicationDetailsPage.tsx'
import ApplicationEditPage from './pages/ApplicationEditPage.tsx'
import ApplicationsPage from './pages/ApplicationsPage.tsx'
import CalendarPage from './pages/CalendarPage.tsx'
import DashboardPage from './pages/DashboardPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import SettingsPage from './pages/SettingsPage.tsx'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={ROUTES.dashboard} element={<DashboardPage />} />
        <Route path={ROUTES.applications} element={<ApplicationsPage />} />
        <Route path={ROUTES.applicationNew} element={<ApplicationCreatePage />} />
        <Route path={ROUTES.applicationDetails} element={<ApplicationDetailsPage />} />
        <Route path={ROUTES.applicationEdit} element={<ApplicationEditPage />} />
        <Route path={ROUTES.analytics} element={<AnalyticsPage />} />
        <Route path={ROUTES.calendar} element={<CalendarPage />} />
        <Route path={ROUTES.settings} element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
