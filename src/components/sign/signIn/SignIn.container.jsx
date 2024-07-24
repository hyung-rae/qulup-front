import SignInUI from './SignIn.presenter'

const SignIn = ({ opened, onClose, handleLogin, onClickSignUp }) => {
  return <SignInUI opened={opened} onClose={onClose} handleLogin={handleLogin} onClickSignUp={onClickSignUp} />
}

export default SignIn
