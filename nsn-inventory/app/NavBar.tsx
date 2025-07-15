import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Inventory", href: "/inventory" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <Image
          src="/nsn_revenue_resources_logo.jpg"
          alt="nsn logo"
          width={50}
          height={50}
        ></Image>
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
