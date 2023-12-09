import { FC, Suspense } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Typography } from 'antd'
import { NavigationMenu } from '@/widgets/NavigationMenu/navigationMenu'
import { useAuth } from '@/app/context/auth/context'
import { ErrorBoundary } from '@/features/ErrorBoundary/errorBoundary'
import logoutIcon from '@/shared/assets/logout.svg'

export const MainLayout: FC = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth?.logOut()
    navigate('/auth')
  }

  return <>
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', margin: '0 50px', borderBottom: '1px solid #eee' }}>
      <Typography.Title level={2} style={{ marginTop: '7px' }}>Rick And Morty</Typography.Title>
      <NavigationMenu />
      <img src={logoutIcon} alt="Logout" onClick={handleLogout} style={{ cursor: 'pointer', position: 'absolute', right: 50, top: 20, height: 30 }} />
    </div>
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Suspense fallback={<Typography.Title level={3} style={{ marginTop: '7px' }}>Loading...</Typography.Title>}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </Suspense>
    </div>
  </>
}

