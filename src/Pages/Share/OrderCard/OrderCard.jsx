import { Button, Card } from "flowbite-react";
import React from "react";

const OrderCard = ({ item }) => {
  const { image, recipe, name, price } = item;
  return (
    <div className="max-w-sm max-h-screen">
      <Card>
        <img src={image} alt="" />
        <p className="bg-slate-600 absolute ml-2 mb-2">${price}</p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{recipe}</p>
        <Button>Add to Cart</Button>
      </Card>
    </div>
  );
};

export default OrderCard;
