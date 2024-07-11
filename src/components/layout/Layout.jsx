import { AppShell, Group, Image, rem } from '@mantine/core'
import { useHeadroom } from '@mantine/hooks'
import Header from './header/Header'

const Layout = ({ children }) => {
  const pinned = useHeadroom({ fixedAt: 120 })

  return (
    <AppShell header={{ height: 60, collapsed: !pinned, offset: false }} padding="md">
      <AppShell.Header bg={'dark'}>
        <Header />
      </AppShell.Header>

      <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>{children}</AppShell.Main>
    </AppShell>
  )
}

export default Layout
