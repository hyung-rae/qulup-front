import SignUpUI from './SignUp.presenter'
import { useDisclosure } from '@mantine/hooks'
import Terms from './Terms'

const SignUp = ({ opened, onClose }) => {
  const [termsOpened, { open, close }] = useDisclosure(false)
  return (
    <>
      <SignUpUI opened={opened} onClose={onClose} onClickTerms={open} />
      <Terms opened={termsOpened} onClose={close} />
    </>
  )
}

export default SignUp
