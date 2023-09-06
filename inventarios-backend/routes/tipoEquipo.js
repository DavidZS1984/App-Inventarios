const { Roter, Router } = require("express");
const { validationResult, check, body } = require("express-validator");
const TipoEquipo = require("../models/TipoEquipo");
const TipoEquipo = require("../models/TipoEquipo");

const router = Router();

router.get("/", async function (req, res) {
  try {
    const tipos = await TipoEquipo.find();
    res.send(tipos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrio un error");
  }
});

Router.post(
  "/",
  [
    check("nombre", "nombre.requerido").not().isEmpty(),
    check("estado", "estado.requerido").isIn(["Activo", "Inactivo"]),
  ],
  async function (req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ messages: errors.array() });
      }

      let tiposipoEquipo = new TipoEquipo();

      tipoEquipo.nombre = req.body.nombre;
      tipoEquipo.estado = req.body.estado;
      tipoEquipo.fechaCreacion = new Date();
      tipoEquipo.fechaActualizacion = new Date();

      tipoEquipo = await tipoEquipo.save();

      res.send(tipoEquipo);
    } catch (error) {
      console.log(error);
      res.status(500).send("Ocurrio un error");
    }
  }
);

Router.put(
  "/:tipoEquipoId",
  [
    check("nombre", "nombre.requerido").not().isEmpty(),
    check("estado", "estado.requerido").isIn(["Activo", "Inactivo"]),
  ],
  async function (req, res) {
    try {
      let tipoEquipo = await TipoEquipo.findById(req.params.tipoEquipoId);
      if (!tipoEquipo) {
        return res.send("Tipo de Equipo no existe");
      }
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ messages: errors.array() });
      }

      tipoEquipo.nombre = req.body.nombre;
      tipoEquipo.estado = req.body.estado;
      tipoEquipo.fechaActualizacion = new Date();

      tipoEquipo = await tipoEquipo.save();

      res.send(tipoEquipo);
    } catch (error) {
      console.log(error);
      res.send("Ocurrio un error");
    }
});

module.exports=router;