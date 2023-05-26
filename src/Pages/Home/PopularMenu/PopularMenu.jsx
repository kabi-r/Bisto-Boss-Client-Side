import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menu from "../../../components/MenuItem/MenuItem";
import { Button } from "flowbite-react";
import useMenu from "../../../components/Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const Popular = menu.filter((item) => item.category === 'popular')
  return (
    <div className="mb-16">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 my-8">
        {Popular.map((item) => (
          <Menu item={item} key={item._id}></Menu>
        ))}
      </div>
      <Button className="text-center mx-auto" hover:color="dark">
        sfa
      </Button>
    </div>
  );
};

export default PopularMenu;
