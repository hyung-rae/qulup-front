import { Button } from '@mantine/core'
import GoogleIcon from './GoogleIcon'
import FacebookIcon from './FacebookIcon'
import classes from './SocialButton.module.css'
import NaverIcon from './NaverIcon'
import KaKaoIcon from './KaKaoIcon'

export const GoogleButton = props => {
  return <Button leftSection={<GoogleIcon />} variant="default" {...props} />
}

export const FacebookButton = props => {
  return <Button leftSection={<FacebookIcon />} className={classes.facebookButton} {...props} />
}

export const NaverButton = props => {
  return (
    <Button
      leftSection={<NaverIcon />}
      className={classes.naverButton}
      classNames={{ section: classes.section }}
      {...props}
    />
  )
}

export const KaKaoButton = props => {
  return (
    <Button
      leftSection={<KaKaoIcon />}
      className={classes.kakaoButton}
      classNames={{ section: classes.section }}
      {...props}
      c="black"
    />
  )
}
