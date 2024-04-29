// Hero.tsx
import Image from "next/image";

export default function Hero() {
    return (
        <div id="home" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-12 lg:pt-0 pt-12 bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="relative z-10 text-black w-full lg:w-1/3">
                <div className="text-center lg:text-left mb-4">
                    <h1 className="text-3xl md:text-6xl mb-6"><strong>Encontrar sua nova casa é simples</strong></h1>
                    <p className="text-sm md:text-lg text-gray-bg font-bold mb-4 pr-0 lg:pr-20">CasaNova.com é seu destino confiável para encontrar a casa ideal, seja para comprar ou alugar. Oferecemos uma ampla variedade de opções para todos os orçamentos e preferências.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <button className="bg-white text-black text-xl lg:text-2xl font-bold py-3 mb-6 lg:mb-0 px-12 rounded-full swv">
                        Buscar
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
            </div>
        </div>
    );
}
