async function search(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  console.log('respuesta', response);
  const pokemon = await response.json();
  console.log('Pokemon', pokemon);
  return pokemon;
}

export default search;
