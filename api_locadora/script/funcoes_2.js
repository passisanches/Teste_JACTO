
function api(){
/*    fetch(url)
.then(function() {

})
.catch(function() {

});

    <><h1>Authors</h1>
    <ul id="authors"></ul></>

    <script>
        const ul = document.getElementById('authors');
    </script>

const url = 'https://pokeapi.co';

function createNode(element) {
	return document.createElement(element);
}
function append(parent, el) {
	return parent.appendChild(el);
}
fetch(url)
  .then(function(data) {

    })
  })
  .catch(function(error) {

  });
  fetch(url)
.then((resp) => resp.json())
.then(function(data) {
	let authors = data.results;
    
return authors.map(function(author) {

})
return authors.map(function(author) {
	let li = createNode('li');
})
let li = createNode('li');
let img = createNode('img');
let span = createNode('span');

		
img.src = author.picture.medium;
span.innerHTML = `${author.name.first} ${author.name.last}`;*/
// função para tratar o sucesso
function success() {
    var data = JSON.parse(this.responseText); //fazer o parsing da string para JSON
    console.log(data);
}

// função para tratar o erro
function error(err) {
    console.log('Erro de solicitação', err); //os detalhes do erro estarão no objeto "err"
}

var xhr = new XMLHttpRequest(); //invocar uma nova instância de XMLHttpRequest
xhr.onload = success; // chamar a função success se a solicitação for um sucesso
xhr.onerror = error;  // chamar a função error se a solicitação der errado
xhr.open('GET', 'https://pokeapi.co'); // abrir uma solicitação GET
xhr.send(); // enviar a solicitação ao servidor.


    
	
}  
