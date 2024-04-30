// Cambio.tsx
'use client'
import React, { useState } from 'react';
import axios from 'axios'; // Usaremos axios para fazer requisições HTTP

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
    <div id="cambio" className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
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
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
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
