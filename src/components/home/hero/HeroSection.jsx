import { Overlay, Container, Title, Button, Text } from '@mantine/core'
import classes from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>고등수학 컨텐츠의 자존심</Title>
        <Text className={classes.description} size="xl" mt="xl">
          퀄럽은 수학/수학교육 전공자로 구성된 수능수학 컨텐츠제작 전문 회사입니다.
        </Text>
      </Container>
    </div>
  )
}

export default HeroSection
