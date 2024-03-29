import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [walletData, setWalletData] = useState(null);
  const documentValue = 12312312312;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Chamada POST para generateFiatDepositQrCode
        const response1 = await axios.post('http://localhost:3002/api/generateFiatDepositQrCode', { value: 200, document: documentValue });
        setUserData(response1.data);

        const response2 = await axios.get(`http://localhost:3002/api/getUserWallets?coin=BTC&document=${documentValue}`);
        //sempre será necessário passar o document, mesmo se for uma requisição sem parametros
        // Exemplo: const response2 = await axios.get(`http://localhost:3002/api/getUserWallets?document=${documenValue}`);
        setWalletData(response2.data);
      } catch (error) {
        console.error('Erro na solicitação:', error.message);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className='mainContent'>
      <h1>Exemplo de Comunicação com Brasil Bitcoin API</h1>

      <div>
        <h2>Dados do Usuário (Chamada de método POST)</h2>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </div>

      <div>
        <h2>Carteiras de BTC do Usuário (Chamada de método GET)</h2>
        <pre>{JSON.stringify(walletData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;