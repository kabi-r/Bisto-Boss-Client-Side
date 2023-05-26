import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState([])
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) =>setMenu(data));
  },[]);
  return [menu,loading]
}

export default useMenu;