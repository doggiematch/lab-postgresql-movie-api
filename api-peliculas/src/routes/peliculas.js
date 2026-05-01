// src/routes/peliculas.js
const { Router } = require("express");
const {
  listarPeliculas,
  obtenerPelicula,
  crearPelicula,
  actualizarPelicula,
  eliminarPelicula,
  listarResenas,
  crearResena,
} = require("../controllers/peliculasController");

const router = Router();

router.get("/", listarPeliculas);
router.post("/", crearPelicula);

router.get("/:id/resenas", listarResenas);
router.post("/:id/resenas", crearResena);

router.get("/:id", obtenerPelicula);
router.put("/:id", actualizarPelicula);
router.delete("/:id", eliminarPelicula);

module.exports = router;
