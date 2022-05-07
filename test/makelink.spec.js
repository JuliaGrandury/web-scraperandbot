import assert from "assert";
import chai from "chai";
const expect = chai.expect;

import { makeLink } from "../src/makelink.js";
import { TestStage } from "../src/stage.js";

describe('makeLink()', function () {
    it('returns a valid url', function () {
        const param = new TestStage('Marseillan', 'Dériveur', '4');
        const result = makeLink(param);
        const expected1 = 'https://www.glenans.asso.fr/stages/';
        const expected2 = '?location=a070Y00000';
        let included = (result.includes(expected1) && result.includes(expected2)) ? true : false;
        expect(included).to.be.true;
    })
    it('returns the url corresponding to location (Ile d\'Arz) and type (Deriveur 4) passed', function () {
        const param = new TestStage("Île d'Arz", 'Dériveur', '4');
        const expected = 'https://www.glenans.asso.fr/stages/deriveur-niveau-4--01t0Y0000099a6ZQAQ?location=a070Y000003a8y4QAA';
        assert.equal(makeLink(param), expected);
    })
    it('returns the url corresponding to the location (Archipel de Glénan) and type (Windsurf 4FFV) passed', function () {
        const param = new TestStage("Archipel de Glénan", 'Windsurf', '4FFV');
        const expected = 'https://www.glenans.asso.fr/stages/niveau-technique-4-ffv-windsurf--01t0Y0000099ZxXQAU?location=a070Y00000D4pfmQAB';
        assert.equal(makeLink(param), expected);
    })
    it('returns the url corresponding to the location (Marseillan) and type (Catamaran 3) passed', function () {
        const param = new TestStage("Marseillan", 'Catamaran', '3');
        const expected = 'https://www.glenans.asso.fr/stages/catamaran-niveau-3--01t0Y0000099ZwcQAE?location=a070Y000003aCLJQA2';
        assert.equal(makeLink(param), expected);
    })
    it('throws an error if passed an invalid input', function () {
        const param = 1;
        expect(() => makeLink(param)).to.throw(TypeError);
    })
})

