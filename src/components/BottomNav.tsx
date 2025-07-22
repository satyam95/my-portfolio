"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Work", path: "/work" },
    { label: "Playground", path: "/playground" },
    { label: "Contact", path: "/#footercontact" },
  ];

  return (
    <div className="fixed left-0 right-0 bottom-0 z-20">
      <nav className="w-full py-3 backdrop-blur-sm flex justify-center">
        <div className="bg-white rounded-3xl shadow-xl/30 p-0.5 flex items-center">
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className={`max-w-fit py-1.5 h-[42px] flex justify-center items-center rounded-full px-[18px] text-sm leading-5 font-medium cursor-pointer ${
                pathname === item.path ? "bg-[#dbdbdb]" : ""
              }`}
              aria-current={pathname === item.path ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;
