import { Button } from "flowbite-react";
import React, { useContext } from "react";
import img from "../../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {

  const {newRegister} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    newRegister(data.email, data.password)
    .then(result => {
      const LoggedUser = result.user;
      console.log(LoggedUser);
      Swal.fire(
        'Yahh!',
        'You Account Create Successfully!',
        'success' 
      )
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

  return (
    <div className="login">
      <div className="flex flex-col md:flex-row">
        <div className="w-1/2 p-5">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="name"
                name="name"
                {...register("name", { required: true })}
                placeholder="Enter Your Name "
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />
              {errors.name && <span>This Name is required</span>}
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />
              {errors.email && <span>This email is required</span>}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                })}
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
         focus:bg-white focus:outline-none"
              />
              {errors.password?.type == "required" && (
                <span>This Password is required</span>
              )}
              {errors.password?.type == "minLength" && (
                <span> Password Must be 6 characters</span>
              )}
              {errors.password?.type == "maxLength" && (
                <span> Password no be a 20 characters</span>
              )}
              {errors.password?.type == "pattern" && (
                <span>
                  {" "}
                  Password Must have one uppercase and one lower case, one
                  Number and one special characters
                </span>
              )}
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Forgot Password?
              </a>
            </div>
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </form>
          <div className=" space-y-2">
            <h5 className=" text-orange-500 pt-2 font-medium text-base">
              Already registered?
              <Link to="/login">
                <span className="font-bold">Go to log in</span>
              </Link>{" "}
            </h5>
            <p>Or sign in with</p>
          </div>
        </div>
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
