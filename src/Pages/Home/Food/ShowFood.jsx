import { Button, Card } from "flowbite-react";
import React from "react";

const ShowFood = ({ food }) => {
  const { image, recipe, name } = food;
  return (
    <div className="max-w-sm">
      <Card imgSrc={image}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {recipe}
        </p>
        <Button>Add to Cart</Button>
      </Card>
    </div>
  );
};

export default ShowFood;
