import React, { useState } from "react";
import Cover from "../../Share/Cover/Cover";
import coverImage from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../components/Hooks/useMenu";
import OrderTabs from "../OrderTabs/OrderTabs";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
  return (
    <div>
      <Cover image={coverImage} title="OUR SHOP"></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>SOUPS</Tab>
        <Tab>desserts</Tab>
        <Tab>drinks</Tab>
      </TabList>
      <TabPanel>
        <OrderTabs items={salad} ></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs items={pizza} ></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs items={soup} ></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs items={desserts} ></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs items={drinks} ></OrderTabs>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default Order;
