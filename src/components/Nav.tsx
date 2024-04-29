// Nav.tsx
'use client'
import { useState } from 'react';
import Image from "next/image";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <nav className="bg-transparent p-8 absolute w-full z-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center ml-0 lg:ml-8">
                </div>
                <div className="md:flex text-white space-x-6 lg:space-x-12 mt-4 md:mt-0">
                    <button className=" text-base md:text-lg" onClick={() => scrollToSection('home')}>Home</button>
                    <button className="text-base md:text-lg" onClick={() => scrollToSection('sobre')}>Sobre</button>
                    <button className="text-base md:text-lg" onClick={() => scrollToSection('locais')}>Locais</button>
                    <button className="text-base md:text-lg" onClick={() => scrollToSection('recursos')}>Recursos</button>
                    <button className="text-base md:text-lg" onClick={() => scrollToSection('servico')}>Serviço</button>
                </div>
                <button className="bg-none hidden text-white lg:block rounded-full text-base md:text-5xl font-bold px-4 mt-4 md:mt-0 mr-0 lg:mr-8">
                </button>
            </div>
        </nav>
    );
}