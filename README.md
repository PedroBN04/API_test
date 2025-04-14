# Movie Finder - OMDb API

Um simples site de busca de filmes utilizando a [OMDb API](http://www.omdbapi.com/), com suporte para busca por voz (Web Speech API) ou entrada via campo de texto. O projeto apresenta três telas:

1. **Tela de Captura de Voz ou Busca Digitada**: Onde o usuário pode digitar o nome do filme ou utilizar o microfone para realizar a busca.
2. **Tela de Resultados**: Exibe os filmes encontrados com suas informações básicas e um botão para ver mais detalhes.
3. **Tela de Detalhes**: Mostra informações detalhadas sobre o filme, incluindo sinopse, diretor, elenco, nota IMDb, etc.

## Funcionalidades

- **Busca por voz**: Permite que o usuário dite o nome do filme ao clicar no ícone de microfone.
- **Busca por texto**: O usuário pode digitar diretamente o nome do filme no campo de busca.
- **Exibição dos filmes**: Exibe os filmes encontrados com título, ano e poster.
- **Detalhes do filme**: Ao clicar no filme, os detalhes completos são exibidos, incluindo sinopse, diretor, elenco, etc.
  
## Tecnologias Usadas

- **HTML**: Estrutura da página.
- **CSS**: Estilos e responsividade para dispositivos móveis.
- **JavaScript**: Lógica de busca de filmes e integração com a OMDb API.
- **Web Speech API**: Implementação de reconhecimento de voz para a busca por filme.

## Pré-requisitos

- Navegador com suporte para a [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) (Recomendado: Google Chrome).

## Como rodar o projeto localmente

1. Clone este repositório em sua máquina:
   
   ```bash
   git clone https://github.com/seu-usuario/movie-finder.git
   cd movie-finder

2. Abra o arquivo index.html em seu navegador.

3. O projeto já estará em funcionamento. Não é necessário configurar nenhum servidor local.
