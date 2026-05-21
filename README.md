# Movie Finder

Aplicação web de busca de filmes integrada à [OMDb API](http://www.omdbapi.com/). Suporta busca por texto e por voz via [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), com fluxo de três telas: captura, resultados e detalhes do filme.

---

## Sumário

1. [Funcionalidades](#funcionalidades)
2. [Fluxo de Telas](#fluxo-de-telas)
3. [Tecnologias](#tecnologias)
4. [Pré-requisitos](#pré-requisitos)
5. [Como Executar](#como-executar)
6. [Configuração da API](#configuração-da-api)

---

## Funcionalidades

**Busca por voz**
Ao clicar no ícone de microfone, o reconhecimento de voz é ativado e o nome do filme ditado é enviado automaticamente para a OMDb API.

**Busca por texto**
Campo de entrada convencional para digitação direta do título do filme.

**Listagem de resultados**
Exibe os filmes encontrados com pôster, título e ano de lançamento.

**Detalhes do filme**
Ao selecionar um resultado, uma tela dedicada exibe sinopse, diretor, elenco, nota IMDb e demais metadados retornados pela API.

---

## Fluxo de Telas

```
┌─────────────────────────┐
│  Tela 1: Busca          │
│  [ campo de texto ]     │
│  [ ícone de microfone ] │
└────────────┬────────────┘
             │ consulta OMDb API
             ▼
┌─────────────────────────┐
│  Tela 2: Resultados     │
│  [ pôster · título · ano] │
│  [ botão: ver detalhes ]│
└────────────┬────────────┘
             │ seleção do filme
             ▼
┌─────────────────────────┐
│  Tela 3: Detalhes       │
│  sinopse · diretor      │
│  elenco · nota IMDb     │
└─────────────────────────┘
```

---

## Tecnologias

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estrutura semântica das três telas |
| CSS3 | Estilização e responsividade para dispositivos móveis |
| JavaScript | Lógica de busca e integração com a OMDb API |
| Web Speech API | Reconhecimento de voz para captura do título |
| OMDb API | Fonte dos dados de filmes |

---

## Pré-requisitos

- Navegador com suporte à Web Speech API — recomendado: **Google Chrome**.
- Chave de API da OMDb (gratuita). Obtenha a sua em [omdbapi.com](http://www.omdbapi.com/apikey.aspx).

---

## Como Executar

O projeto não requer servidor ou dependências externas.

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/movie-finder.git

# 2. Acesse a pasta do projeto
cd movie-finder

# 3. Abra a página inicial no navegador
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Ou arraste o arquivo `index.html` diretamente para o navegador.

---

## Configuração da API

A OMDb API requer uma chave de acesso gratuita. Após obtê-la, substitua o valor no arquivo JavaScript responsável pelas requisições:

```javascript
const API_KEY = 'sua-chave-aqui';
```

> Sem uma chave válida, as buscas retornarão erro de autenticação da API.
