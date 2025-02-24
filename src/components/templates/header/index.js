 "use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Logo from "../../../../public/Images/Logo.png";
import { navList } from "@/core/constants/constants";
import AuthForm from "../authForm";

function Header() {
  const pathname=usePathname();
  return (
    <header className="bg-background h-20 bordr-b shadow-md py-2  px-14">
      <div className="flex justify-between items-center max-w[1440px]">
        <div className="flex mb-2 ">
          <Link href={"/"}>
            <Image
              src={Logo}
              width={146}
              height={44}
              alt="torino-logo"
              priority
            />
          </Link>
          <nav>
            <ul className="flex justify-between items-center mr-10 pt-5 ">
              {navList.map((item) => (
                <li key={item.id} className="pr-9 ">
                  <Link href={item.href} className={`text-base hover:text-primary ${pathname===item.href ?'text-primary' :""}` }>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
         
        </div>
        <AuthForm/>
      </div>
    </header>
  );
}

export default Header;
