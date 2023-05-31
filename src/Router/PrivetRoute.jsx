import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { Progress } from "flowbite-react";
import { AuthContext } from "../Providers/AuthProviders";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Progress progress={45} />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;