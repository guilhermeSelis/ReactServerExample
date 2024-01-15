# Modelo de servidor para chamadas de API em Node.Js

Este repositório contém um modelo de servidor que realiza chamadas para a API da Brasil Bitcoin.
Neste exemplo, as chamadas são realizadas pelo front-end (React) e enviadas para o backend, que trata as requisições e lá mesmo elas são executadas pelo nosso servidor (node).

### Importante

Este protótipo de aplicação foi concebido com o propósito exclusivo de servir como um ponto de partida para a construção de um servidor que efetua chamadas para a API da Brasil Bitcoin.
Caso opte por seguir este modelo, enfatizamos a importância de realizar todas as modificações de segurança e estruturais necessárias.
Destacamos ainda que este protótipo não deve ser adotado por outras empresas, uma vez que não atende aos padrões de segurança requeridos para o gerenciamento de aplicações em produção.

### .env config file

Antes de rodar o servidor e iniciar sua aplicação, é necessário configurar o arquivo `.env`.
Basta criar o mesmo no seu diretório raiz, com o nome especificamente de `.env`, e adicionar o valor da sua chave de API da mesma maneira em que foi definido no `.env_example`

### node server config
Para que seja possível rodar o servidor, primeiro devemos rodar o seguinte comando no diretório raiz:
```
$ npm Install
```

Após isso, será possível rodar servidor e iniciar a aplicação, utilizando `npm run dev`.


## Troubleshooting
### 1 - [React-App] 'react-scripts' não é reconhecido como um comando interno ou externo, um programa operável ou um arquivo em lotes.
No diretório raiz do seu projeto, execute o seguinte comando:

```
npm install react-scripts --save
```
