import { Carousel } from '@mantine/carousel'
import { Container, Flex, Group, Text, Title } from '@mantine/core'
import classes from './Project.module.css'

const ProjectUI = () => {
  return (
    <Container mt={120}>
      <Carousel loop slideSize="100%" slideGap="xs" controlSize={19} withIndicators>
        {/* 月 100 LEASE SYSMTE */}
        <Carousel.Slide shadow="xs" radius="md" className={classes.card}>
          <Text c="white" fw={700} size="xl">
            月 100 LEASE SYSMTE
          </Text>
          <Flex direction={'column'} gap={10} align="center">
            <Text c="white" fw={700} size="sm">
              판매가의 10%로 1년 간 컨텐츠를 LEASE 해드립니다.
            </Text>
            <Text c="gray.5" fw={700} size="sm">
              저렴한 가격으로 고퀄리티 컨텐츠를 강의에 활용하여
            </Text>
            <Text c="white" fw={700} size="sm">
              성장하실 강사님과 저희가 윈윈할 수 있는 시스템을 제안합니다.
            </Text>
            <Text c="gray.5" fw={700} size="sm">
              매달 100문항 업데이트 예정이며
            </Text>
            <Text c="gray.5" fw={700} size="sm">
              강사님이 강의하시는 지역/학원이
            </Text>
            <Text c="gray.5" fw={700} size="sm">
              겹치지 않게 독립적으로 이용하실 수 있습니다.
            </Text>
          </Flex>

          <Flex direction={'column'} gap={10} align="center">
            <Title order={3} className={classes.title}>
              기본 가격 [공통, 확률과 통계, 미적분]
            </Title>
            <Group justify="space-between">
              <Text c="gray.5" fw={700} size="md">
                15, 22, 30
              </Text>
              <Text c="white" fw={700} size="md">
                7 만원
              </Text>
            </Group>
            <Group justify="space-between">
              <Text c="gray.5" fw={700} size="md">
                14, 21, 29
              </Text>
              <Text c="white" fw={700} size="md">
                5 만원
              </Text>
            </Group>
            <Group justify="space-between">
              <Text c="gray.5" fw={700} size="md">
                12~13, 20, 28
              </Text>
              <Text c="white" fw={700} size="md">
                3 만원
              </Text>
            </Group>
            <Group justify="space-between">
              <Text c="gray.5" fw={700} size="md">
                9~11, 26~27
              </Text>
              <Text c="white" fw={700} size="md">
                2 만원
              </Text>
            </Group>
            <Text c="gray.7" fw={700} size="xs">
              • 문항의 최종 가격은 (기본 가격)*(자체고유평가 점수) 를 반영하여 계산합니다.
            </Text>
          </Flex>
        </Carousel.Slide>
        {/* 모의고사 제작 / 교재 / 변형문항 제작 */}
        <Carousel.Slide shadow="xs" radius="md" className={classes.card}>
          <Text c="white" fw={700} size="xl">
            모의고사 제작 / 교재 / 변형문항 제작
          </Text>
          <Flex direction={'column'} gap={10} align="center">
            <Text c="gray.5" fw={700} size="sm">
              다년 간 모의고사/교재 제작 외주 경험을 바탕으로
            </Text>
            <Text c="white" fw={700} size="sm">
              강사님께 꼭 필요한 컨텐츠를 DESIGN 해드립니다.
            </Text>
            <Text c="gray.5" fw={700} size="sm">
              문항은 LEASE SYSTEM의 문항과 중복되지 않습니다.
            </Text>
          </Flex>

          <Flex direction={'column'} gap={10} align="center">
            <Title order={3} className={classes.title}>
              교재 및 변형문항 & 모의고사 제작
            </Title>
            <Text c="gray.5" fw={700} size="md">
              교재 및 문항 변형
            </Text>
            <Text c="gray.5" fw={700} size="md">
              모의고사 1세트 (미적분 & 확통) 제작
            </Text>
            <Text c="gray.5" fw={700} size="md">
              핵심문항 세트제작
            </Text>
            <Text c="gray.5" fw={700} size="md">
              (12, 13, 14, 15, 20, 21, 22, 27, 28, 29, 30)
            </Text>
          </Flex>
        </Carousel.Slide>
      </Carousel>
    </Container>
  )
}

export default ProjectUI
