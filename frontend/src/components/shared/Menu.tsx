"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"


export default function Menu() {
    
    const pathname = usePathname()
    
    const isHome = pathname === "/"
    const isProjects = pathname.startsWith("/projetos")
    
    return (
        <nav className="flex hidden sm:flex gap-6 items-center">
            <MenuItem 
                href="/" 
                select={isHome}
            >
                Início
            </MenuItem> 
            
            <MenuItem 
                href="/projetos" 
                select={isProjects}
            >
                Projetos
            </MenuItem>
            <MenuItem 
                href="https://api.whatsapp.com/send?phone=5585988855793&text=Olá, gostaria de saber mais sobre o seu trabalho." 
                select={false}
                newTab={true}
            >
                Contato 
            </MenuItem>
        </nav>    
    );
}

function MenuItem(props: {
    href: string;
    children: React.ReactNode;
    select: boolean;
    newTab?: boolean;
}) {
    return (
       
        <Link 
            href={props.href} 
            target={props.newTab ? "_blank" : "_self"} 
        > 
            <span className={
                `flex items-center gap-2 text-sm border-red-600 hover:text-white
                ${props.select ? "border-b-4 text-white" : "text-zinc-300"} 
            `}>
                {props.children}
            </span>
        </Link>
        
    );
}