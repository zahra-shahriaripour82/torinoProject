import Image from "next/image"

import Logo from "../../../public/Images/Logo.png"
import { navList } from "@/core/constants/constants"
import Link from "next/link"

function Header() {
  return (
    <header className="bg-slate-500 h-20 bordr-b shadow-md ">

        <div className="flex justify-between items-center w-[1440px]" >
<div className="items-center">
    <Image src={Logo}  width={146}  alt="torino-logo"/>
    <nav>
        <ul className="">
            {navList.map(item=>(
                <li key={item.id}>
                    <Link href={item.href}>
                    {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
</div>

        </div>
    </header>
  )
}

export default Header