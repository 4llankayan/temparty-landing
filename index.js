(async () => {
    const database = require('./src/db');
    // const Party = require('./models/party');

    try {
        const dbsync = await database.sync();
        console.log(dbsync);

        // const resultado = await Party.create({
        //   name: 'Temparty',
        //   date: 2021-12-31,
        //   address: 'Rua Orestes Gerin 535',
        //   descricao: 'Primeira edição, atração principal: Dj Jeeh FDC'
        // })

        // console.log(resultado);

    } catch (error) {
        console.log(error);
    }
})();

