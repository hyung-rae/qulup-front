import { AppShell, rem } from '@mantine/core'
import { useHeadroom } from '@mantine/hooks'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = ({ children }) => {
  const pinned = useHeadroom({ fixedAt: 120 })

  return (
    <AppShell header={{ height: 90, collapsed: !pinned, offset: false }}>
      <AppShell.Header withBorder={true}>
        <Header />
      </AppShell.Header>
      <AppShell.Main pt={90}>{children}</AppShell.Main>
      <Footer />
    </AppShell>
  )
}

export default Layout
