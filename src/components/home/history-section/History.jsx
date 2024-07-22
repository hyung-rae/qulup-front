import { Box, Container, Divider, Flex, Group, ScrollArea, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import classes from './History.module.css'
import { hisoryMock } from './history-mock'
const History = () => {
  return (
    <Container my={100} fluid>
      <Box maw={1000} m={'auto'}>
        <Title order={1} c="white" fw={700}>
          History
        </Title>
        <Text mt={10} mb={20} c="dimmed" fw={700}>
          연혁
        </Text>
      </Box>
      <ScrollArea
        maw={1400}
        m={'auto'}
        pb={50}
        scrollbars="x"
        scrollbarSize={10}
        classNames={classes}
        type="always"
        pos={'relative'}
      >
        <Divider variant="dashed" w={'100%'} size={'sm'} color={'gray.7'} pos={'absolute'} top={8} left={0} />
        <Group w={'100%'} wrap="no-wrap" gap={100}>
          {hisoryMock.map(({ id, year, infoList }) => (
            <HisoryItem key={id} year={year} infoList={infoList} />
          ))}
        </Group>
      </ScrollArea>
    </Container>
  )
}

export default History

const HisoryItem = ({ year, infoList }) => {
  return (
    <Group align="flex-start" gap={30} miw={350} pt={30} pl={10} wrap="no-wrap" pos={'relative'}>
      <Box w={18} h={18} pos={'absolute'} top={0} left={0} bg={'dark.8'} style={{ borderRadius: '50%' }} />

      <Title order={3} fw={700} c="white">
        {year}
      </Title>
      <Flex direction={'column'} gap={30}>
        {infoList.map((info, i) => (
          <Stack key={i} gap={3}>
            <Text c={'dimmed'} fw={700} size="sm">
              {info.month}
            </Text>
            <Text size="sm" c={'white'}>
              {info.content}
            </Text>
          </Stack>
        ))}
      </Flex>
    </Group>
  )
}
