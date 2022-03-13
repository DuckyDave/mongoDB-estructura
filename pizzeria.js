/* connexió a base de dades */
var db = connect('mongodb://localhost/pizzeria');
/* productes a la venda */
/*
db.createCollection('producte');
db.producte.insertMany([
    {
        nom: 'Pizza mitjana Carbonara',
        descripcio: 'Masa fresca, doble de bacon, champinyons, salsa carbonara, formatge fos i extra de formatge fos',
        imatge: 'imatges/carbonara.jpg',
        preu: 9.45,
        tipus: 'pizzes',
        categoria_pizza: '3 pizzes mitjanes a 9.45 cadascuna a domicili'
    },
    {
        nom: 'Pizza mitjana Pepperoni',
        descripcio: 'La nostra masa de sempre acompanyada de doble racció de pepperoni i formatge fos.',
        imatge: 'imatges/pepperoni.jpg',
        preu: 9.45,
        tipus: 'pizzes',
        categoria_pizza: '3 pizzes mitjanes a 9.45 cadascuna a domicili'
    },
    {
        nom: 'Pizza mitjana 4 formatges',
        descripcio: 'Masa fresca, mescla de quatre formatges i tomàquet.',
        imatge: 'imatges/4quesos.jpg',
        preu: 9.45,
        tipus: 'pizzes',
        categoria_pizza: '3 pizzes mitjanes a 9.45 cadascuna a domicili'
    },
    {
        nom: 'Pizza mitjana Barbacoa',
        descripcio: 'Masa fresca, bacon, pollastre, formatge fos, salsa barbacoa i doble de carn de bou.',
        imatge: 'imatges/carbonara.jpg',
        preu: 9.45,
        tipus: 'pizzes',
        categoria_pizza: '3 pizzes mitjanes a 9.45 cadascuna a domicili'
    },
    {
        nom: 'Pizza mitjana Carbonara',
        descripcio: 'Masa fresca, doble de bacon, champinyons, salsa carbonara, formatge fos i extra de formatge fos',
        imatge: 'imatges/carbonara.jpg',
        preu: 5.95,
        tipus: 'pizzes',
        categoria_pizza: 'Mitjanes a 5.95 a recollir en botiga',
    },
    {
        nom: 'Pizza mitjana Pepperoni',
        descripcio: 'La nostra masa de sempre acompanyada de doble racció de pepperoni i formatge fos.',
        imatge: 'imatges/pepperoni.jpg',
        preu: 5.95,
        tipus: 'pizzes',
        categoria_pizza: 'Mitjanes a 5.95 a recollir en botiga'
    },
    {
        nom: 'Pizza mitjana 4 formatges',
        descripcio: 'Masa fresca, mescla de quatre formatges i tomàquet.',
        imatge: 'imatges/4quesos.jpg',
        preu: 5.95,
        tipus: 'pizzes',
        categoria_pizza: 'Mitjanes a 5.95 a recollir en botiga'
    },
    {
        nom: 'Pizza mitjana Barbacoa',
        descripcio: 'Masa fresca, bacon, pollastre, formatge fos, salsa barbacoa i doble de carn de bou.',
        imatge: 'imatges/carbonara.jpg',
        preu: 5.95,
        tipus: 'pizzes',
        categoria_pizza: 'Mitjanes a 5.95 a recollir en botiga'
    },
    {
        nom: 'Pizza mitjana Carbonara',
        descripcio: 'Masa fresca, doble de bacon, champinyons, salsa carbonara, formatge fos i extra de formatge fos',
        imatge: 'imatges/carbonara.jpg',
        preu: 9.95,
        tipus: 'pizzes',
        categoria_pizza: 'Pizza mitjana més beguda a 9.95 a domicili'
    },
    {
        nom: 'Pizza mitjana Pepperoni',
        descripcio: 'La nostra masa de sempre acompanyada de doble racció de pepperoni i formatge fos.',
        imatge: 'imatges/pepperoni.jpg',
        preu: 9.95,
        tipus: 'pizzes',
        categoria_pizza: 'Pizza mitjana més beguda a 9.95 a domicili'
    },
    {
        nom: 'Pizza mitjana 4 formatges',
        descripcio: 'Masa fresca, mescla de quatre formatges i tomàquet.',
        imatge: 'imatges/4quesos.jpg',
        preu: 9.95,
        tipus: 'pizzes',
        categoria_pizza: 'Pizza mitjana més beguda a 9.95 a domicili'
    },
    {
        nom: 'Pizza mitjana Barbacoa',
        descripcio: 'Masa fresca, bacon, pollastre, formatge fos, salsa barbacoa i doble de carn de bou.',
        imatge: 'imatges/carbonara.jpg',
        preu: 9.95,
        tipus: 'pizzes',
        categoria_pizza: 'Pizza mitjana més beguda a 9.95 a domicili'
    },
    {
        nom: 'Clàsica',
        descripcio: 'La nostra carn a la graella, acompanyada de cogombret, kétchup i mostassa.',
        imatge: 'imatges/burguer.jpg',
        preu: 4.95,
        tipus: 'hamburgueses',
        categoria_pizza: ""
    },
    {
        nom: 'Pollastre',
        descripcio: 'Carn de pollastre empanat i lleugerament especiat, enciam i maionesa',
        imatge: 'imatges/pepperoni.jpg',
        preu: 4.95,
        tipus: 'hamburgueses',
        categoria_pizza: ""
    },
    {
        nom: 'Coca-cola',
        descripcio: 'Ampolla 33cl',
        imatge: 'imatges/coca-cola.jpg',
        preu: 2.35,
        tipus: 'begudes',
        categoria_pizza: ""
    },
    {
        nom: 'Coca-cola (inclosa amb la pizza)',
        descripcio: 'Ampolla 33cl',
        imatge: 'imatges/coca-cola.jpg',
        preu: 0,
        tipus: 'begudes',
        categoria_pizza: ""
    },
    {
        nom: 'Aigua Bezoya',
        descripcio: 'Ampolla 33cl',
        imatge: 'imatges/aigua.jpg',
        preu: 1.5,
        tipus: 'begudes',
        categoria_pizza: ""
    }
]);
/* botiga i empleats */
db.createCollection('botiga');
db.botiga.insertOne({
    botiga_id: 1,
    carrer: 'Avinguda Caresmar',
    numero: '23',
    codi_postal: '08700',
    localitat: 'Igualada',
    telefon: '938053838',
    empleat: [
        {
            nom: 'Judit',
            cognoms: 'Sans Poblet',
            nif: '26507643M',
            telefon: '621547813',
            rol: 'repartidor'
        },
        {
            nom: 'Francesc',
            cognoms: 'Hernandez Doncel',
            nif: '43598611H',
            telefon: '687285193',
            rol: 'cuiner'
        },
        {
            nom: 'Anna Maria',
            cognoms: 'Verdú Castells',
            nif: '28568625A',
            telefon: '647276917',
            rol: 'cuiner'
        },
        {
            nom: 'Albert',
            cognoms: 'Compte Oriol',
            nif: '98921097Y',
            telefon: '697523748',
            rol: 'repartidor'
        }
    ]
});
/* dades clients */
/*
db.createCollection('dades_client');
db.dades_client.insertMany([
    {
        nom: 'Jordi',
        cognom1: 'Sanchez',
        cognom2: 'Terol',
        carrer: 'Avinguda Jacint Verdaguer',
        numero: '24',
        pis: '3',
        porta: 'A',
        codi_postal: '08700',
        localitat: 'Igualada',
        telefon: '624879245'
    },
    {
        nom: 'Anna',
        cognom1: 'Lopez',
        cognom2: 'Carrillo',
        carrer: 'Carrer de la Virtut',
        numero: '24',
        pis: '4',
        porta: 'A',
        localitat: 'Igualada',
        codi_postal: '08700',
        telefon: '687541827'
    },
    {
        nom: 'Gregori',
        cognom1: 'Jimenez',
        cognom2: 'Alvarez',
        carrer: 'Carrer Major',
        numero: '24',
        pis: '1',
        porta: 'B',
        localitat: 'Vilanova del Camí',
        codi_postal: '08788',
        telefon: '699458785'
    },
    {
        nom: 'Antonia',
        cognom1: 'Perez',
        cognom2: 'Cobos',
        carrer: 'Carrer Sant Jordi',
        numero: '16',
        pis: '4',
        porta: 'B',
        codi_postal: '08710',
        localitat: 'Santa Margarida de Montbui',
        telefon: '632782698',
    },
    {
        nom: 'Bernat',
        cognom1: 'Figueres',
        cognom2: 'Roca',
        carrer: 'Avinguda Barcelona',
        numero: '145',
        pis: '2',
        porta: 'B',
        codi_postal: '08700',
        localitat: 'Igualada',
        telefon: '618205849',
    },
    {
        nom: 'Karen',
        cognom1: 'Zuñiga',
        cognom2: 'Flores',
        carrer: 'Carrer Doctor Fleming',
        numero: '9',
        pis: '2',
        porta: 'B',
        codi_postal: '08710',
        localitat: 'Santa Margarida de Montbui',
        telefon: '699213515',
    },
    {
        nom: 'Alícia',
        cognom1: 'Cárdenas',
        cognom2: 'Herrera',
        carrer: 'Carrer Santa Maria',
        numero: '20',
        pis: '3',
        porta: 'A',
        codi_postal: '08700',
        localitat: 'Igualada',
        telefon: '691452387',
    }
]);
/* dades comandes */
db.createCollection('comanda');
db.comanda.insertMany([
    {
        _id: 1,
        botiga_id: 1,
        data_hora_botiga: ISODate('2020-05-18T19:45:12Z'),
        preu_total: 28.35,
        client: {
            nom: 'Antonia',
            cognom1: 'Perez',
            cognom2: 'Cobos',
            carrer: 'Carrer Sant Jordi',
            numero: '16',
            pis: '4',
            porta: 'B',
            codi_postal: '08710',
            localitat: 'Santa Margarida de Montbui',
            telefon: '632782698',
        },
        tipus: 'repartiment a domicili',
        empleat: {
            nom: 'Albert',
            rol: 'repartidor'
        },
        data_hora_domicili: ISODate('2020-05-10T22:15:00Z'),
        detall_comanda: {
            pizza: [
                {
                    nom: 'Pizza mitjana Carbonara',
                    descripcio: 'Masa fresca, doble de bacon, champinyons, salsa carbonara, formatge fos i extra de formatge fos',
                    imatge: 'imatges/carbonara.jpg',
                    preu: 9.45,
                    tipus: 'pizzes',
                    categoria_pizza: '3 pizzes mitjanes a 9.45 cadascuna a domicili'
                },
                {
                    nom: 'Pizza mitjana Pepperoni',
                    descripcio: 'La nostra masa de sempre acompanyada de doble racció de pepperoni i formatge fos.',
                    imatge: 'imatges/pepperoni.jpg',
                    preu: 9.45,
                    tipus: 'pizzes',
                    categoria_pizza: '3 pizzes mitjanes a 9.45 cadascuna a domicili'
                },
                {
                    nom: 'Pizza mitjana 4 formatges',
                    descripcio: 'Masa fresca, mescla de quatre formatges i tomàquet.',
                    imatge: 'imatges/4quesos.jpg',
                    preu: 9.45,
                    tipus: 'pizzes',
                    categoria_pizza: '3 pizzes mitjanes a 9.45 cadascuna a domicili'
                }
            ],
            hamburguesa: [],
            beguda: []
        }
    },
    {
        _id: 2,
        botiga: {
            carrer: 'Avinguda Caresmar',
            numero: '23',
            codi_postal: '08700',
            localitat: 'Igualada',
            telefon: '938053838',
        },
        data_hora_botiga: ISODate('2020-06-21T20:52:08Z'),
        preu_total: 16.6,
        client: {
            nom: 'Karen',
            cognom1: 'Zuñiga',
            cognom2: 'Flores',
            carrer: 'Carrer Doctor Fleming',
            numero: '9',
            pis: '2',
            porta: 'B',
            codi_postal: '08710',
            localitat: 'Santa Margarida de Montbui',
            telefon: '699213515',
        },
        tipus: 'recollir en botiga',
        'botiga.empleat': {
            nom: "Albert",
            rol: 'repartidor'
        },
        data_hora_domicili: null,
        detall_comanda: {
            pizza: [
                {
                    nom: 'Pizza mitjana Carbonara',
                    descripcio: 'Masa fresca, doble de bacon, champinyons, salsa carbonara, formatge fos i extra de formatge fos',
                    imatge: 'imatges/carbonara.jpg',
                    preu: 5.95,
                    tipus: 'pizzes',
                    categoria_pizza: 'Mitjanes a 5.95 a recollir en botiga',
                },
                {
                    nom: 'Pizza mitjana Pepperoni',
                    descripcio: 'La nostra masa de sempre acompanyada de doble racció de pepperoni i formatge fos.',
                    imatge: 'imatges/pepperoni.jpg',
                    preu: 5.95,
                    tipus: 'pizzes',
                    categoria_pizza: 'Mitjanes a 5.95 a recollir en botiga'
                }
            ],
            hamburguesa: [],
            beguda: [
                {
                    nom: 'Coca-cola',
                    descripcio: 'Ampolla 33cl',
                    imatge: 'imatges/coca-cola.jpg',
                    preu: 2.35,
                    tipus: 'begudes',
                    categoria_pizza: ""
                },
                {
                    nom: 'Coca-cola',
                    descripcio: 'Ampolla 33cl',
                    imatge: 'imatges/coca-cola.jpg',
                    preu: 2.35,
                    tipus: 'begudes',
                    categoria_pizza: ""
                }
            ]
        }
    },
    {
        _id: 3,
        botiga: {
            carrer: 'Avinguda Caresmar',
            numero: '23',
            codi_postal: '08700',
            localitat: 'Igualada',
            telefon: '938053838',
        },
        data_hora_botiga: ISODate('2020-09-26T19:56:01Z'),
        preu_total: 9.95,
        client: {
             nom: 'Anna',
            cognom1: 'Lopez',
            cognom2: 'Carrillo',
            carrer: 'Carrer de la Virtut',
            numero: '24',
            pis: '4',
            porta: 'A',
            localitat: 'Igualada',
            codi_postal: '08700',
            telefon: '687541827'
        },
        tipus: 'repartiment a domicili',
        'botiga.empleat': {
            nom: 'Judit',
            rol: 'repartidor'
        },
        data_hora_domicili: ISODate('2020-06-21T20:52:08Z'),
        detall_comanda: {
            pizza: [
                {
                    nom: 'Pizza mitjana Barbacoa',
                    descripcio: 'Masa fresca, bacon, pollastre, formatge fos, salsa barbacoa i doble de carn de bou.',
                    imatge: 'imatges/carbonara.jpg',
                    preu: 9.95,
                    tipus: 'pizzes',
                    categoria_pizza: 'Pizza mitjana més beguda a 9.95 a domicili'
                }
            ],
            hamburguesa: [],
            beguda: [
                {
                    nom: 'Coca-cola (inclosa amb la pizza)',
                    descripcio: 'Ampolla 33cl',
                    imatge: 'imatges/coca-cola.jpg',
                    preu: 0,
                    tipus: 'begudes',
                    categoria_pizza: ""
                }
            ]
        }
    },
    {
        _id: 4,
        botiga: {
            carrer: 'Avinguda Caresmar',
            numero: '23',
            codi_postal: '08700',
            localitat: 'Igualada',
            telefon: '938053838',
        },
        data_hora_botiga: ISODate('2020-10-02T20:02:09Z'),
        preu_total: 17.25,
        client: {
            nom: 'Bernat',
            cognom1: 'Figueres',
            cognom2: 'Roca',
            carrer: 'Avinguda Barcelona',
            numero: '145',
            pis: '2',
            porta: 'B',
            codi_postal: '08700',
            localitat: 'Igualada',
            telefon: '618205849',
        },
        tipus: 'repartiment a domicili',
        'botiga.empleat': {
            nom: 'Judit',
            rol: 'repatidor'
        },
        data_hora_domicili: ISODate('2020-10-02T20:18:38Z'),
        detall_comanda: {
            pizza: [
                {
                    nom: 'Pizza mitjana Pepperoni',
                    descripcio: 'La nostra masa de sempre acompanyada de doble racció de pepperoni i formatge fos.',
                    imatge: 'imatges/pepperoni.jpg',
                    preu: 9.95,
                    tipus: 'pizzes',
                    categoria_pizza: 'Pizza mitjana més beguda a 9.95 a domicili'
                }
            ],
            hamburguesa: [
                {
                    nom: 'Hamburguesa Pollastre',
                    descripcio: 'Carn de pollastre empanat i lleugerament especiat, enciam i maionesa',
                    imatge: 'imatges/pepperoni.jpg',
                    preu: 4.95,
                    tipus: 'hamburgueses',
                    categoria_pizza: ""
                }
            ],
            beguda: [
                {
                    nom: 'Coca-cola (inclosa amb la pizza)',
                    descripcio: 'Ampolla 33cl',
                    imatge: 'imatges/coca-cola.jpg',
                    preu: 0,
                    tipus: 'begudes',
                    categoria_pizza: ""
                },
                {
                    nom: 'Coca-cola',
                    descripcio: 'Ampolla 33cl',
                    imatge: 'imatges/coca-cola.jpg',
                    preu: 2.35,
                    tipus: 'begudes',
                    categoria_pizza: ""
                }
            ]
        }
    },
    {
        _id: 5,
        botiga: {
            carrer: 'Avinguda Caresmar',
            numero: '23',
            codi_postal: '08700',
            localitat: 'Igualada',
            telefon: '938053838',
        },
        data_hora_botiga: ISODate('2020-10-30T17:25:00Z'),
        preu_total: 9.95,
        client: {
            nom: 'Jordi',
            cognom1: 'Sanchez',
            cognom2: 'Terol',
            carrer: 'Avinguda Jacint Verdaguer',
            numero: '24',
            pis: '3',
            porta: 'A',
            codi_postal: '08700',
            localitat: 'Igualada',
            telefon: '624879245'
        },
        tipus: 'repartiment a domicili',
        'botiga.empleat': {
            nom: 'Judit',
            rol: 'repartidor'
        },
        data_hora_domicili: ISODate('2020-10-30T21:56:02Z'),
        detall_comanda: {
            pizza: [
                {
                    nom: 'Pizza mitjana 4 formatges',
                    descripcio: 'Masa fresca, mescla de quatre formatges i tomàquet.',
                    imatge: 'imatges/4quesos.jpg',
                    preu: 9.95,
                    tipus: 'pizzes',
                    categoria_pizza: 'Pizza mitjana més beguda a 9.95 a domicili'
                }
            ],
            hamburguesa: [],
            beguda: [
                {
                    nom: 'Coca-cola (inclosa amb la pizza)',
                    descripcio: 'Ampolla 33cl',
                    imatge: 'imatges/coca-cola.jpg',
                    preu: 0,
                    tipus: 'begudes',
                    categoria_pizza: ""
                }
            ]
        }
    },
    {
        _id: 6,
        botiga: {
            carrer: 'Avinguda Caresmar',
            numero: '23',
            codi_postal: '08700',
            localitat: 'Igualada',
            telefon: '938053838',
        },
        data_hora_botiga: ISODate('2020-11-05T20:01:45Z'),
        preu_total: 7.3,
        client: {
            nom: 'Gregori',
            cognom1: 'Jimenez',
            cognom2: 'Alvarez',
            carrer: 'Carrer Major',
            numero: '24',
            pis: '1',
            porta: 'B',
            localitat: 'Vilanova del Camí',
            codi_postal: '08788',
            telefon: '699458785'
        },
        tipus: 'repartiment a domicili',
        'botiga.empleat': {
            nom: 'Albert',
            rol: 'repartidor'
        },
        data_hora_domicili: ISODate('2020-11-05T20:29:50Z'),
        detall_comanda: {
            pizza: [],
            hamburguesa: [
                {
                    nom: 'Hamburguesa Clàsica',
                    descripcio: 'La nostra carn a la graella, acompanyada de cogombret, kétchup i mostassa.',
                    imatge: 'imatges/burguer.jpg',
                    preu: 4.95,
                    tipus: 'hamburgueses',
                    categoria_pizza: ""
                }
            ],
            beguda: [
                {
                    nom: 'Coca-cola',
                    descripcio: 'Ampolla 33cl',
                    imatge: 'imatges/coca-cola.jpg',
                    preu: 2.35,
                    tipus: 'begudes',
                    categoria_pizza: ""
                }
            ]
        }
    },
    {
        _id: 7,
        botiga: {
            carrer: 'Avinguda Caresmar',
            numero: '23',
            codi_postal: '08700',
            localitat: 'Igualada',
            telefon: '938053838',
        },
        data_hora_botiga: ISODate('2020-11-08T17:27:03Z'),
        preu_total: 26.35,
        client: {
            nom: 'Alícia',
            cognom1: 'Cárdenas',
            cognom2: 'Herrera',
            carrer: 'Carrer Santa Maria',
            numero: '20',
            pis: '3',
            porta: 'A',
            codi_postal: '08700',
            localitat: 'Igualada',
            telefon: '691452387',
        },
        tipus: 'repartiment a domicili',
        'botiga.empleat': {
            nom: 'Judit',
            rol: 'repartidor'
        },
        data_hora_domicili: ISODate('2020-12-02T20:13:02Z'),
        detall_comanda: {
            pizza: [
                {
                    nom: 'Pizza mitjana Barbacoa',
                    descripcio: 'Masa fresca, bacon, pollastre, formatge fos, salsa barbacoa i doble de carn de bou.',
                    imatge: 'imatges/carbonara.jpg',
                    preu: 9.95,
                    tipus: 'pizzes',
                    categoria_pizza: 'Pizza mitjana més beguda a 9.95 a domicili'
                },
                {
                    nom: 'Pizza mitjana Carbonara',
                    descripcio: 'Masa fresca, doble de bacon, champinyons, salsa carbonara, formatge fos i extra de formatge fos',
                    imatge: 'imatges/carbonara.jpg',
                    preu: 9.95,
                    tipus: 'pizzes',
                    categoria_pizza: 'Pizza mitjana més beguda a 9.95 a domicili'
                }  
            ],
            hamburguesa: [
                {
                    nom: 'Hamburguesa Pollastre',
                    descripcio: 'Carn de pollastre empanat i lleugerament especiat, enciam i maionesa',
                    imatge: 'imatges/pepperoni.jpg',
                    preu: 4.95,
                    tipus: 'hamburgueses',
                    categoria_pizza: ""
                }
            ],
            beguda: [
                {
                    nom: 'Coca-cola (inclosa amb la pizza)',
                    descripcio: 'Ampolla 33cl',
                    imatge: 'imatges/coca-cola.jpg',
                    preu: 0,
                    tipus: 'begudes',
                    categoria_pizza: ""
                },
                {
                    nom: 'Coca-cola (inclosa amb la pizza)',
                    descripcio: 'Ampolla 33cl',
                    imatge: 'imatges/coca-cola.jpg',
                    preu: 0,
                    tipus: 'begudes',
                    categoria_pizza: ""
                },
                {
                    nom: 'Aigua Bezoya',
                    descripcio: 'Ampolla 33cl',
                    imatge: 'imatges/aigua.jpg',
                    preu: 1.5,
                    tipus: 'begudes',
                    categoria_pizza: ""
                }
            ]
        }
    }
]);