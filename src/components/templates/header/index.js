 "use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Logo from "../../../../public/Images/Logo.png";
import { navList } from "@/core/constants/constants";
import AuthForm from "../authForm";
import MobileMenu from "../mobileMenu";

function Header() {
  const pathname=usePathname();
  return (
    <header className="bg-background h-20 bordr-b shadow-md py-4  px-8 relative">
      <div className="flex justify-between items-center mx-auto max-w[1440px]">
        <div className="flex md:items-center md:gap-16">
          <Link href={"/"} className="hidden md:block">
            <Image
              src={Logo}
              width={146}
              height={44}
              alt="torino-logo"
              priority
              className="w-[146px]"
            />
          </Link>
          {/* pr-9 */}
          <nav>
            <ul className="hidden md:flex gap-8">
              {navList.map((item) => (
                <li key={item.id}  className={`text-xs xl:text-base transition-all ease-out hover:text-primary ${
                  pathname === item.href ? 'text-primary' : ''
              }`}>
                  <Link href={item.href} >{item.title}</Link>
                </li>
              ))}
            </ul>
            <MobileMenu />
          </nav>
         
        </div>
        <AuthForm/>
      </div>
    </header>
  );
}

export default Header;
