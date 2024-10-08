import { Flex, Overlay, Title } from '@mantine/core'
import { useRouter } from 'next/router'
import classes from './Hero.module.css'

const HeroSection = () => {
  const { basePath } = useRouter()
  return (
    <Flex
      id="hero"
      align="center"
      justify="center"
      w={'100%'}
      mih={'100vh'}
      className={classes.container}
      style={{ backgroundImage: `url(${basePath}/images/hero-section.jpg)` }}
    >
      <Overlay color="#000" backgroundOpacity={0.8} zIndex={98} />
      <Title className={classes.title}>고등수학 컨텐츠의 자존심</Title>
      <Flex justify="center" w="100%" gap={10} className={classes.sub_title_wrapper}>
        <Title c="gray.6" className={classes.sub_title}>
          퀄럽은 수학/수학교육 전공자로 구성된
        </Title>
        <Title c="white" className={classes.sub_title}>
          수능수학컨텐츠 제작
        </Title>
        <Title c="gray.6" className={classes.sub_title}>
          전문회사 입니다.
        </Title>
      </Flex>
    </Flex>
  )
}

export default HeroSection
