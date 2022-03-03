var db = connect( 'mongodb://localhost/optica' );
/* dades clients òptica */
db.createCollection('dades_client');
db.dades_client.insertMany([
{
    nom: 'Jordi Sanchez Terol',
    carrer: 'Avinguda Jacint Verdaguer',
    numero: '24',
    pis: '3',
    porta: '1',
    ciutat: 'Igualada',
    codi_postal: '08700',
    telefon: '624879245',
    email: 'jordi.san@gmail.com',
    data_registre: ISODate('2016-09-12T10:06:12Z'),
    recomanat_per_client: ""
},
{
    nom: 'Anna López Carrillo',
    carrer: 'Carrer de la Virtut',
    numero: '24',
    pis: '4',
    porta: '2',
    ciutat: 'Igualada',
    codi_postal: '08700',
    telefon: '687541827',
    email: 'anni_lo@gmail.com',
    data_registre: ISODate('2017-03-05T17:25:03Z'),
    recomanat_per_client: ""
},
{
    nom: 'Gregori Jimenez Alvarez',
    carrer: 'Carrer Major',
    numero: '24',
    pis: '1',
    porta: '2',
    ciutat: 'Vilanova del Camí',
    codi_postal: '08788',
    telefon: '699458785',
    email: 'goyo_123@gmail.com',
    data_registre: ISODate('2018-06-24T11:54:02Z'),
    recomanat_per_client: 'Jordi Sanchez Terol'
},
{
    nom: 'Antonia Perez Cobos',
    carrer: 'Carrer Sant Jordi',
    numero: '16',
    pis: '4',
    porta: '2',
    ciutat: 'Santa Margarida de Montbui',
    codi_postal: '08710',
    telefon: '632782698',
    email: 'antonia_perez_45@gmail.com',
    data_registre: ISODate('2018-10-14T17:16:09Z'),
    recomanat_per_client: ""
},
{
    nom: 'Bernat Figueres Roca',
    carrer: 'Avinguda Barcelona',
    numero: '145',
    pis: '2',
    porta: '2',
    ciutat: 'Igualada',
    codi_postal: '08700',
    telefon: '618205849',
    email: 'bernat_figueres_roca@gmail.com',
    data_registre: ISODate('2019-01-19T11:05:31Z'),
    recomanat_per_client: 'Anna López Carrillo'
},
{
    nom: 'Karen Zuñiga Flores',
    carrer: 'Carrer Doctor. Fleming',
    numero: '9',
    pis: '2',
    porta: '2',
    ciutat: 'Santa Margarida de Montbui',
    codi_postal: '08710',
    telefon: '699213515',
    email: 'karen_zuniga@gmail.com',
    data_registre: ISODate('2019-03-04T10:02:54Z'),
    recomanat_per_client: 'Antonia Perez Cobos'
},
{
    nom: 'Alícia Cárdenas Herrera',
    carrer: 'Carrer Santa Maria',
    numero: '20',
    pis: '3',
    porta: '2',
    ciutat: 'Igualada',
    codi_postal: '08700',
    telefon: '691452387',
    email: 'alicia_cardenasH@gmail.com',
    data_registre: ISODate('2020-04-09T17:58:12Z'),
    recomanat_per_client: 'Karen Zuñiga Flores'
}
]);
/* marques d'ulleres */
db.createCollection('marca');
db.marca.insertMany([
{
    nom: 'Custo Barcelona',
    proveidor: {
        nom: 'Nice Eyewear Group',
        carrer: 'Anniversary Alley',
        numero: '3097',
        pis: null,
        porta: null,
        ciutat: 'Norfolk',
        codi_postal: '23509',
        pais: 'United States',
        telefon: '757-829-0812',
        fax: null,
        nif: '31-6765838'
    }
},
{
    nom: 'Mango',
    proveidor: {
        nom: 'Carter-Wiegand',
        carrer: 'Alpine Park',
        numero: '051',
        pis: null,
        porta: null,
        ciutat: 'Huntsville',
        codi_postal: '35895',
        pais: 'United States',
        telefon: '256-847-7735',
        fax: null,
        nif: '68-1369257'
    }
},
{
    nom: 'Pedro del Hierro',
    proveidor: {
        nom: 'Fortive Corporation',
        carrer: 'Fairfield Hill',
        numero: '4',
        pis: null,
        porta: null,
        ciutat: 'Tucson',
        codi_postal: '85754',
        pais: 'United States',
        telefon: '520-529-2538',
        fax: null,
        nif: '47-4286945'
    }
}
])
/* ulleres disponibles */
db.createCollection('ulleres');
db.ulleres.insertMany([
{
    marca: 'Mango',
    model: 'Robert',
    graduacio_vidres: [1.25, 1.75],
    montura: 'metall',
    color_montura:'blau',
    color_vidres: ['marró','marró'],
    preu: 184.85
},
{
    marca: 'Custo Barcelona',
    model: 'Shake',
    graduacio_vidres: [0.75, 0.75],
    montura: 'pasta',
    color_montura: 'burdeus',
    color_vidres: ['gris', 'gris'],
    preu: 149.85
},
{
    marca: 'Pedro del Hierro',
    model: 'Francesca',
    graduacio_vidres: [-0.5, -0.75],
    montura: 'metall',
    color_montura: 'negre',
    color_vidres: ['violeta', 'violeta'], 
    preu: 199.85
},
{
    marca: 'Pedro del Hierro',
    model: 'Antonella',
    graduacio_vidres: [1.75, 1.25],
    montura: 'flotant',
    color_montura: 'blau',
    color_vidres: ['', ''], 
    preu: 188.85
}
]);
/* dades venda ulleres */
db.createCollection('empleat_ha_venut_ulleres');
db.empleat_ha_venut_ulleres.insertMany([
{
    empleat: 'Francesc',
    ulleres: {
        marca: 'Pedro del Hierro',
        model: 'Antonella',
        graduacio_vidres: [1.75, 1.25],
        montura: 'flotant',
        color_montura: 'blau',
        color_vidres: ['', ''], 
        preu: 188.85
    },
    client: {
        nom: 'Bernat Figueres Roca',
        carrer: 'Avinguda Barcelona',
        numero: '145',
        pis: '2',
        porta: '2',
        ciutat: 'Igualada',
        codi_postal: '08700',
        telefon: '618205849',
        email: 'bernat_figueres_roca@gmail.com',
        data_registre: ISODate('2019-01-19T11:05:31Z'),
        recomanat_per_client: 'Anna López Carrillo'
    },
    data_hora_venda: ISODate('2020-02-26T17:45:00Z')
},
{
    empleat: 'Judit',
    ulleres: {
        marca: 'Pedro del Hierro',
        model: 'Francesca',
        graduacio_vidres: [-0.5, -0.75],
        montura: 'metall',
        color_montura: 'negre',
        color_vidres: ['violeta', 'violeta'], 
        preu: 199.85
    },
    client: {
        nom: 'Anna López Carrillo',
        carrer: 'Carrer de la Virtut',
        numero: '24',
        pis: '4',
        porta: '2',
        ciutat: 'Igualada',
        codi_postal: '08700',
        telefon: '687541827',
        email: 'anni_lo@gmail.com',
        data_registre: ISODate('2017-03-05T17:25:03Z'),
        recomanat_per_client: ""
    },
    data_hora_venda: ISODate('2020-05-05T10:32:21Z')
},
{
    empleat: 'Laia',
    ulleres: {
        marca: 'Mango',
        model: 'Robert',
        graduacio_vidres: [1.25, 1.75],
        montura: 'metall',
        color_montura:'blau',
        color_vidres: ['marró','marró'],
        preu: 184.85
    },
    client: {
        nom: 'Gregori Jimenez Alvarez',
        carrer: 'Carrer Major',
        numero: '24',
        pis: '1',
        porta: '2',
        ciutat: 'Vilanova del Camí',
        codi_postal: '08788',
        telefon: '699458785',
        email: 'goyo_123@gmail.com',
        data_registre: ISODate('2018-06-24T11:54:02Z'),
        recomanat_per_client: 'Jordi Sanchez Terol'
    },
    data_hora_venda: ISODate('2020-06-19T12:08:16Z')
},
{
    empleat: 'Judit',
    ulleres: {
        marca: 'Pedro del Hierro',
        model: 'Antonella',
        graduacio_vidres: [1.75, 1.25],
        montura: 'flotant',
        color_montura: 'blau',
        color_vidres: ['', ''], 
        preu: 188.85
    },
    client: {
        nom: 'Karen Zuñiga Flores',
        carrer: 'Carrer Doctor. Fleming',
        numero: '9',
        pis: '2',
        porta: '2',
        ciutat: 'Santa Margarida de Montbui',
        codi_postal: '08710',
        telefon: '699213515',
        email: 'karen_zuniga@gmail.com',
        data_registre: ISODate('2019-03-04T10:02:54Z'),
        recomanat_per_client: 'Antonia Perez Cobos'
    },
    data_hora_venda: ISODate('2020-07-08T18:26:12Z')
},
{
    empleat: 'Laia',
    ulleres: {
        marca: 'Custo Barcelona',
        model: 'Shake',
        graduacio_vidres: [0.75, 0.75],
        montura: 'pasta',
        color_montura: 'burdeus',
        color_vidres: ['gris', 'gris'],
        preu: 149.85
    },
    client: {
        nom: 'Antonia Perez Cobos',
        carrer: 'Carrer Sant Jordi',
        numero: '16',
        pis: '4',
        porta: '2',
        ciutat: 'Santa Margarida de Montbui',
        codi_postal: '08710',
        telefon: '632782698',
        email: 'antonia_perez_45@gmail.com',
        data_registre: ISODate('2018-10-14T17:16:09Z'),
        recomanat_per_client: ""
    },
    data_hora_venda: ISODate('2020-09-30T16:08:52Z')
},
{
    empleat: 'Laia',
    ulleres: {
        marca: 'Pedro del Hierro',
        model: 'Francesca',
        graduacio_vidres: [-0.5, -0.75],
        montura: 'metall',
        color_montura: 'negre',
        color_vidres: ['violeta', 'violeta'], 
        preu: 199.85
    },
    client: {
        nom: 'Alícia Cárdenas Herrera',
        carrer: 'Carrer Santa Maria',
        numero: '20',
        pis: '3',
        porta: '2',
        ciutat: 'Igualada',
        codi_postal: '08700',
        telefon: '691452387',
        email: 'alicia_cardenasH@gmail.com',
        data_registre: ISODate('2020-04-09T17:58:12Z'),
        recomanat_per_client: 'Karen Zuñiga Flores'
    },
    data_hora_venda: ISODate('2020-10-17T10:45:08Z')
},
{
    empleat:'Judit',
    ulleres: {
        marca: 'Pedro del Hierro',
        model: 'Antonella',
        graduacio_vidres: [1.75, 1.25],
        montura: 'flotant',
        color_montura: 'blau',
        color_vidres: ['', ''], 
        preu: 188.85
    },
    client: {
        nom: 'Anna López Carrillo',
        carrer: 'Carrer de la Virtut',
        numero: '24',
        pis: '4',
        porta: '2',
        ciutat: 'Igualada',
        codi_postal: '08700',
        telefon: '687541827',
        email: 'anni_lo@gmail.com',
        data_registre: ISODate('2017-03-05T17:25:03Z'),
        recomanat_per_client: ""

    },
    data_hora_venda: ISODate('2021-01-14T11:02:45Z')
},
{
    empleat: 'Francesc',
    ulleres: {
        marca: 'Custo Barcelona',
        model: 'Shake',
        graduacio_vidres: [0.75, 0.75],
        montura: 'pasta',
        color_montura: 'burdeus',
        color_vidres: ['gris', 'gris'],
        preu: 149.85
    },
    client: {
        nom: 'Antonia Perez Cobos',
        carrer: 'Carrer Sant Jordi',
        numero: '16',
        pis: '4',
        porta: '2',
        ciutat: 'Santa Margarida de Montbui',
        codi_postal: '08710',
        telefon: '632782698',
        email: 'antonia_perez_45@gmail.com',
        data_registre: ISODate('2018-10-14T17:16:09Z'),
        recomanat_per_client: ""

    },
    data_hora_venda: ISODate('2021-02-05T12:05:21Z')
},
{
    empleat: 'Francesc',
    ulleres: {
        marca: 'Pedro del Hierro',
        model: 'Francesca',
        graduacio_vidres: [-0.5, -0.75],
        montura: 'metall',
        color_montura: 'negre',
        color_vidres: ['violeta', 'violeta'], 
        preu: 199.85
    },
    client: {
        nom: 'Jordi Sanchez Terol',
        carrer: 'Avinguda Jacint Verdaguer',
        numero: '24',
        pis: '3',
        porta: '1',
        ciutat: 'Igualada',
        codi_postal: '08700',
        telefon: '624879245',
        email: 'jordi.san@gmail.com',
        data_registre: ISODate('2016-09-12T10:06:12Z'),
        recomanat_per_client: ""

    },
    data_hora_venda: ISODate('2021-12-15T17:08:52Z')
}
]);