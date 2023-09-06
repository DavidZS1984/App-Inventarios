const mongoose = require ('mongoose');

const getConnection = async () => {

    try {
        const url= 'mongodb+srv://davidzapata:<Sandraroma1984>@cluster0.ujtvapy.mongodb.net/inventarios_app?retryWrites=true&w=majority';

        await mongoose.connect(url);

        console.log('conexion exitosa');

    } catch (error) {
        console.log(error);
    }

    module.exports = {

        getConnection,

    }



}