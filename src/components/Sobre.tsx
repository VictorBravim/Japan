// Sobre.tsx
'use client'
import { useState } from 'react';
import Image from 'next/image';
import bandeira from '@/assets/bandeira.webp';
import text2 from '@/assets/text2.webp'

const AccordionItem: React.FC<{ title: string; content: string; isFirst: boolean }> = ({
    title,
    content,
    isFirst,
}) => {
    const [isOpen, setIsOpen] = useState(isFirst);

    return (
        <div className="mb-4">
            <button
                className="w-full bg-gradient-to-t from-red-custom-2 to-red-custom text-white p-3 rounded-lg flex justify-between items-center transition-colors duration-300 ease-in-out focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen ? 'true' : 'false'}
                aria-controls={`accordion-${title}`}
            >
                <span className="font-medium">{title}</span>
                <span>{isOpen ? '▲' : '▼'}</span>
            </button>
            <div
                id={`accordion-${title}`}
                className={`mt-2 text-gray-300 max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : ''
                    }`}
            >
                <p>{content}</p>
            </div>
        </div>
    );
};

const Sobre: React.FC = () => {
    const accordionData = [
        {
            title: 'Cultura Japonesa',
            content:
                'O Japão possui uma cultura rica e diversificada, com influências históricas e contemporâneas que abrangem arte, culinária, moda e muito mais.',
        },
        {
            title: 'Turismo',
            content:
                'Descubra os pontos turísticos únicos do Japão, incluindo templos antigos, paisagens deslumbrantes e cidades modernas como Tóquio e Kyoto.',
        },
        {
            title: 'Gastronomia',
            content:
                'A comida japonesa é famosa em todo o mundo por sua frescura e sabor. Experimente sushi, ramen, tempura e outras delícias culinárias.',
        },
    ];

    return (
        <div id="sobre" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-48 lg:pt-0 pt-12 bg-cover bg-center" style={{ backgroundImage: "url('/bg2.webp')" }}>
            <div className="w-full lg:w-1/2">
                <Image src={bandeira} alt="Texto" width={600} height={320} />
            </div>

            <div className="relative z-10 text-white w-full lg:w-1/2 lg:ml-8">
                <Image src={text2} alt="Texto" width={600} height={32} />
                {accordionData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isFirst={index === 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sobre;