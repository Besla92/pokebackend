import { readFile } from 'fs/promises';

const json = JSON.parse(
  await readFile(
    new URL('../src/json/pokedex.json', import.meta.url)
  )
);

json.forEach(element => {
    let id = element.id;
    element.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    element.urlComic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
    element.urlGif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
});


export const getAllPokemon = (req, res, next) =>  {
  if(json)  {
    res.status(200).json(json);
  } else  {
    res.status(500).send("Error")
  }
    
}

export const getSinglePokemon = (req, res, next) => {
  const { id } = req.params;
  const findPokemon = json.find(x => x.id == id)
  if(findPokemon) {
    res.status(200).json(findPokemon)
  } else  {
    res.status(404).send("There is no pokemon with this ID")
  }
}

export const getSinglePokemonInfo = (req, res, next) => {
  const { id } = req.params;
  const { info } = req.params;
  const findPokemon = json.find(x => x.id == id)
  if(findPokemon) {
    res.status(200).json(findPokemon[info])
  } else  {
    res.status(404).send("There is no information about this pokemon")
  }
}
