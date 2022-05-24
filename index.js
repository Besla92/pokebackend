import express from 'express';
import cors from 'cors';
//import pokemonRouter from './routes/pokemonRouter.js'
import { readFile } from 'fs/promises';

const json = JSON.parse(
  await readFile(
    new URL('./src/json/pokedex.json', import.meta.url)
  )
);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//app.use("api/pokemons", pokemonRouter)

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
    console.log(id)
});

app.listen(port, () => {
    console.log(`Server listening on Port ${port}`)
});