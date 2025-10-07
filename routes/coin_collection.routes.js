import { Router } from "express";




import { getCollectionCoins, addCoinToCollection, deleteCollectionCoin } from "../controller/coin_collection.controller.js";



const coin_collectionRouter = express.Router();


coin_collectionRouter.get("/", getCollectionCoins);
coin_collectionRouter.post("/", addCoinToCollection);
coin_collectionRouter.delete("/:id", deleteCollectionCoin);



export default coin_collectionRouter;
