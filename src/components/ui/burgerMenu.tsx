"use client";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import BurguerMenu from "../../public/icons/header/burgerMenu.svg";
import { states } from "@/utils/consts";
import { useFilterContext } from "@/context/filterContext/filterContext";

const BurgerMenu = () => {
  const { setStatePlaceSelected } = useFilterContext();
  return (
    <Menu>
      <MenuButton as={"button"} aria-label="Options" style={{ zIndex: 1000 }}>
        <BurguerMenu />
      </MenuButton>
      <MenuList
        className="fixed left-5 top-10 bg-black"
        style={{ maxHeight: "200px", overflowY: "auto" }}
      >
        {states.map((state, index) => (
          <MenuItem
            key={index}
            className="bg-black text-white "
            onClick={() => setStatePlaceSelected(state)}
          >
            {state}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

BurgerMenu.displayName = "BurgerMenu"; // Agregar displayName para facilitar la depuración

export default BurgerMenu;
