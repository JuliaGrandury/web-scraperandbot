//Index 0 = Archipel des Glenans/Concarneau, Index 1 = Ile d'Arz, Index 2 = Marseillan
const locationIds = ['D4pfmQAB', '3aCLJQA2', '3a8y4QAA'];

//Implementing a Hash Table Data Structure
class HashTable {
    constructor(){
        this.table = new Array(12)
        this.size = 0;
    }
    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){

        }
    }
}

//make a hashmap?
//['Catamaran', 'Dériveur', 'Windsurf']
//['1', '2', '3', '4', '4FFV']


const makeLink = (obj) => {
    let locIndex = obj['location'];
    let supportIndex = obj['support'];
    let levelIndex = obj['level'];
    console.log(`Current Location is ${currentLocation}`);
    console.log(`Current Support is ${currentSupport}`);
    console.log(`Current Level is ${currentLevel}`);

    let loc = locationIds[locIndex];
    return `https://www.glenans.asso.fr/stages/${type}location=a070Y00000${loc}`
}


//WRITE FUNCTION TO MAKE REQUESTED COURSE LINK HERE
//WINDSURF || NIV: 1/2, 3/4 OU 4FFV || LOC: CONCAR, MARSEILLAN
//CATAMARAN || NIV: 1, 2, 3, 4, 4FFV || LOC: CONCAR, ILE D'ARZ/VANNES, MARSEILLAN
//DERIVEUR || NIV: 1/2, 3, 4, 4FFV || LOC: CONCAR, ILE D'ARZ/VANNES, MARSEILLAN

//NIV 1/2 A CONCAR - https://www.glenans.asso.fr/stages/windsurf-niveaux-1-2--01t0Y0000099ZvqQAE?location=a070Y00000D4pfmQAB
//NIV 3/4 A CONCAR - https://www.glenans.asso.fr/stages/windsurf-niveaux-3-4--01t0Y0000099ZvTQAU?location=a070Y00000D4pfmQAB
//NIV 4FFV A CONCAR - https://www.glenans.asso.fr/stages/niveau-technique-4-ffv-windsurf--01t0Y0000099ZxXQAU?location=a070Y00000D4pfmQAB
//NIV 1/2 A MARSEILLAN - https://www.glenans.asso.fr/stages/windsurf-niveaux-1-2--01t0Y0000099ZvqQAE?location=a070Y000003aCLJQA2
//NIV 3/4 A MARSEILLAN - https://www.glenans.asso.fr/stages/windsurf-niveaux-3-4--01t0Y0000099ZvTQAU?location=a070Y000003aCLJQA2
//NIV 4FFV A MARSEILLAN - https://www.glenans.asso.fr/stages/niveau-technique-4-ffv-windsurf--01t0Y0000099ZxXQAU?location=a070Y000003aCLJQA2

//CATA NIV 1 CONCAR - https://www.glenans.asso.fr/stages/catamaran-niveau-1--01t0Y0000099Zy6QAE?location=a070Y00000D4pfmQAB
//CATA NIV 1 MARSEILLAN - https://www.glenans.asso.fr/stages/catamaran-niveau-1--01t0Y0000099Zy6QAE?location=a070Y000003aCLJQA2
//CATA NIV 1 ILE DARZ - https://www.glenans.asso.fr/stages/catamaran-niveau-1--01t0Y0000099Zy6QAE?location=a070Y000003a8y4QAA
//CATA NIV 2 CONCAR - https://www.glenans.asso.fr/stages/catamaran-niveau-2--01t0Y0000099ZxwQAE?location=a070Y00000D4pfmQAB
//CATA NIV 2 MARSEILLAN - https://www.glenans.asso.fr/stages/catamaran-niveau-2--01t0Y0000099ZxwQAE?location=a070Y000003aCLJQA2
//CATA NIV 2 ILE DARZ - https://www.glenans.asso.fr/stages/catamaran-niveau-2--01t0Y0000099ZxwQAE?location=a070Y000003a8y4QAA
//CATA NIV 3 CONCAR - https://www.glenans.asso.fr/stages/catamaran-niveau-3--01t0Y0000099ZwcQAE?location=a070Y00000D4pfmQAB
//CATA NIV 3 MARSEILLAN - https://www.glenans.asso.fr/stages/catamaran-niveau-3--01t0Y0000099ZwcQAE?location=a070Y000003aCLJQA2
//CATA NIV 3 ILE DARZ - https://www.glenans.asso.fr/stages/catamaran-niveau-3--01t0Y0000099ZwcQAE?location=a070Y000003a8y4QAA
//CATA NIV 4 CONCAR - https://www.glenans.asso.fr/stages/catamaran-niveau-4--01t0Y0000099ZxdQAE?location=a070Y00000D4pfmQAB
//CATA NIV 4 MARSEILLAN - https://www.glenans.asso.fr/stages/catamaran-niveau-4--01t0Y0000099ZxdQAE?location=a070Y000003aCLJQA2
//CATA NIV 4 ILE DARZ  - https://www.glenans.asso.fr/stages/catamaran-niveau-4--01t0Y0000099ZxdQAE?location=a070Y000003a8y4QAA
//CATA NIV 4FFV CONCAR - https://www.glenans.asso.fr/stages/niveau-technique-4-ffv-catamaran--01t0Y0000099ZwWQAU?location=a070Y00000D4pfmQAB
//CATA NIV 4FFV MARSEILLAN - https://www.glenans.asso.fr/stages/niveau-technique-4-ffv-catamaran--01t0Y0000099ZwWQAU?location=a070Y000003aCLJQA2
//CATA NIV 4FFV ILE DARZ  -https://www.glenans.asso.fr/stages/niveau-technique-4-ffv-catamaran--01t0Y0000099ZwWQAU?location=a070Y000003a8y4QAA

