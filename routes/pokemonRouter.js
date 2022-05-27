import { Router } from "express";
import { 
    getAllPokemon,
    getSinglePokemon,
    getSinglePokemonInfo
 } from "../controllers/pokemonController.js";

 const pokemonRouter = Router();

 //An der Route /api/pokemons soll GET akzeptiert werden
 pokemonRouter.route("/").get(getAllPokemon);

 pokemonRouter.route("/:id").get(getSinglePokemon);

 pokemonRouter.route("/:id/:info").get(getSinglePokemonInfo)

 export default pokemonRouter;