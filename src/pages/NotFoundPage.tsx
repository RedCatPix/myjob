import { House } from 'lucide-react'
import { ROUTES } from '../app/paths.ts'
import PageHeader from '../components/layout/PageHeader.tsx'
import ButtonLink from '../components/ui/ButtonLink.tsx'

function NotFoundPage() {
  return (
    <PageHeader
      title="Страница не найдена"
      description="Такого адреса нет в приложении. Возможно, ссылка устарела или в адресе допущена опечатка."
    >
      <ButtonLink to={ROUTES.dashboard} icon={<House size={18} aria-hidden="true" />}>
        Вернуться на главную
      </ButtonLink>
    </PageHeader>
  )
}

export default NotFoundPage
