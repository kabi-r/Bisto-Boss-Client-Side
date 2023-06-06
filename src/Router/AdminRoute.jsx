import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAdmin from "../components/Hooks/useAdmin";
import { Progress } from "flowbite-react";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Progress progress={45} />
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;