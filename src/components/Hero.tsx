// Hero.tsx
import Image from "next/image";
import text from '@/assets/text.webp'

export default function Hero() {
    return (
        <div id="home" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-12 lg:pt-0 pt-12 bg-cover bg-center" style={{ backgroundImage: "url('/bg.webp')" }}>
            <div className="relative z-10 text-white w-full lg:w-1/3">
                <div className="text-center mb-4">
                    <Image src={text} alt="Texto" width={600} height={32} />
                    <p className="text-sm md:text-lg text-gray-bg font-bold mb-4">O Japão é o destino ideal para explorar uma riqueza cultural única, oferecendo uma variedade incrível de experiências para todos os gostos e interesses.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
            </div>
        </div>
    );
}