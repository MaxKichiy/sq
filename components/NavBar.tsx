"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SheetClose } from "./ui/sheet";
import { toast } from "./ui/use-toast";

export const links = [
  {
    name: "ГОЛОВНА",
    href: "/",
  },

  {
    name: "КОНТАКТИ",
    href: "/contacts",
  },
  {
    name: "ДОСТАВКА І ОПЛАТА",
    href: "/delivery",
  },
];

export type linkType = (typeof links)[number];

const NavBar = ({
  className,
  forSideBar = false,
}: {
  className?: string;
  forSideBar?: boolean;
}) => {
  const path = usePathname();
  const renderLink = (link: linkType) => (
    <Link
      href={link.href}
      key={link.name}
      className={cn("hover:opacity-90", {
        "text-accent font-bold": path === link.href,
      })}
    >
      {link.name}
    </Link>
  );

  const renderSidebar = forSideBar
    ? (link: linkType) => (
        <SheetClose asChild key={link.name}>
          {renderLink(link)}
        </SheetClose>
      )
    : (link: linkType) => renderLink(link);

  return (
    <nav className={className}>{links.map((link) => renderSidebar(link))}</nav>
  );
};

export default NavBar;
