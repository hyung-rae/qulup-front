import { Box, Flex, Group, Overlay, Text, Title } from '@mantine/core'
import classes from './Hero.module.css'

const Hero = () => {
  return (
    <Flex align="center" justify="center" w={'100%'} h={'100vh'} className={classes.container}>
      <Overlay color="#000" backgroundOpacity={0.8} zIndex={98} />
      <Title order={1} className={classes.title}>
        고등수학 컨텐츠의 자존심
      </Title>
      <Group justify="center" w="100%" className={classes.sub_title}>
        <Title order={2} c="gray.6">
          퀄럽은 수학/수학교육 전공자로 구성된
          <Text span c="white" inherit order={1} mx={20}>
            수능수학컨텐츠 제작
          </Text>
          전문회사 입니다.
        </Title>
      </Group>
    </Flex>
  )
}

export default Hero
