import LoginLogo from "../components/LoginLogo";
import LoginTwinkles from "../components/LoginTwinkles";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

function Login() {
  const [login, setLogin] = useLocalStorage<boolean>("isLoggedIn");
  const navigate = useNavigate();

  return (
    <>
      <div className=" bg-linear-to-t from-blue to-black to-90% h-screen">
        <div className="flex justify-center">
          <LoginTwinkles />
        </div>
        <div className="flex justify-center">
          <div className="bg-black px-60 pt-20 pb-9 rounded-3xl">
            <div className="flex justify-center pb-1">
              <LoginLogo className="fill-lightblue" />
            </div>
            <div>
              <p className="flex justify-center text-pink">
                a break from reality
              </p>
            </div>
            <div className="pt-15">
              <p className="flex justify-center border-2 border-lightblue rounded-sm text-gray-700 p-1.5">
                Username
              </p>
            </div>
            <div className="pt-7">
              <p className="flex justify-center border-2 border-lightblue rounded-sm text-gray-700 p-1.5">
                Password
              </p>
            </div>
            <div className="pt-10 px-1">
              <p
                onClick={() => {
                  setLogin(true);
                  navigate("/");
                }}
                className="flex justify-center bg-lightblue rounded-full text-black p-1.5"
              >
                Log In
              </p>
              <div className="flex justify-center pt-15">
                <p className="text-gray-700">Don't have an account?</p>
                <p className="text-pink">Sign up here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
