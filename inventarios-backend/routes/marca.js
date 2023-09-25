const { Roter, Router } = require("express");
const { validationResult, check, body } = require("express-validator");
const Marca = require("../models/Marca");

const router = Roter();

router.get('/', async function(req, res){
    try {
        const marcas = await Marca.find();
        res.send(marcas);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
});

router.post('/',
[
    check('nombre', 'nombre.requerido').not().isEmpty(),
    check('estado', 'Estado.requerido').isIn(['Activo', 'Inactivo']),
],
async function(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({messages: errors.array() });
        }

        let marca = new Marca();
        marca.nombre = req.body.nombre;
        marca.estado = req.body.estado;
        marca.fechaCreacion = new Date();
        marca.FechaActualizacion = new Date(); 

        marca = await marca.save();

        res.send(marca);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error');
    }
});

router.put('/:marcaId',
    [
        check('nombre', 'nombre.requerido').not().isEmpty(),
        check('estado', 'estado.requerido').isIn(['Activo', 'Inactivo']),
    ],
    async function(req, res) {
        try {
            let marca = await Marca.findById(req.params.marcaId);
            if (!marca) {
                return res.send('Marca no existe');
            }

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({messages: errors.array() });
            }

            marca.nombre = req.body.nombre;
            marca.estado = req.body.estado;
            marca.FechaActualizacion = new Date();

            marca = await marca.save();

            res.send(marca);
        } catch (error) {
            console.log(error);
            res.send('Ocurrio un Error');
        }
});

module.exports = router;