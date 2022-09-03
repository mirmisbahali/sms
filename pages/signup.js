import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { googleSignIn, user } = useAuth();
  const router = useRouter();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, []);

  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                {/* <form className="user"> */}
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-google btn-user btn-block"
                >
                  <i className="fab fa-google fa-fw"></i> Register with Google
                </button>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
