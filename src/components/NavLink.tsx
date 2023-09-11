"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }: { href: string; children: string }) => {
  const pathname = usePathname();
  return (
    <a
      className={classNames(
        "font-nexa w-[100px] text-center block underline-offset-8 px-2 py-2",
        pathname === href &&
          "underline border-primary border-[1px] text-primary hover:bg-slate-800/70"
      )}
      href={href}
    >
      {children}
    </a>
  );
};

export default NavLink;
