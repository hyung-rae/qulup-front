import { Box, Group, List, Stack, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

const AboutSection = () => {
  const matches = useMediaQuery('(max-width: 800px)')
  return (
    <Stack gap={40} justify="center" m={'auto'} maw={1400} align="flex-start" id="about" mih={'100vh'}>
      <Box>
        <Title order={1} c="white" fw={700}>
          QULUP
        </Title>
        <Text size="xl" my={30} c="dimmed" fw={700}>
          퀄럽은 수학/수학교육 전공자로 구성된 수능수학컨텐츠 제작 전문회사 입니다.
        </Text>
      </Box>

      <Stack w={'100%'} justify="flex-start" align="flex-start">
        <Group py={30} justify="flex-start" align="flex-start">
          <Title w={250} order={2} c={'white'}>
            컨텐츠 연구팀
          </Title>
          <List spacing="lg" size="xl" center maw={matches ? 300 : '100%'}>
            <List.Item c="white" fw={700} lh={1.5}>
              시대인재 출제 프리랜서, 전 대성, 메가스터디 출제 프리랜서, 현우진 공모 다수 수상
            </List.Item>
            <List.Item c="white" fw={700} lh={1.5}>
              한석원 공모, 다수 강사 교재 제작 참여 및 출제, 출판 저자 출신, 강사 출신, 전원 수학/수학교육과
            </List.Item>
          </List>
        </Group>
        <Group py={30} justify="flex-start" align="flex-start">
          <Title w={250} order={2} c="white">
            AI 개발팀
          </Title>
          <List spacing="lg" size="xl" center maw={matches ? 300 : '100%'}>
            <List.Item c="white" fw={700} lh={1.5}>
              AI 플랫폼 개발 및 교육 컨첸츠 개발, NLP 및 Speech 국제 컨퍼런스 연구 게재
            </List.Item>
            <List.Item c="white" fw={700} lh={1.5}>
              Sound, Vision, Multi-modal, Trustworthy AI 연구 프로젝트, 공기관 백엔드 개발 협력 다수, 전원
              컴퓨터공학과/인공지능학과(M.S)
            </List.Item>
          </List>
        </Group>
      </Stack>
    </Stack>
  )
}

export default AboutSection
