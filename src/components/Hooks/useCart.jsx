import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxoisSecure from "./useAxoisSecure";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxoisSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    // queryFn: async() => {
    //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
    //       headers:{
    //         authorization:`bearer ${token}`
    //       }
    //     })
    // return res.json()
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  // console.log(cart);
  return [cart, refetch];
};

export default useCart;
