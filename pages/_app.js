// import '../styles/globals.css'
import '../public/assets/css/sb-admin-2.min.css'
import Layout from '../Components/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
