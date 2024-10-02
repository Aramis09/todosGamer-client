"use client";
import Notifications from "../../public/icons/header/notifications.svg";

import BurgerMenu from "../ui/burgerMenu";
import ProfileMenu from "../ui/profileMenu";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full py-3 fixed top-0 px-5 z-40 ">
      <BurgerMenu />
      <div className="flex-grow"></div>
      <div className="flex justify-center items-center gap-5 w-50 ml-auto">
        <Notifications />
        <ProfileMenu />
      </div>
    </header>
  );
}
