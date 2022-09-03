// import '../styles/globals.css'
import '../public/assets/css/sb-admin-2.min.css'
import Layout from '../Components/Layout'
import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
  <Layout>
    <Component {...pageProps} />
  </Layout>
    </AuthProvider>
  )
}

export default MyApp
