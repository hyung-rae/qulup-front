import { Box, Container, Group, List, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { useRouter } from 'next/router'
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react'

const About = () => {
  const { basePath } = useRouter()
  return (
    <Container my={100} size="lg">
      <Box maw={1000} m={'auto'}>
        <Title order={1} c="white" fw={700}>
          QULUP
        </Title>
        <Text mt={10} mb={40} c="dimmed" fw={700}>
          퀄럽은 수학/수학교육 전공자로 구성된 수능수학컨텐츠 제작 전문회사 입니다.
        </Text>
      </Box>

      <Stack maw={1000} m={'auto'}>
        <Group h={80} justify="flex-start" align="flex-start">
          <Title w={150} order={5} c="white">
            컨텐츠 연구팀
          </Title>
          <List spacing="xs" size="sm" center>
            <List.Item c="white" fw={700}>
              시대인재 출제 프리랜서, 전 대성, 메가스터디 출제 프리랜서, 현우진 공모 다수 수상
            </List.Item>
            <List.Item c="white" fw={700}>
              한석원 공모, 다수 강사 교재 제작 참여 및 출제, 출판 저자 출신, 강사 출신, 전원 수학/수학교육과
            </List.Item>
          </List>
        </Group>
        <Group h={80} justify="flex-start" align="flex-start">
          <Title w={150} order={5} c="white">
            AI 개발팀
          </Title>
          <List spacing="xs" size="sm" center>
            <List.Item c="white" fw={700}>
              AI 플랫폼 개발 및 교육 컨첸츠 개발, NLP 및 Speech 국제 컨퍼런스 연구 게재
            </List.Item>
            <List.Item c="white" fw={700}>
              Sound, Vision, Multi-modal, Trustworthy AI 연구 프로젝트, 공기관 백엔드 개발 협력 다수, 전원
              컴퓨터공학과/인공지능학과(M.S)
            </List.Item>
          </List>
        </Group>
      </Stack>
    </Container>
  )
}

export default About
