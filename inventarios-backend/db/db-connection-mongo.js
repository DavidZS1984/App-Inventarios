const mongoose = require ('mongoose');

const getConnection = async () => {

    try {
        const url='mongodb://davidzapata:<Sandraroma1984>@ac-nh8fdxm-shard-00-00.ujtvapy.mongodb.net:27017,ac-nh8fdxm-shard-00-01.ujtvapy.mongodb.net:27017,ac-nh8fdxm-shard-00-02.ujtvapy.mongodb.net:27017/inventarios-app?ssl=true&replicaSet=atlas-xhlgkr-shard-0&authSource=admin&retryWrites=true&w=majority';

        await mongoose.connect(url);

        console.log('conexion exitosa');

    } catch (error) {
        console.log(error);
    }

}

module.exports = {

    getConnection,

}