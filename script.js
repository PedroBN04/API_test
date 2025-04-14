document.getElementById('searchBtn').addEventListener('click', () => searchMovie(document.getElementById('movieInput').value.trim()));
document.getElementById('voiceBtn').addEventListener('click', startVoiceSearch);

let currentMovieId = '';

async function searchMovie(movieName) {
    if (!movieName) {
        alert('Por favor, digite um nome de filme!');
        return;
    }

    const apiKey = '6724cd95';
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(movieName)}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'True') {
            displayMovies(data.Search);
        } else {
            alert('Filme não encontrado!');
        }
    } catch (error) {
        console.error('Erro ao buscar filme:', error);
    }
}

function displayMovies(movies) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'info-item';
        movieCard.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300?text=Poster+Não+Disponível'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>Ano: ${movie.Year}</p>
            <button class="viewBtn" onclick="showMovieDetails('${movie.imdbID}')">Ver Detalhes</button>
        `;
        resultsDiv.appendChild(movieCard);
    });

    showScreen(2);
}

async function showMovieDetails(imdbID) {
    const apiKey = '6724cd95';
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        currentMovieId = imdbID;

        document.getElementById('movieDetails').innerHTML = `
            <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/400x600?text=Poster+Não+Disponível'}" alt="${data.Title}">
            <h2>${data.Title}</h2>
            <p><strong>Ano:</strong> ${data.Year}</p>
            <p><strong>Gênero:</strong> ${data.Genre}</p>
            <p><strong>Classificação:</strong> ${data.Rated}</p>
            <p><strong>Sinopse:</strong> ${data.Plot}</p>
            <p><strong>Diretor:</strong> ${data.Director}</p>
            <p><strong>Elenco:</strong> ${data.Actors}</p>
            <p><strong>Nota IMDb:</strong> ${data.imdbRating}</p>
            <p><strong>Duração:</strong> ${data.Runtime}</p>
        `;
        showScreen(3);
    } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
    }
}

function startVoiceSearch() {
    const voiceBtn = document.getElementById('voiceBtn');
    const movieInput = document.getElementById('movieInput');

    if (!('webkitSpeechRecognition' in window)) {
        alert("Seu navegador não suporta busca por voz.");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.onstart = function() {
        voiceBtn.classList.add('active');
    };

    recognition.onresult = function(event) {
        const movieName = event.results[0][0].transcript;
        movieInput.value = movieName;
        searchMovie(movieName);
    };

    recognition.onerror = function(event) {
        alert("Erro ao entender a fala.");
    };

    recognition.onend = function() {
        voiceBtn.classList.remove('active');
    };

    recognition.start();
}

function showScreen(screenNumber) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });
    document.getElementById(`screen${screenNumber}`).style.display = 'block';
}
