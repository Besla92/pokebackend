import { Router } from "express";
import { 
    getAllPokemon,
    getSinglePokemon
 } from "../controllers/pokemonController.js";

 const pokemonRouter = Router();

 //An der Route /api/pokemons soll GET akzeptiert werden
 pokemonRouter.route("/").get(getAllPokemon);

 pokemonRouter.route("/:id").get(getSinglePokemon);

 export default pokemonRouter;