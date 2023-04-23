import '../styles/globals.css'
import Layout from './layout'
import { RecoilRoot } from 'recoil'
import DontFound from './404'

function MyApp({ Component, pageProps }) {
  return(
   
  <RecoilRoot>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </RecoilRoot>
 
  ) 
}

export default MyApp
