import { Button, Flex, Group, Input, Paper, PasswordInput } from '@mantine/core'
import { IconAt, IconBuilding, IconId, IconLock, IconPhone } from '@tabler/icons-react'

const UserInfoUI = props => {
  const { user, handleSubmit, form } = props

  return (
    <Group w={'100%'}>
      <Flex miw={600} maw={800} m={'auto'} h={'100%'} align={'center'} justify={'center'}>
        <Flex direction={'column'} gap={20}>
          <Input.Wrapper style={{ flex: 1 }}>
            <Input
              value={user?.id}
              size="md"
              variant="filled"
              leftSection={<IconAt style={{ width: 18, height: 18 }} stroke={1.5} />}
              placeholder="이메일"
              readOnly
            />
          </Input.Wrapper>
          <Group>
            <Input.Wrapper style={{ flex: 1 }}>
              <Input {...form.getInputProps('nickname')} size="md" variant="filled" placeholder="닉네임" />
            </Input.Wrapper>
            <Button size="md">중복확인</Button>
          </Group>
          <PasswordInput
            {...form.getInputProps('password')}
            size="md"
            variant="filled"
            leftSection={<IconLock style={{ width: 18, height: 18 }} stroke={1.5} />}
            placeholder="비밀번호"
          />
          <PasswordInput
            {...form.getInputProps('confirmPassword')}
            size="md"
            variant="filled"
            leftSection={<IconLock style={{ width: 18, height: 18 }} stroke={1.5} />}
            placeholder="비밀번호 재확인"
          />
          <Group>
            <Input.Wrapper style={{ flex: 1 }}>
              <Input
                {...form.getInputProps('phone')}
                size="md"
                variant="filled"
                leftSection={<IconPhone style={{ width: 18, height: 18 }} stroke={1.5} />}
                placeholder="휴대폰 번호"
              />
            </Input.Wrapper>
            <Button size="md">인증하기</Button>
          </Group>

          <Input.Wrapper>
            <Input
              value={user?.academyNm}
              size="md"
              variant="filled"
              placeholder="학원 소속"
              leftSection={<IconBuilding style={{ width: 18, height: 18 }} stroke={1.5} />}
              readOnly
            />
          </Input.Wrapper>
          <Input.Wrapper style={{ flex: 1 }}>
            <Input
              value={user?.nm}
              size="md"
              variant="filled"
              placeholder="강사명"
              leftSection={<IconId style={{ width: 18, height: 18 }} stroke={1.5} />}
              readOnly
            />
          </Input.Wrapper>

          <Button color="dark" size="md" fullWidth onClick={handleSubmit}>
            수정하기
          </Button>
        </Flex>
      </Flex>
    </Group>
  )
}

export default UserInfoUI
