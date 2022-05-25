import express from 'express';
import cors from 'cors';
//import pokemonRouter from './routes/pokemonRouter.js'
import { readFile } from 'fs/promises';
import getUser from './client.js';


const json = JSON.parse(
  await readFile(
    new URL('./src/json/pokedex.json', import.meta.url)
  )
);

json.forEach(element => {
    let id = element.id;
    element.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//app.use("api/pokemons", pokemonRouter)
const pokemonPicture = getUser(1);

app.get('/', (req, res, next) =>  {
    res.send("Poke API is ready!")
});

app.get('/api/pokemons', (req, res, next) =>  {
    res.send(json)
});

app.get('/api/pokemon/:id', (req, res, next) =>  {
    const { id } = req.params;
    const findPokemon = json.find(x => x.id == id)
    res.send(findPokemon)
});

app.listen(port, () => {
    console.log(`Server listening on Port ${port}`)
});