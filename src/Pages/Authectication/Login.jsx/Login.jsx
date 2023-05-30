import React, { useContext, useEffect, useRef, useState } from "react";
import "./Login.css";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import img from "../../../assets/others/authentication2.png";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const {singIn} = useContext(AuthContext)
  const nagivate = useNavigate()
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState("true");
  useEffect(() => {
    loadCaptchaEnginge("6");
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password)
    .then(result => {
      const LoggedUser = result.user;
      console.log(LoggedUser);
      Swal.fire(
        'Yahh!',
        'Successfully Login!',
        'success' 
      )
      nagivate('/')
    })
    .catch(error => {
      console.log(error.message);
      Swal.fire(
        'Yahh!',
        `${error.message}`,
        'success' 
      )
    })
  };
  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value, false)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <div className="login">
      <div className="flex flex-col md:flex-row">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="w-1/2 p-5">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
         focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">
                <LoadCanvasTemplate />
              </label>
              <input
                type="captcha"
                name="captcha"
                ref={captchaRef}
                onChange={handleCaptcha}
                placeholder="Type Here"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
         focus:bg-white focus:outline-none"
              />
              {/* <Button onClick={handleCaptcha}>asfff</Button> */}
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Forgot Password?
              </a>
            </div>

            {/* <button
              type="submit"
              disabled={disable}
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Log In
            </button> */}
            <Button disabled={disable} type="submit" className="w-full">
              Log In
            </Button>
          </form>
          <div className="text-center space-y-2">
            <h5 className="text-center text-orange-500 pt-2 font-medium text-base">
              New here?
              <Link to='/register'>
                <span className="font-bold">Create a New Account</span>
              </Link>{" "}
            </h5>
            <p>Or sign in with</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
