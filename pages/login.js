import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const login = () => {
  const { googleSignIn, user } = useAuth();
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();

    } catch(e) {
      console.log(e)
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form onSubmit={handleSignIn}>
                        <button className="btn btn-google btn-user btn-block">
                          <i className="fab fa-google fa-fw"></i> Login with
                          Google
                        </button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link href="signup">
                          <a className="small">Create an Account!</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default login