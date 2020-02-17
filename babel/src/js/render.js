function render(data) {
  console.log('Data', data);
  const pokemon = document.createElement('img');
  pokemon.setAttribute('src', data.sprites.front_default);
  console.log('path', data.sprites.front_default);
  document.body.append(pokemon);
}

export default render;
