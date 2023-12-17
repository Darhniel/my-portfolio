'use client'
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [mobile, setMobile] = useState(false);

    return (
        <header className="fixed z-50 w-full bg-white shadow-lg">
            <nav className="container flex justify-between py-4 uppercase font-bold items-center">
                <div className="flex items-center gap-4">
                    <Image 
                        src={`/user.jpg`}
                        width={40}
                        height={40}
                        alt="Daniel"
                    />
                    <span className="">daniel</span>
                </div>
                <ul className="hidden md:flex flex-1 justify-end items-center gap-12 text-mb-text-blue uppercase font-bold">
                    <li className="hover:scale-110 hover:transition-all hover:duration-300 hover:text-p-brown font-semibold">
                        <Link href={`/`}>Home</Link>
                    </li>
                    <li className="hover:scale-110 hover:transition-all hover:duration-300 hover:text-p-brown font-semibold">
                        <Link href={`#about`}>About</Link>
                    </li>
                    <li className="hover:scale-110 hover:transition-all hover:duration-300 hover:text-p-brown font-semibold">
                        <Link href={`/`}>Projects</Link>
                    </li>
                    <li className="hover:scale-110 hover:transition-all hover:duration-300 hover:text-p-brown font-semibold">
                        <Link href={`/`}>Contact</Link>
                    </li>
                </ul>
                <div className="cursor-pointer flex flex-col items-end md:hidden justify-end" onClick={() => setMobile(!mobile)}>
                    <Image 
                        src={`/ham-menu.svg`}
                        alt=""
                        width={20}
                        height={20}
                        className={`${mobile ? 'hidden' : 'block'}`}
                    />
                    <Image
                        src={'/ham-menu-close.svg'}
                        alt=''
                        width={20}
                        height={20}
                        className={`${mobile ? 'block' : 'hidden'}`}
                    />
                </div>
            </nav>
            <div className={`${mobile ? 'block' : "hidden"} container md:hidden`}>
                <ul className=' md:block flex-1 justify-end items-center gap-12 text-mb-text-blue uppercase font-bold'>
                    <li className='cursor-pointer border-t py-4 border-slate-300 md:hover:scale-110 text-red-500'>
                        <Link href={`/`}>Home</Link>
                    </li>
                    <li className='cursor-pointer border-t py-4 border-slate-300 md:hover:scale-110'>
                        <Link href={`/`}>About</Link>
                    </li>
                    <li className='cursor-pointer border-t py-4 border-slate-300 md:hover:scale-110'>
                        <Link href={`/`}>Projects</Link>
                    </li>
                    <li className='cursor-pointer border-t py-4 border-slate-300 md:hover:scale-110'>
                        <Link href={`/`}>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}