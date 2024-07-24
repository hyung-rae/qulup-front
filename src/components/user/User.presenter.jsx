import { Box, Container, Grid, Group, NavLink, Stack } from '@mantine/core'

const UserUI = ({ menu, active, onClickMenu, children }) => {
  return (
    <Container maw={1400} fluid py={'lg'}>
      <Group align="flex-start" wrap="no-wrap">
        <Box bg={'gray.3'} miw={250}>
          <Stack gap={10}>
            {menu.map(item => (
              <NavLink
                key={item.id}
                active={item.id === active}
                label={item.label}
                leftSection={item.icon}
                onClick={() => onClickMenu(item.id)}
                color="dark"
                style={{ borderRadius: 4 }}
              />
            ))}
          </Stack>
        </Box>
        <Box style={{ flex: 1 }}>{children}</Box>
      </Group>
    </Container>
  )
}

export default UserUI
