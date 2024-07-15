import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dates/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from '@/theme'
import Layout from '@/src/components/layout/Layout'

const App = ({ Component, pageProps }) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  )
}

export default App
