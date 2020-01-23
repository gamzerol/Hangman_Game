let score = document.getElementById('score');
let movie = document.querySelector('.movie');
let lives = document.getElementById('lives');
let liveCard = document.querySelector('.lives');
let image = document.querySelector('.image img');
let letters = document.querySelector('.letters');
let playerChoice = document.querySelectorAll('.key');
let newGame = document.getElementById('newGame');

let random = Math.random() * movies.length;
let randomMovie = movies[random.toFixed()];
let randomMovieLetters = randomMovie.split('');
let arr = [];
let liveCounter = 10;
let scoreCounter = 0;
let imgCount = 1;

let array = [];
let whatplayerKnows = [];

document.onload = setRandomMovie();

letters.addEventListener('click', function (e) {
    let keyboardLett = e.target;
    // rasgele seçilen filmdeki harfin elementi
    playerChoices(keyboardLett);

});
newGame.addEventListener('click', function() {
    window.location.reload();
});

function setRandomMovie() {

    for (let i = 0; i < randomMovieLetters.length; i++) {
    
        let div = document.createElement('div');
        div.className = `letter ${randomMovieLetters[i]}`;
        // div.id = `${randomMovieLetters[i]}`;
        div.innerText = randomMovieLetters[i];
        arr.push(div.innerText);
        if (div.innerText === ' ') {
            div.style.borderBottom = 'none';
        }
        movie.appendChild(div);
        array.push(div);
    }
}

function playerChoices(keyboardEvent) {
    
    for (let i = 0; i < randomMovie.length; i++) {
        if (keyboardEvent.innerText === randomMovie.charAt(i)) {
            let movieElement = document.querySelectorAll(`.${keyboardEvent.innerText}`);
            movieElement.forEach(function (movie) {
                movie.classList.add('color')
            })
            scoreCounter += 100;
            score.innerText = scoreCounter;
            whatplayerKnows.push(randomMovie.charAt(i));
                        
        }
    }
    
    
    if (!(randomMovieLetters.includes(keyboardEvent.innerText))) {
        image.src = `img/hangman-${imgCount}.png`;
        liveCounter--;
        lives.innerText = liveCounter;
        if(liveCounter === 3) {
            liveCard.style.animation = 'shake 0.4s';
            liveCard.style.animationIterationCount = '7';
        }
        imgCount++;
        if (liveCounter === 0) {
            console.log(whatplayerKnows);
            let movieLetter = document.querySelectorAll('.letter');
            movieLetter.forEach(function(let) {
                if(!(whatplayerKnows.includes(let.innerText))) {
                    if(let.innerText !== '') {
                        let.style.backgroundColor = 'yellow';
                    }
                }
                let.classList.add('color');
            })
            
            alert('Game Over !!');
        }
    }

    
}






