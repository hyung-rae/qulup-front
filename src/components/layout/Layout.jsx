import { AppShell, rem } from '@mantine/core'
import { useHeadroom } from '@mantine/hooks'
import Footer from './footer/Footer'
import { useRouter } from 'next/router'
import Header from './header/Header.container'

const Layout = ({ children }) => {
  const pinned = useHeadroom({ fixedAt: 120 })
  const { pathname } = useRouter()

  return (
    <AppShell header={{ height: 90, collapsed: !pinned, offset: false }}>
      <AppShell.Header withBorder={false}>
        <Header />
      </AppShell.Header>
      <AppShell.Main pt={90} bg={pathname === '/' ? 'dark' : 'gray.3'}>
        {children}
      </AppShell.Main>
      <Footer />
    </AppShell>
  )
}

export default Layout
