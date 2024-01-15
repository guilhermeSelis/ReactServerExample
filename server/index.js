const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const app = express();

// Porta em que ser servidor está definido (será específicada no frontend)
const port = 3002;

app.use(cors());
app.use(bodyParser.json()); // Adiciona o body-parser ao middleware para interpretar JSON

//Realizando as chamadas de fato, neste caso, estão dinamicamente adaptadas para qualquer post ou get
app.all('/api/:endpoint', async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const baseUrl = 'https://brasilbitcoin.com.br/caas/sandbox/';

    const { endpoint } = req.params;
    const apiEndpoint = baseUrl + endpoint;


    const method = req.method.toLowerCase();
    const data = method === 'get' ? req.query : req.body;

    const headers = {
      Authentication: apiKey,
      'BRBTC-FROM-ACCOUNT': Number(data.document), // Obtendo 'document' do corpo da requisição
    };


    let response;
    const { body } = req;
    //Realizando a chamada e fazendo o tratamento para saber se foi método POST ou GET
    if (method === 'get') {
      const { query } = req;
      fullApiEndpoint = '?' + new URLSearchParams(query).toString();
      response = await axios.get(apiEndpoint + fullApiEndpoint, { headers });
    } else if (method === 'post') {
      response = await axios.post(apiEndpoint, body, { headers });
    } else {
      throw new Error('Método HTTP não suportado');
    }

    res.json(response.data);
  } catch (error) {
    console.error('Erro na solicitação:', error.message);
    res.status(500).json({ error: 'Erro na solicitação' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});