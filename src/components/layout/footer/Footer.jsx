import { Box, Center, Container, Flex, Group, Image, Text } from '@mantine/core'

const Footer = () => {
  return (
    <footer>
      <Container fluid bg={'dark.7'} p="xl">
        <Group align="flex-start" justify="space-around">
          <Flex direction="column" gap={5}>
            <Image radius="md" w={80} src="/images/logo.png" alt={'logo'} />
            <Text c="white" fw={700} size="sm" mt={15}>
              (주)퀄럽
            </Text>
            <Text c="gray.5" size="xs">
              Specialized in Mathematical contents
            </Text>
            <Text c="gray.5" fw={700} size="xs" mt={10}>
              © 2024 QULUP All rights reserved.
            </Text>
          </Flex>
          <Flex direction="column" gap={5}>
            <Group justify="space-between">
              <Text c="gray.5" size="xs">
                대표자
              </Text>
              <Text c="white" fw={700} size="xs">
                진주환
              </Text>
            </Group>
            <Group justify="space-between">
              <Text c="gray.5" size="xs">
                개인정보 보호 책임자
              </Text>
              <Text c="white" fw={700} size="xs">
                진주환
              </Text>
            </Group>
            <Group justify="space-between">
              <Text c="gray.5" size="xs">
                사업자등록번호
              </Text>
              <Text c="white" fw={700} size="xs">
                285-88-02854
              </Text>
            </Group>
            <Group justify="space-between">
              <Text c="gray.5" size="xs">
                전화번호
              </Text>
              <Text c="white" fw={700} size="xs">
                010-6600-2694
              </Text>
            </Group>
            <Group justify="space-between">
              <Text c="gray.5" size="xs">
                통신판매업
              </Text>
              <Text c="white" fw={700} size="xs">
                2022-서울강남-03692
              </Text>
            </Group>
            <Group justify="space-between">
              <Text c="gray.5" size="xs">
                E-mail
              </Text>
              <Text c="white" fw={700} size="xs">
                ceo@qulup.co.kr
              </Text>
            </Group>
          </Flex>
        </Group>
      </Container>
    </footer>
  )
}

export default Footer
