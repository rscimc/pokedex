const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
let limit = 10;
let offset = 0;
const maxRecords = 151;

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
        
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
            `
        ).join('');

        pokemonList.innerHTML += newHtml;
    })
}
// com verbosidade
//    const newList = pokemons.map((pokemon) => {
//        return convertPokemonToLi(pokemon);
//    })

//    const newHtml = newList.join('');

//    pokemonList.innerHTML +=newHtml;

//})

// Ineficiente por conta do loop de renderização 
//    const listItems = [];

  //      for (let i = 0; i < pokemons.length; i++) {
  //          const pokemon = pokemons[i];
  //          listItems.push(convertPokemonToLi(pokemon));
  //      }
  //  })
  //  console.log(listItems);

loadPokemonItems(offset, limit);    

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if(qtdRecordNextPage >+ maxRecords) {
        const newLimit = maxRecords-offset;
        loadPokemonItems(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItems(offset, limit);
    }
})