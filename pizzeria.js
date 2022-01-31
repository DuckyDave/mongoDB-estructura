var db = connect('mongodb://localhost/pizzeria');
/* categories pizza */
db.createCollection('categoria_pizza');
db.categoria_pizza.insertMany([
    {
        _id: 1,
        nom: '3 pizzes mitjanes a 9.45 cadascuna a domicili'
    },
    {
        _id: 2,
        nom: 'Mitjanes a 5.95 a recollir en botiga'
    },
    {
        _id: 3,
        nom: 'Pizza mitjana més beguda a 9.95 a domicili'
    }
]);
/* productes a la venda */
db.createCollection('producte');
db.producte.insertMany([
    {
        _id: 1,
        nom: 'Pizza mitjana Carbonara',
        descripcio: 'Masa fresca, doble de bacon, champinyons, salsa carbonara, formatge fos i extra de formatge fos',
        imatge: 'imatges/carbonara.jpg',
        preu: 9.45,
        tipus: 'pizza',
        categoria_pizza_id: 1
    },
    {
        _id: 2,
        nom: 'Pizza mitjana Pepperoni',
        descripcio: 'La nostra masa de sempre acompanyada de doble racció de pepperoni i formatge fos.',
        imatge: 'imatges/pepperoni.jpg',
        preu: 9.45,
        tipus: 'pizza',
        categoria_pizza_id: 1
    },
    {
        _id: 3,
        nom: 'Pizza mitjana 4 formatges',
        descripcio: 'Masa fresca, mescla de quatre formatges i tomàquet.',
        imatge: 'imatges/4quesos.jpg',
        preu: 9.45,
        tipus: 'pizza',
        categoria_pizza_id: 1
    },
    {
        _id: 4,
        nom: 'Pizza mitjana Barbacoa',
        descripcio: 'MMasa fresca, bacon, pollastre, formatge fos, salsa barbacoa i doble de carn de bou.',
        imatge: 'imatges/carbonara.jpg',
        preu: 9.45,
        tipus: 'pizza',
        categoria_pizza_id: 1
    },
    {
        _id: 5,
        nom: 'Pizza mitjana Carbonara',
        descripcio: 'Masa fresca, doble de bacon, champinyons, salsa carbonara, formatge fos i extra de formatge fos',
        imatge: 'imatges/carbonara.jpg',
        preu: 5.95,
        tipus: 'pizza',
        categoria_pizza_id: 2,
    },
    {
        _id: 6,
        nom: 'Pizza mitjana Pepperoni',
        descripcio: 'La nostra masa de sempre acompanyada de doble racció de pepperoni i formatge fos.',
        imatge: 'imatges/pepperoni.jpg',
        preu: 5.95,
        tipus: 'pizza',
        categoria_pizza_id: 2
    },
    {
        _id: 7,
        nom: 'Pizza mitjana 4 formatges',
        descripcio: 'Masa fresca, mescla de quatre formatges i tomàquet.',
        imatge: 'imatges/4quesos.jpg',
        preu: 5.95,
        tipus: 'pizza',
        categoria_pizza_id: 2
    },
    {
        _id: 8,
        nom: 'Pizza mitjana Barbacoa',
        descripcio: 'MMasa fresca, bacon, pollastre, formatge fos, salsa barbacoa i doble de carn de bou.',
        imatge: 'imatges/carbonara.jpg',
        preu: 5.95,
        tipus: 'pizza',
        categoria_pizza_id: 2
    },
    {
        _id: 9,
        nom: 'Pizza mitjana Carbonara',
        descripcio: 'Masa fresca, doble de bacon, champinyons, salsa carbonara, formatge fos i extra de formatge fos',
        imatge: 'imatges/carbonara.jpg',
        preu: 7.00,
        tipus: 'pizza',
        categoria_pizza_id: 3
    },
    {
        _id: 10,
        nom: 'Pizza mitjana Pepperoni',
        descripcio: 'La nostra masa de sempre acompanyada de doble racció de pepperoni i formatge fos.',
        imatge: 'imatges/pepperoni.jpg',
        preu: 7.00,
        tipus: 'pizza',
        categoria_pizza_id: 3
    },
    {
        _id: 11,
        nom: 'Pizza mitjana 4 formatges',
        descripcio: 'Masa fresca, mescla de quatre formatges i tomàquet.',
        imatge: 'imatges/4quesos.jpg',
        preu: 7.00,
        tipus: 'pizza',
        categoria_pizza_id: 3
    },
    {
        _id: 12,
        nom: 'Pizza mitjana Barbacoa',
        descripcio: 'MMasa fresca, bacon, pollastre, formatge fos, salsa barbacoa i doble de carn de bou.',
        imatge: 'imatges/carbonara.jpg',
        preu: 7.00,
        tipus: 'pizza',
        categoria_pizza_id: 3
    },
    {
        _id: 13,
        nom: 'Clàsica',
        descripcio: 'La nostra carn a la graella, acompanyada de cogombret, kétchup i mostassa.',
        imatge: 'imatges/burguer.jpg',
        preu: 4.95,
        tipus: 'hamburguesa',
        categoria_pizza_id: null
    },
    {
        _id: 14,
        nom: 'Pollastre',
        descripcio: 'Carn de pollastre empanat i lleugerament especiat, enciam i maionesa',
        imatge: 'imatges/pepperoni.jpg',
        preu: 4.95,
        tipus: 'hamburguesa',
        categoria_pizza_id: null
    },
    {
        _id: 15,
        nom: 'Coca-cola',
        descripcio: 'Sent la seva màgia',
        imatge: 'imatges/Coca-cola.jpg',
        preu: 2.95,
        tipus: 'begudes',
        categoria_pizza_id: null
    }
]);
 /* provincies */
 db.createCollection('provincia');
 db.provincia. insertOne(
     {
        _id: 1,
        nom: 'Barcelona'
     }
 );
 /* localitats */
 db.createCollection('localitat');
 db.localitat.insertMany([
 {
     _id: 1, nom: 'Igualada',
     provincia_id: 1
 },
 {
     _id: 2, nom: 'Santa Margarida de montbui',
     provincia_id: 1
 },
 {
     _id: 3, nom: 'Vilanova del Camí',
     provincia_id: 1
 }
 ]);
