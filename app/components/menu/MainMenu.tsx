import React from "react";
import MenuCard from "./MenuCard";

const MainMenu = ({ menus }: any) => {
  console.log(menus);
  return (
    <>
      {menus?.map(
        (item: any, index: any) =>
          item.type === "MAIN DISH" && (
            <MenuCard key={item.id} data={item} index={index} />
          )
      )}
    </>
  );
};

export default MainMenu;
