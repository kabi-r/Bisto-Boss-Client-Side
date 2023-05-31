import React, { useContext } from "react";
import {
    useQuery,
  } from '@tanstack/react-query'
import { useCallback } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const useCart = () => {
    const {user} = useContext(AuthContext)
  const { refetch,  data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async() => {
        const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
        return res.json()
    }
});
// console.log(cart);
return [cart, refetch]
};

export default useCart;
