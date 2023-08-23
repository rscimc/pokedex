
const pokemonList = document.getElementById("pokemonList")


function convertPokemonToLi(pokemon) {
    return `
    </li>
    <li class="pokemon ${pokemon.type}">
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
            </ol>

            <img src="${pokemon.photo}"
                alt="${pokemon.name}">
        </div>
    </li>
    `
}


pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML += newHtml;
})
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