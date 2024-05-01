# Japan

![image 2 (1)](https://github.com/VictorBravim/Japan/assets/122113588/4a9962dd-c331-41c7-b672-0fd413b232f0)

Este projeto é construído utilizando Next.js, TypeScript e Tailwind apresentando diversos componentes que juntos criam um site para explorar a beleza e a cultura do Japão.

## <code>Estrutura do Projeto</code>
O projeto está estruturado da seguinte forma:

- components: Contém os componentes React utilizados em todo o site.
- Nav.tsx: Componente de navegação com funcionalidade de rolagem.
- Hero.tsx: Seção inicial apresentando o Japão com uma imagem e texto.
- Sobre.tsx: Seção detalhando informações sobre a cultura japonesa utilizando um layout de acordeão.
- Locais.tsx: Seção exibindo locais específicos no Japão utilizando um componente de carrossel (react-slick).
- Cambio.tsx: Componente conversor de moeda para converter BRL para JPY.
- Footer.tsx: Componente de rodapé com links e logotipo.
- pages: Contém as páginas do Next.js.
- index.tsx: Página principal (Home) integrando todos os componentes.
- globals.css: Arquivo CSS global para estilização utilizando Tailwind CSS.

## <code>Visão Geral dos Componentes</code>
1. Nav
- Fornece links de navegação (Home, Sobre, Locais, Cambio).
- Destaca a seção ativa com base na posição de rolagem.
  
2. Hero
- Exibe uma seção introdutória com uma imagem e texto sobre o Japão.
  
3. Sobre
- Fornece informações sobre a cultura japonesa, turismo e gastronomia.
- Utiliza um layout de acordeão para apresentação de conteúdo.
  
4. Locais
- Mostra locais específicos no Japão utilizando um carrossel responsivo (react-slick).
- Inclui imagens e detalhes sobre cada local.

5. Cambio
- Implementa um conversor de moeda (BRL para JPY) utilizando uma API externa (exchangerate-api.com).
- Permite que os usuários insiram um valor em BRL e o converte para JPY.

6. Footer
- Exibe o rodapé com links e um logotipo.

## <code>Bibliotecas Externas Utilizadas</code>

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- Next.js: Framework React para renderização no lado do servidor e roteamento.
- Tailwind CSS: Framework CSS com abordagem de utilitários utilizado para estilização.
- react-slick: Componente de carrossel para mostrar os locais.
- axios: Cliente HTTP baseado em promessas para fazer requisições de API.

## <code>Uso</code>
1. Configuração
- Clone o repositório.
- Instale as dependências usando npm install.
2. Execução
- Utilize npm run dev para iniciar o servidor de desenvolvimento do Next.js.
- Acesse o site em http://localhost:3000.

