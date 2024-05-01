// Locais.tsx
'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import tokyo from '@/assets/tokyo.webp'
import kyoto from '@/assets/kyoto.webp'
import osaka from '@/assets/osaka.webp'
import text3 from '@/assets/text3.webp'
import { Settings } from 'react-slick';

const Locais = () => {
    const locais = [
        {
            nome: 'Tóquio',
            imagem: tokyo,
            localizacao: 'Região de Kanto',
        },
        {
            nome: 'Kyoto',
            imagem: kyoto,
            localizacao: 'Região de Kansai',
        },
        {
            nome: 'Osaka',
            imagem: osaka,
            localizacao: 'Região de Kansai',
        },
    ];

    const sliderSettings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        swipeToSlide: true,
        arrows: false,
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
        <div id="locais" className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/bg3.webp')" }}>
            <div className="container mx-auto py-12">
                <div className='w-full flex justify-center items-center'>
                    <Image src={text3} alt="Texto" width={600} height={32} />
                </div>
                <Slider {...sliderSettings}>
                    {locais.map((local, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-white flex flex-col justify-center items-center p-4 rounded-lg overflow-hidden shadow-lg">
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