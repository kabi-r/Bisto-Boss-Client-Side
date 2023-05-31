import { Button, Card } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../components/Hooks/useCart";

const OrderCard = ({ item }) => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [, refetch] = useCart()
  const { image, recipe, name, price, _id } = item;
  const handleAddToCart = (item) =>{
    // console.log(item);
    if(user && user.email){
      const orderItem = {foodId:_id, image, recipe, name, price, email:user.email }
      fetch('http://localhost:5000/carts',{
        method:'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body:JSON.stringify(orderItem)
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if(data.insertedId){
          refetch()
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Food added in the cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
        
      })
    }
    else{
      Swal.fire({
        title: 'Please Login to order to food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state:{from:location}})
        }
      })
    }
  }
  return (
    <div className="">
      <Card>
        <img src={image} alt="" />
        <p className="bg-slate-600 absolute ml-2 mb-2">${price}</p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{recipe}</p>
        <Button onClick={()=>handleAddToCart(item)}>Add to Cart</Button>
      </Card>
    </div>
  );
};

export default OrderCard;
