import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/global.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
