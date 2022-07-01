import {config} from './env.js';
var mykey = config.key;
const body = document.querySelector('body');
const button = document.querySelector('button');
const word = document.createElement('h1');
document.querySelector(".d-flex").appendChild(word);
const definition = document.createElement('p');
document.querySelector(".d-flex").appendChild(definition);

const randomWord = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
    .then(response => {
        return response.json();
    })
    .then(response => {
        word.textContent = response
        randomDefinition(word);
    })
    .catch(err => {
        console.log(err);
        return "No Word Available"
    });
}

const randomDefinition = (word) => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word.textContent}?key=${mykey}`)
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log(response[0].shortdef[0]);
        definition.textContent = "DEFINITION :  " + response[0].shortdef[0];
    })
    .catch(err => {
      definition.textContent = "Couldent find a definition :(";
      document.querySelector(".d-flex").appendChild(definition);
      console.log(err);
    })

}

button.addEventListener('click', function(){
    randomWord();
})
