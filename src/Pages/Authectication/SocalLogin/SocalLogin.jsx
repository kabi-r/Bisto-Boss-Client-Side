import { Button } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocalLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { googleSingIn } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSingIn = () => {
    googleSingIn()
      .then((result) => {
        const LoggedUser = result.user;
        // console.log(LoggedUser.displayName);
        const saveUser = { name: LoggedUser.displayName, email: LoggedUser.email };
        // user login data backend
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {

            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="mx-auto flex gap-6 mt-2">
      <Button onClick={handleGoogleSingIn} color="gray" pill>
        <FaGoogle></FaGoogle>
      </Button>
      <Button color="gray" pill>
        <FaGithub></FaGithub>
      </Button>
      <Button color="gray" pill>
        <FaInstagram></FaInstagram>
      </Button>
    </div>
  );
};

export default SocalLogin;
