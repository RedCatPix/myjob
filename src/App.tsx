import AppHeader from './components/layout/AppHeader.tsx'
import { useTheme } from './hooks/useTheme.ts'
import DashboardPage from './pages/DashboardPage.tsx'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <AppHeader theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <DashboardPage />
      </main>
    </>
  )
}

export default App
