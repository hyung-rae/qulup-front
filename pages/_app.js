import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dates/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from '@/theme'
import Layout from '@/src/components/layout/Layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
