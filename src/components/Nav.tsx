// Nav.tsx
'use client'
import { useState, useEffect } from 'react';

export default function Nav() {
    const [activeSection, setActiveSection] = useState('home'); // Estado para rastrear a seção ativa

    // Função para manipular o scroll e atualizar a seção ativa
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Verifica a posição das seções na página e atualiza a seção ativa com base no scroll
        if (scrollPosition < window.innerHeight - 100) {
            setActiveSection('home');
        } else if (scrollPosition < 2 * window.innerHeight - 100) {
            setActiveSection('sobre');
        } else if (scrollPosition < 3 * window.innerHeight - 100) {
            setActiveSection('locais');
        } else {
            setActiveSection('cambio');
        }
    };

    // Efeito de lado para adicionar um listener de scroll quando o componente montar
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Deps vazio para executar apenas uma vez durante o ciclo de vida do componente

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-transparent p-8 fixed w-full z-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center ml-0 lg:ml-8"></div>
                <div className="md:flex text-white space-x-6 lg:space-x-12 mt-4 md:mt-0">
                    <button
                        className={`text-base md:text-lg ${activeSection === 'home' ? 'bg-white text-black px-3 rounded-full' : ''}`}
                        onClick={() => scrollToSection('home')}
                    >
                        Home
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'sobre' ? 'bg-white text-black px-3 rounded-full' : ''}`}
                        onClick={() => scrollToSection('sobre')}
                    >
                        Sobre
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'locais' ? 'bg-white text-black px-3 rounded-full' : ''}`}
                        onClick={() => scrollToSection('locais')}
                    >
                        Locais
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'cambio' ? 'bg-white text-black px-3 rounded-full' : ''}`}
                        onClick={() => scrollToSection('cambio')}
                    >
                        Câmbio
                    </button>
                </div>
                <button className="bg-none hidden text-white lg:block rounded-full text-base md:text-5xl font-bold px-4 mt-4 md:mt-0 mr-0 lg:mr-8"></button>
            </div>
        </nav>
    );
}