//DERIV NIV 1/2 CONCAR - https://www.glenans.asso.fr/stages/deriveur-niveaux-1-2--01t0Y0000099a5KQAQ?location=a070Y00000D4pfmQAB
//DERIV NIV 1/2 MARSEILLAN - https://www.glenans.asso.fr/stages/deriveur-niveaux-1-2--01t0Y0000099a5KQAQ?location=a070Y000003aCLJQA2
//DERIV NIV 1/2 ILE DARZ - https://www.glenans.asso.fr/stages/deriveur-niveaux-1-2--01t0Y0000099a5KQAQ?location=a070Y000003a8y4QAA
//DERIV NIV 3 CONCAR - NA
//DERIV NIV 3 MARSEILLAN - https://www.glenans.asso.fr/stages/deriveur-niveau-3--01t0Y0000099ZwsQAE?location=a070Y000003aCLJQA2
//DERIV NIV 3 ILE DARZ - https://www.glenans.asso.fr/stages/deriveur-niveau-3--01t0Y0000099ZwsQAE?location=a070Y000003a8y4QAA
//DERIV NIV 4 CONCAR - https://www.glenans.asso.fr/stages/deriveur-niveau-4--01t0Y0000099a6ZQAQ?location=a070Y00000D4pfmQAB
//DERIV NIV 4 MARSEILLAN - https://www.glenans.asso.fr/stages/deriveur-niveau-4--01t0Y0000099a6ZQAQ?location=a070Y000003aCLJQA2
//DERIV NIV 4 ILE DARZ  - https://www.glenans.asso.fr/stages/deriveur-niveau-4--01t0Y0000099a6ZQAQ?location=a070Y000003a8y4QAA
//DERIV NIV 4FFV CONCAR - https://www.glenans.asso.fr/stages/niveau-technique-4-ffv-deriveur--01t0Y0000099ZygQAE?location=a070Y00000D4pfmQAB
//DERIV NIV 4FFV MARSEILLAN - https://www.glenans.asso.fr/stages/niveau-technique-4-ffv-deriveur--01t0Y0000099ZygQAE?location=a070Y000003aCLJQA2
//DERIV NIV 4FFV ILE DARZ - https://www.glenans.asso.fr/stages/niveau-technique-4-ffv-deriveur--01t0Y0000099ZygQAE?location=a070Y000003a8y4QAA


//NIVEAU 1 ET 2 PLANCHE = windsurf-niveaux-1-2--01t0Y0000099ZvqQAE
//NIVEAU 3 ET 4 PLANCHE = windsurf-niveaux-3-4--01t0Y0000099ZvTQAU
//NIVEAU 4FFV PLANCHE = niveau-technique-4-ffv-windsurf--01t0Y0000099ZxXQAU

//NIVEAU 1 CATA = catamaran-niveau-1--01t0Y0000099Zy6QAE
//NIVEAU 2 CATA = 
//NIVEAU 3 CATA 
//NIVEAU 4 CATA
//NIVEAU 4FFV CATA 

//NIVEAU 1 CATA
//NIVEAU 2 CATA
//NIVEAU 3 CATA 
//NIVEAU 4 CATA
//NIVEAU 4FFV CATA 
