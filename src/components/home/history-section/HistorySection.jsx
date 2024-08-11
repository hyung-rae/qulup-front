import { Box, Container, Divider, Flex, Group, ScrollArea, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import classes from './History.module.css'
import { historyList } from './mock'

const HistorySection = () => {
  return (
    <Stack gap={40} justify="center" m={'auto'} maw={1400} align="flex-start" id="history" mih={'100vh'}>
      <Box>
        <Title order={1} c="white" fw={700}>
          History
        </Title>
        <Text size="xl" my={30} c="dimmed" fw={700}>
          연혁
        </Text>
      </Box>
      <ScrollArea
        maw={1400}
        w={'100%'}
        pb={50}
        scrollbars="x"
        scrollbarSize={10}
        classNames={classes}
        type="always"
        pos={'relative'}
      >
        <Divider variant="dashed" w={'100%'} size={'sm'} color={'gray.7'} pos={'absolute'} top={8} left={0} />
        <Group w={'100%'} wrap="no-wrap" gap={100} align="flex-start">
          {historyList.map(({ id, year, infoList }) => (
            <HistoryItem key={id} year={year} infoList={infoList} />
          ))}
        </Group>
      </ScrollArea>
    </Stack>
  )
}

export default HistorySection

const HistoryItem = ({ year, infoList }) => {
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
