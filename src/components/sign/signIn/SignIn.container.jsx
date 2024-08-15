import { useEffect } from 'react'
import SignInUI from './SignIn.presenter'

const SignIn = ({ ...props }) => {
  useEffect(() => {
    if (!props.opened) return
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    script.onload = () => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'homepage' }).then(token => {
          props.setToken(token)
        })
      })
    }

    return () => {
      document.body.removeChild(script)
      props.setToken('')
    }
  }, [props?.opened])

  return <SignInUI {...props} />
}

export default SignIn
