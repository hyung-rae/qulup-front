import { AppShell, Button, Group, rem, Text } from '@mantine/core'
import { useHeadroom } from '@mantine/hooks'
import { MantineLogo } from '@mantinex/mantine-logo'

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe molestiae nobis necessitatibus laboriosam officia, reprehenderit, earum fugiat?'

const Layout = ({ children }) => {
  const pinned = useHeadroom({ fixedAt: 120 })

  return (
    <AppShell header={{ height: 60, collapsed: !pinned, offset: false }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>

      <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>{children}</AppShell.Main>
    </AppShell>
  )
}

export default Layout
