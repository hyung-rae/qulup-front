import { AppShell, Group, Image, rem } from '@mantine/core'
import { useHeadroom } from '@mantine/hooks'
import Header from './header/Header'
import Footer from './footer/Footer'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const { pathname } = useRouter()
  const pinned = useHeadroom({ fixedAt: 120 })

  return (
    <AppShell header={{ height: 70, collapsed: !pinned, offset: false }} padding="md">
      <AppShell.Header bg={'black'} withBorder={false}>
        <Header />
      </AppShell.Header>
      <AppShell.Main bg={pathname === '/' ? '#191919' : 'white'} pt={`calc(${rem(70)} + var(--mantine-spacing-md))`}>
        {children}
      </AppShell.Main>
      <Footer />
    </AppShell>
  )
}

export default Layout
