"use client";
import Notifications from "../../public/icons/header/notifications.svg";

import BurgerMenu from "../ui/burgerMenu";
import ProfileMenu from "../ui/profileMenu";

export default function Header() {
  return (
    <header className="flex justify-between w-full py-3 fixed top-0 px-5 z-10">
      <BurgerMenu />
      <div className="flex justify-center items-center gap-8">
        <Notifications />
        <ProfileMenu />
      </div>
    </header>
  );
}
