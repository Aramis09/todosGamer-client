"use client";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import BurguerMenu from "../../public/icons/header/burgerMenu.svg";
import { forwardRef } from "react";
import { states } from "@/utils/consts";
import { useFilterContext } from "@/context/filterContext/filterContext";

const BurgerMenu = forwardRef((props, ref) => {
  const { setStatePlaceSelected } = useFilterContext();
  return (
    <Menu>
      <MenuButton
        as={undefined}
        aria-label="Options"
        icon={<BurguerMenu />}
        style={{ zIndex: 1000 }}
        variant=""
        ref={ref} // Pasar la referencia aquí
      />
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
});

BurgerMenu.displayName = "BurgerMenu"; // Agregar displayName para facilitar la depuración

export default BurgerMenu;
