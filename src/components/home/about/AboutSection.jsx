import { Box, Container, Flex, List, ThemeIcon, Title, rem } from '@mantine/core'
import { IconCircleCheck } from '@tabler/icons-react'

const AboutSection = () => {
  return (
    <Flex justify={'center'} id="about" my={60}>
      <Flex direction={'column'} gap={50}>
        <Box>
          <Title order={2}>컨텐츠 연구팀 Y,S,I,C,L,K,J,H</Title>
          <List
            spacing="xs"
            size="xl"
            mt={30}
            center
            icon={
              <ThemeIcon size={24} radius="xl">
                <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <List.Item>시대인재 출제 프리랜서, 전 대성, 메가스터디 출제 프리랜서, 현우진 공모 다수 수상</List.Item>
            <List.Item>
              한석원 공모, 다수 강사 교재 제작 참여 및 출제, 출판 저자 출신, 강사 출신, 전원 수학/수학교육과
            </List.Item>
          </List>
        </Box>

        <Box>
          <Title order={2}>AI 개발팀 D,G,B</Title>
          <List
            spacing="xs"
            size="xl"
            mt={30}
            center
            icon={
              <ThemeIcon size={24} radius="xl">
                <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <List.Item>AI 플랫폼 개발 및 교육 컨텐츠 개발, NLP 및 Speech, 국제 컨퍼런스 연구게재</List.Item>
            <List.Item>
              Sound, Vision, Multi-modal, Trustworthy AI 연구 프로젝트, 공기관 백앤드 개발 협력 다수, 전원 컴퓨터공학과
              / 인공지능학과(M.S.)
            </List.Item>
          </List>
        </Box>
      </Flex>
    </Flex>
  )
}

export default AboutSection
