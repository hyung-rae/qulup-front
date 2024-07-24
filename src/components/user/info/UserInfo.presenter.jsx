import { Box, Button, Checkbox, Flex, Group, Image, Input, Modal, PasswordInput } from '@mantine/core'
import { IconAt, IconBuilding, IconId, IconLock, IconPhone } from '@tabler/icons-react'

const UserInfoUI = () => {
  return (
    <Flex maw={350} direction={'column'} gap={20} m={'auto'} mt={50}>
      <Input.Wrapper>
        <Input size="sm" variant="filled" placeholder="이름" />
      </Input.Wrapper>
      <Input.Wrapper>
        <Input
          size="sm"
          variant="filled"
          leftSection={<IconAt style={{ width: 18, height: 18 }} stroke={1.5} />}
          placeholder="이메일"
          value={'asdgasdf@naver.com'}
          disabled
        />
      </Input.Wrapper>
      <PasswordInput
        size="sm"
        variant="filled"
        leftSection={<IconLock style={{ width: 18, height: 18 }} stroke={1.5} />}
        placeholder="비밀번호"
      />
      <PasswordInput
        size="sm"
        variant="filled"
        leftSection={<IconLock style={{ width: 18, height: 18 }} stroke={1.5} />}
        placeholder="비밀번호 재확인"
      />
      <Group>
        <Input.Wrapper style={{ flex: 1 }}>
          <Input
            size="sm"
            variant="filled"
            leftSection={<IconPhone style={{ width: 18, height: 18 }} stroke={1.5} />}
            placeholder="휴대폰 번호"
          />
        </Input.Wrapper>
        <Button size="sm">인증하기</Button>
      </Group>
      <Input.Wrapper>
        <Input
          size="sm"
          variant="filled"
          placeholder="학원 소속"
          leftSection={<IconBuilding style={{ width: 18, height: 18 }} stroke={1.5} />}
        />
      </Input.Wrapper>
      <Input.Wrapper>
        <Input
          size="sm"
          variant="filled"
          placeholder="강사명"
          leftSection={<IconId style={{ width: 18, height: 18 }} stroke={1.5} />}
        />
      </Input.Wrapper>
      <Group>
        <Input.Wrapper style={{ flex: 1 }}>
          <Input size="sm" variant="filled" placeholder="닉네임" />
        </Input.Wrapper>
        <Button size="sm">중복확인</Button>
      </Group>
      <Button color="dark">수정하기</Button>
    </Flex>
  )
}

export default UserInfoUI
