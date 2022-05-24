import { readFile } from 'fs/promises';

const json = JSON.parse(
  await readFile(
    new URL('../src/json/pokedex.json', import.meta.url)
  )
);

export const getAllPokemon = (req, res, next) =>  {
    res.send("All Pokemon");
    console.log("All Pokemon");
}

export const getSinglePokemon = (req, res, next) => {
    const { id } = req.params;
    res.send("single pokemon");
    console.log("Single Pokemon");
}