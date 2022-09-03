// import '../styles/globals.css'
import "../public/assets/css/sb-admin-2.min.css";
import Layout from "../Components/Layout";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../Components/ProtectedRoute";
import { useRouter } from "next/router";

const noAuthRequired = ["/login", "/signup"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component key={router.asPath} {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Layout>
            <Component key={router.asPath} {...pageProps} />
          </Layout>
        </ProtectedRoute>
      )}
    </AuthProvider>
  );
}

export default MyApp;
