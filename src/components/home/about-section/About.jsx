import { Flex, Group, Image, Text, Title } from '@mantine/core'
import { useRouter } from 'next/router'

const About = () => {
  const { basePath } = useRouter()
  return (
    <Flex direction="column" justify="space-evenly" w={'100%'} h={'80vh'}>
      <Flex direction="column" align="center" w="100%">
        <Image radius="md" w={'auto'} h={50} my={100} src={`${basePath}/images/logo.png`} alt={'logo'} />
        <Title order={3} c="gray.5" mb={30}>
          컨텐츠 연구팀
        </Title>
        <Title order={5} c="white" mb={10}>
          시대인재 출제 프리랜서, 전 대성, 메가스터디 출제 프리랜서, 현우진 공모 다수 수상
        </Title>
        <Title order={5} c="white">
          한석원 공모, 다수 강사 교재 제작 참여 및 출제, 출판 저자 출신, 강사 출신, 전원 수학/수학교육과
        </Title>
      </Flex>
      <Flex direction="column" align="center" w="100%">
        <Title order={3} c="gray.5" mb={30}>
          AI 개발팀
        </Title>
        <Title order={5} c="white" mb={10}>
          AI 플랫폼 개발 및 교육 컨첸츠 개발, NLP 및 Speech 국제 컨퍼런스 연구 게재
        </Title>
        <Title order={5} c="white">
          Sound, Vision, Multi-modal, Trustworthy AI 연구 프로젝트, 공기관 백엔드 개발 협력 다수, 전원
          컴퓨터공학과/인공지능학과(M.S)
        </Title>
      </Flex>
    </Flex>
  )
}

export default About
