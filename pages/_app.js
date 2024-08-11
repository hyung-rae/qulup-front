import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dates/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from '@/theme'
import Layout from '@/src/components/layout/Layout'
import { RecoilRoot } from 'recoil'

const App = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </RecoilRoot>
  )
}

export default App
