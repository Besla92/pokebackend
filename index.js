import express from 'express';
import cors from 'cors';
import pokemonRouter from './routes/pokemonRouter.js'

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/pokemons", pokemonRouter)

app.get('/', (req, res, next) =>  {
    res.send("Poke API is ready!")
});

app.listen(port, () => {
    console.log(`Server listening on Port ${port}`)
});