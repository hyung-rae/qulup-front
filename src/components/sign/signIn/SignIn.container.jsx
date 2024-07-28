import SignInUI from './SignIn.presenter'

const SignIn = ({ opened, onClose, handleLogin, onClickSignUp, onClickFind }) => {
  return (
    <SignInUI
      opened={opened}
      onClose={onClose}
      handleLogin={handleLogin}
      onClickSignUp={onClickSignUp}
      onClickFind={onClickFind}
    />
  )
}

export default SignIn
