document.getElementById("btn").addEventListener("click", generateJokes); 

async function generateJokes() {
const URL = 'https://official-joke-api.appspot.com/random_joke';

fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ocurrió un error');
      }
      return response.json();
    })
    .then(data => {
      randomJoke(data);
    })
    .catch(error => {
      console.error('Ocurrió un error:', error);
    });


    function randomJoke(joke) {
        const container = document.getElementById("container");
        container.innerHTML = `
            <div class="joke">
                <h3>${joke.setup}</h3>
                <p>${joke.punchline}</p>
            </div>
        `;
    }

}
