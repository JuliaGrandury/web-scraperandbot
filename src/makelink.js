const locationIds = {
    'Archipel de Glénan' : 'D4pfmQAB', 
    'Île d\'Arz' : '3aCLJQA2', 
    'Marseillan' : '3a8y4QAA'
}

const types = {
    'Catamaran1' : 'catamaran-niveau-1--01t0Y0000099Zy6QAE',
    'Catamaran2' : 'catamaran-niveau-2--01t0Y0000099ZxwQAE',
    'Catamaran3' : 'catamaran-niveau-3--01t0Y0000099ZwcQAE',
    'Catamaran4' : 'catamaran-niveau-4--01t0Y0000099ZxdQAE',
    'Catamaran4FFV' : 'niveau-technique-4-ffv-catamaran--01t0Y0000099ZwWQAU',
    'Dériveur1' : 'stages/deriveur-niveaux-1-2--01t0Y0000099a5KQAQ',
    'Dériveur2' : 'stages/deriveur-niveaux-1-2--01t0Y0000099a5KQAQ',
    'Dériveur3' : 'deriveur-niveau-3--01t0Y0000099ZwsQAE',
    'Dériveur4' : 'deriveur-niveau-4--01t0Y0000099a6ZQAQ',
    'Dériveur4FFV' : 'niveau-technique-4-ffv-deriveur--01t0Y0000099ZygQAE',
    'Windsurf1' : 'windsurf-niveaux-1-2--01t0Y0000099ZvqQAE',
    'Windsurf2' : 'windsurf-niveaux-1-2--01t0Y0000099ZvqQAE',
    'Windsurf3': 'windsurf-niveaux-3-4--01t0Y0000099ZvTQAU',
    'Windsurf4': 'windsurf-niveaux-3-4--01t0Y0000099ZvTQAU',
    'Windsurf4FFV' : 'niveau-technique-4-ffv-windsurf--01t0Y0000099ZxXQAU'
}

export const makeLink = (obj) => {

    let loc = locationIds[obj['location']];
    let type = types[obj['support'] + obj['level']];

    return `https://www.glenans.asso.fr/stages/${type}?location=a070Y00000${loc}`;
}

//FOR TESTING
//makeLink({'location': "Île d'Arz", 'support':'Dériveur', 'level':'4'});

//TO LIMIT USER INPUT IN FUTURE
//WINDSURF || NIV: 1/2, 3/4 OU 4FFV || LOC: CONCAR, MARSEILLAN
//CATAMARAN || NIV: 1, 2, 3, 4, 4FFV || LOC: CONCAR, ILE D'ARZ/VANNES, MARSEILLAN
//DERIVEUR || NIV: 1/2, 3, 4, 4FFV || LOC: CONCAR, ILE D'ARZ/VANNES, MARSEILLAN
