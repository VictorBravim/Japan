// Sobre.tsx
'use client'
import { useState } from 'react';
import Image from 'next/image';
import banner from '@/assets/banner.png';

const AccordionItem: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full bg-gradient-to-r from-red-custom to-red-custom-2 text-white p-3 rounded-lg flex justify-between items-center transition-colors duration-300 ease-in-out focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls={`accordion-${title}`}
      >
        <span className="font-medium transition-all duration-300 ease-in-out">{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      <div
        id={`accordion-${title}`}
        className={`mt-2 text-gray-300 max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen' : ''
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
    <div id="sobre" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-12 lg:pt-0 pt-12 bg-cover bg-center" style={{ backgroundImage: "url('/bg2.png')" }}>
      <div className="w-full lg:w-1/2">
        <Image src={banner} alt="Texto" width={600} height={320} />
      </div>

      <div className="relative z-10 text-white w-full lg:w-1/3 lg:ml-8">
        <h2 className="text-2xl font-semibold mb-4">Informações sobre o Japão</h2>
        {accordionData.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default Sobre;

