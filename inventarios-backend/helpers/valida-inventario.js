const validarInventario = (req) => {
    const validaciones = [];
    if (!req.body.serial) {
        validaciones.push('Serial es requerido');
    }
    if (!req.body.modelo) {
        validaciones.push('Modelo es Requerido');
    }
    if (!req.body.Descripcion) {
        validaciones.push('Descripción requerida');
    }
    if (!req.body.foto) {
        validaciones.push('Foto es requerida');
    }
    if (!req.body.fechaCompra) {
        validaciones.push ('Fecha de Compra requerida');
    }
    if (!req.body.precio) {
        validaciones.push('Precio es requerido');
    }
    if (!req.body.usuario) {
        validaciones.push ('Usuario es Requerido');
    }
    if (!req.body.marca) {
        validaciones.push ('Marca es Requerido');
    }
    if (!req.body.tipoEquipo) {
        validaciones.push('Tipo del equipo es requerido');
    }
    if (!req.body.estadoEquipo) {
        validaciones.push ('Estado del equipo requerido');
    }
    return validaciones;
};

module.exports = {
    validarInventario,
}