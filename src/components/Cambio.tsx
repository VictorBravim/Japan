// Cambio.tsx
'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import text4 from '@/assets/text4.webp'

const Cambio = () => {
    const [brlValue, setBrlValue] = useState('');
    const [jpyValue, setJpyValue] = useState('');
    const [loading, setLoading] = useState(false);

    const handleConvert = async () => {
        if (!brlValue) {
            alert('Por favor, insira um valor em reais (BRL) para converter.');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/BRL`);
            const jpyRate = response.data.rates.JPY;
            const convertedValue = (parseFloat(brlValue) * jpyRate).toFixed(2);
            setJpyValue(convertedValue);
        } catch (error) {
            console.error('Erro ao converter o valor:', error);
            alert('Erro ao converter o valor. Por favor, tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="cambio" className="flex bg-gradient-to-t from-red-custom to-black flex-col justify-center items-center h-screen px-0 lg:px-64">
            <div className='w-full flex justify-center items-center'>
                <Image src={text4} alt="Texto" width={600} height={32} />
            </div>
            <div className="w-full flex flex-col justify-center items-center bg-white p-12 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conversor de Câmbio BRL → JPY</h2>
                <div className="flex items-center mb-4">
                    <input
                        type="number"
                        className="w-40 px-3 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none"
                        placeholder="Valor em BRL"
                        value={brlValue}
                        onChange={(e) => setBrlValue(e.target.value)}
                    />
                    <button
                        className="bg-gradient-to-t from-red-custom-2 to-red-custom text-white px-4 py-2 rounded-md hover:bg-red-custom focus:outline-none"
                        onClick={handleConvert}
                        disabled={loading}
                    >
                        {loading ? 'Convertendo...' : 'Converter'}
                    </button>
                </div>
                {jpyValue && (
                    <p className="text-lg text-gray-700">
                        {brlValue} BRL equivale a aproximadamente {jpyValue} JPY.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Cambio;