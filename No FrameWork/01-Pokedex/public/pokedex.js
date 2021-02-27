const pokeContainer = document.querySelector('#poke_container');
const pokemosNumber = 150;

const colors = {
  fire      : '#FDDFDF',
  grass     : '#DEFDE0',
  electrict : '#FCF7DE',
  water     : '#DEF3FD',
  ground    : '#F4E7DA',
  rock      : '#D5D5D4',
  fairy     : '#FCEAFF',
  poison    : '#98D7A5',
  bug       : '#F8D5A3',
  dragon    : '#97B3E6',
  psychict  : '#EAEDA1',
  flying    : '#F5F5F5',
  fighting  : '#E6E0D4',
  normal    : '#F5F5F5',
}

const mainTypes = Object.keys(colors);

const fetchPokemons = async () => {

  for ( let i = 1; i <= pokemosNumber; i++ ) {
    await getPokemon(i);
  }

};

const getPokemon = async id => {

  const url     = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const res     = await fetch(url);
  const pokemon = await res.json();

  createPokemonCard(pokemon);
};

function createPokemonCard( pokemon ) {
  const pokemonCard = document.createElement('div');

  pokemonCard.classList.add('pokemon');

  const pokeTypes = pokemon.types.map( type => type.type.name );
  const type      = mainTypes.find( type => pokeTypes.indexOf( type ) > -1 );
  const name      = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const color     = colors[type];

  pokemonCard.style.backgroundColor = color;

  const pokeInnerHTML = `
        <div class="img-container">
          <img src="https://pokeres.bastionbot.org/images/pokemon/${
               pokemon.id
               }.png" alt="${ name }" />
        </div>

        <div class="info">
             <span class"number">
                   #${ pokemon.id.toString().padStart(3, '0') }
             </span>
             <h3 class="name">${ name }</h3>
             <small class="type">Type: <span>${ type }</span></small>
        </div>
  `;

  pokemonCard.innerHTML = pokeInnerHTML;

  pokeContainer.appendChild(pokemonCard);
};

fetchPokemons();