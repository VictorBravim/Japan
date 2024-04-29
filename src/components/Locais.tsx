// Locais.tsx
'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import banner from '@/assets/banner.png';
import { Settings } from 'react-slick';

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
  ];

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="locais" className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/bg3.png')" }}>
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Locais Turísticos no Japão</h2>
        <Slider {...sliderSettings}>
          {locais.map((local, index) => (
            <div key={index} className="px-2">
              <div className="bg-white flex flex-col justify-center items-center rounded-lg overflow-hidden shadow-lg">
                <Image src={local.imagem} alt={local.nome} width={400} height={250} />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{local.nome}</h3>
                  <p className="text-sm text-gray-600">{local.localizacao}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Locais;