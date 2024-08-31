import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dates/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from '@/theme'
import Layout from '@/src/components/layout/Layout'
import { RecoilRoot } from 'recoil'
import AuthProvider from '@/src/provider/AuthProvider'

const App = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </MantineProvider>
    </RecoilRoot>
  )
}

export default App
