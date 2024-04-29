// pages/Locais.tsx
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import banner from '@/assets/banner.png';

const Locais = () => {
  const locais = [
    {
      nome: 'Tóquio',
      imagem: banner,
      localizacao: 'Região de Kanto',
    },
    {
      nome: 'Kyoto',
      imagem: banner,
      localizacao: 'Região de Kansai',
    },
    {
      nome: 'Osaka',
      imagem: banner,
      localizacao: 'Região de Kansai',
    },
    {
        nome: 'Osaka',
        imagem: banner,
        localizacao: 'Região de Kansai',
      },
      {
        nome: 'Osaka',
        imagem: banner,
        localizacao: 'Região de Kansai',
      },
      {
        nome: 'Osaka',
        imagem: banner,
        localizacao: 'Região de Kansai',
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = currentIndex + 1 >= locais.length ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1 < 0 ? locais.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  return (
    <div id="locais" className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg3.png')" }}>
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Locais Turísticos no Japão</h2>
        <div className="relative">
          <div className="flex overflow-x-auto">
            {locais.map((local, index) => (
              <div key={index} className="flex-shrink-0 mr-4" style={{ minWidth: 400 }}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <Image src={local.imagem} alt={local.nome} width={400} height={250} />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{local.nome}</h3>
                    <p className="text-sm text-gray-600">{local.localizacao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 rounded-lg shadow-md">
            &lt; Anterior
          </button>
          <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 rounded-lg shadow-md">
            Próximo &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Locais;