"use client";
import {
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import ProfileIcon from "../../public/icons/header/profile.svg";
import LogoutIcon from "../../public/icons/header/logout.svg";

import DeleteIcon from "../../public/icons/header/delete.svg";
import { useAuthContext } from "@/context/contextAuth/contextAuth";
import { forwardRef } from "react";
import { userService } from "@/services/api";
import { ModalReusable } from "./reusableModel";

const ProfileMenu = forwardRef((props, ref) => {
  const { isLogged, disconnectUser, getToken } = useAuthContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const hanlderDeleteUser = async () => {
    await userService
      .delete({
        token: getToken(),
      })
      .then(() => disconnectUser());
    onClose();
  };

  return (
    <Menu>
      <MenuButton
        as={"button"}
        aria-label="Options"
        // icon={<ProfileIcon />}
        // variant="outline"
        // ref={ref} // Asegúrate de pasar la referencia aquí
      >
        <ProfileIcon />
      </MenuButton>
      {!isLogged ? (
        <MenuList className="fixed right-5 top-10 bg-black">
          <Link href="/auth/login">
            <MenuItem
              icon={<ProfileIcon />}
              className="bg-black text-white font-semibold"
            >
              Login
            </MenuItem>
          </Link>
          <Link href="/auth/sign-up">
            <MenuItem
              icon={<ProfileIcon />}
              className="bg-black text-white font-semibold"
            >
              Sign Up
            </MenuItem>
          </Link>
        </MenuList>
      ) : (
        <MenuList className="fixed right-5 top-10 bg-black">
          <Link href="/auth/profile">
            {" "}
            <MenuItem
              icon={<ProfileIcon />}
              className="bg-black text-white font-semibold"
            >
              Profile
            </MenuItem>
          </Link>
          <Link href="/auth/disconnect">
            <MenuItem
              icon={<LogoutIcon />}
              className="bg-black text-orange-400 font-semibold"
              onClick={disconnectUser}
            >
              Disconnect
            </MenuItem>
          </Link>
          <MenuItem
            icon={<DeleteIcon />}
            className="bg-black text-red-500 font-semibold"
            onClick={onOpen}
          >
            Delete account
          </MenuItem>
        </MenuList>
      )}
      <ModalReusable
        isOpen={isOpen}
        onClose={onClose}
        blueTitle="Cancelar"
        redTitle="Borrar"
        onActionRed={hanlderDeleteUser}
        title="Quiere borrar el usuario?"
      />
    </Menu>
  );
});

ProfileMenu.displayName = "ProfileMenu"; // Agrega displayName para facilitar la depuración

export default ProfileMenu;