/* dades botiga */
db.createCollection('botiga');
db.botiga.insertMany([
    {
        _id: 1,
        carrer: 'Avinguda Caresmar',
        numero: '23',
        codi_postal: '08700',
        localitat_id: 1,
        telefon: '938053838'
    }
]);
/* Empleats de la pizzeria */
db.createCollection('empleat');
db.empleat.insertMany([
    {
        _id: 1,
        nom: 'Judit',
        cognoms: 'Sans Poblet',
        nif: '26507643M',
        telefon: '621547813',
        rol: 'repartidor',
        botiga_id: 1
    },
    {
        _id: 2,
        nom: 'Francesc',
        cognoms: 'Hernandez Doncel',
        nif: '43598611H',
        telefon: '687285193',
        rol: 'cuiner',
        botiga_id: 1
    },
    {
        _id: 3,
        nom: 'Anna Maria',
        cognoms: 'Verdú Castells',
        nif: '28568625A',
        telefon: '647276917',
        rol: 'cuiner',
        botiga_id: 1
    },
    {
        _id: 4,
        nom: 'Albert',
        cognoms: 'Compte Oriol',
        nif: '98921097Y',
        telefon: '697523748',
        rol: 'repartidor',
        botiga_id: 1
    }
]);
/* dades clients */
db.createCollection('dades_client');
db.dades_client.insertMany([
    {
        _id: 1,
        nom: 'Jordi',
        cognom1: 'Sanchez',
        cognom2: 'Terol',
        carrer: 'Avinguda Jacint Verdaguer',
        numero: '24',
        pis: '3',
        porta: 'A',
        codi_postal: '08700',
        localitat_id: 1,
        telefon: '624879245'
    },
    {
        _id: 2,
        nom: 'Anna',
        cognom1: 'López',
        cognom2: 'Carrillo',
        carrer: 'Carrer de la Virtut',
        numero: '24',
        pis: '4',
        porta: 'A',
        localitat_id: 1,
        codi_postal: '08700',
        telefon: '687541827'
    },
    {
        _id: 3,
        nom: 'Gregori',
        cognom1: 'Jimenez',
        cognom2: 'Alvarez',
        carrer: 'Carrer Major',
        numero: '24',
        pis: '1',
        porta: 'B',
        localitat_id: 3,
        codi_postal: '08788',
        telefon: '699458785'
    },
    {
        _id: 4,
        nom: 'Antonia',
        cognom1: 'Perez',
        cognom2: 'Cobos',
        carrer: 'Carrer Sant Jordi',
        numero: '16',
        pis: '4',
        porta: 'B',
        codi_postal: '08710',
        localitat_id: 2,
        telefon: '632782698',
    },
    {
        _id: 5,
        nom: 'Bernat',
        cognom1: 'Figueres',
        cognom2: 'Roca',
        carrer: 'Avinguda Barcelona',
        numero: '145',
        pis: '2',
        porta: 'B',
        codi_postal: '08700',
        localitat_id: 1,
        telefon: '618205849',
    },
    {
        _id: 6,
        nom: 'Karen',
        cognom1: 'Zuñiga',
        cognom2: 'Flores',
        adreca: 'Carrer Doctor Fleming',
        numero: '9',
        pis: '2',
        porta: 'B',
        codi_postal: '08710',
        localitat_id: 2,
        telefon: '699213515',
    },
    {
        _id: 7,
        nom: 'Alícia',
        cognom1: 'Cárdenas',
        cognom2: 'Herrera',
        adreca: 'Carrer Santa Maria',
        numero: '20',
        pis: '3',
        porta: 'A',
        codi_postal: '08700',
        localitat_id: 1,
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
        client_id: 4,
        tipus: 'repartiment a domicili',
        empleat_id: 4,
        data_hora_domicili: ISODate('2020-05-10T22:15:00Z')
    },
    {
        _id: 2,
        botiga_id: 1,
        data_hora_botiga: ISODate('2020-06-21T20:52:08Z'),
        preu_total: 17.80,
        client_id: 6,
        tipus: 'recollir en botiga',
        empleat_id: null,
        data_hora_domicili: null
    },
    {
        _id: 3,
        botiga_id: 1,
        data_hora_botiga: ISODate('2020-09-26T19:56:01Z'),
        preu_total: 9.95,
        client_id: 2,
        tipus: 'repartiment a domicili',
        empleat_id: 1,
        data_hora_domicili: ISODate('2020-06-21T20:52:08Z')
    }
]);
/* detalls comandes */
db.createCollection('detall_comanda');
db.detall_comanda.insertMany([
    {
        comanda_id: 1,
        pizza_id: 1,
        hamburguesa_id: null,
        begudes_id: null
    },
    {
        comanda_id: 1,
        pizza_id: 2,
        hamburguesa_id: null,
        begudes_id: null,
    },
    {
        comanda_id: 1,
        pizza_id: 3,
        hamburguesa_id: null,
        begudes_id: null,
    }
]);