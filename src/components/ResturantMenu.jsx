import React from "react";
import { useEffect } from "react";
import { fetchData } from "../utils/utils";
import { MenuApi } from "../utils/constants";

const ResturantMenu = () => {
  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    await fetchData(MenuApi);
  };
  return (
    <div className="menu">
      <h1>Name of Resturant </h1>
      <h2>Menu</h2>
      <ul>
        <li>Briyani</li>
        <li>Burgers</li>
        <li>COod drinks</li>
      </ul>
    </div>
  );
};

export default ResturantMenu;
