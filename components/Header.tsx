import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import CartIcon from "./icons/Cart";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DashboardOutline from "./icons/DashboardOutline";
import DashboardFill from "./icons/DashboardFill";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-secondary max-h-[60px] h-full">
      <div className="flex gap-3 items-center flex-grow">
        <div className="block sm:hidden">
          <Sheet>
            <Button variant="ghost" size="icon" asChild>
              <SheetTrigger>
                <Menu className="hover:fill-accent" />
              </SheetTrigger>
            </Button>
            <SheetContent side="left" className="flex flex-col gap-3">
              <SheetHeader className="flex bg-secondary pl-4 max-h-[60px] h-full">
                <SheetTitle className="flex my-auto items-center gap-3">
                  <Link href="/">
                    <Image src="/logo.png" alt="logo" width={50} height={50} />
                  </Link>
                  <span className="bold text-xl sm:text-3xl text-wrap">
                    SWEET QUEEN
                  </span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col mx-4 gap-4 mb-auto">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage alt="Mark Walberg" />
                    <AvatarFallback>MW</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-secondary-foreground">
                    <span>Mark Walberg</span>
                    <span>example@gmail.com</span>
                  </div>
                </div>
                <Button className="flex justify-between group w-full">
                  <DashboardOutline className="block group-hover:hidden" />
                  <DashboardFill className="hidden  group-hover:block" />
                  <span className="grow">КАТАЛОГ ТОВАРІВ</span>
                </Button>
                <NavBar className="flex flex-col gap-3" forSideBar />
                <Button className="flex justify-between group w-full">
                  <span className="grow">ЗАМОВИТИ ПОРІЗКУ</span>
                </Button>
              </div>
              <Footer className="p-4" />
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </Link>
        <NavBar className="gap-3 hidden sm:flex md:ml-10" />
      </div>
      <div className="flex gap-3 items-center">
        <Button>
          <span className="font-bold">ЗАМОВИТИ ПОРІЗКУ</span>
        </Button>
        <Button size="icon" variant="ghost">
          <div className="relative inline-flex items-center p-1">
            <CartIcon />
            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-accent-foreground bg-accent border-2 border-accent-foreground rounded-full -top-2 -end-2 dark:border-gray-900">
              444
            </div>
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Header;
