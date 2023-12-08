import { cn } from "@/lib/utils";
import React from "react";
import { Instagram } from "lucide-react";

const Footer = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col bg-slate-200 gap-2", className)}>
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Ми в соціальних мережах</h2>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/sweetqueen.lutsk">
            <Instagram className="hover:stroke-accent" width={30} height={30} />
          </a>
        </div>
      </div>
      <span className="text-secondary-foreground">
        &#0169; Sweetqueen 2022-2023 Усі права захищено
      </span>

      <span className="font-bold text-lg">Контакти для зв'язку:</span>
      <a href="tel:+380995546283" className="text-3xl font-bold">
        +38 (099) 554-62-83
      </a>
      <a
        href="mailto:westlaserlutsk@gmail.com"
        className="text-3xl font-bold break-words"
        target="_blank"
        rel="noreferrer"
      >
        westlaserlutsk@gmail.com
      </a>
    </div>
  );
};

export default Footer;
