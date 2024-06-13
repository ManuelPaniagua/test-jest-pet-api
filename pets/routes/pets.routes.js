// pets.routes.js

import express from "express";
import {
  listPets,
  getPet,
  editPet,
  addPet,
  deletePet,
} from "../controllers/pets.controllers.js";

const router = express.Router();

router.get("/", listPets);        // GET /pets
router.get("/:id", getPet);       // GET /pets/:id
router.put("/:id", editPet);      // PUT /pets/:id
router.post("/", addPet);         // POST /pets
router.delete("/:id", deletePet); // DELETE /pets/:id

export default router;
