import assert from "assert";
import chai from "chai";
const expect = chai.expect;

import { formatWeeks, formatMonths, formatSpots, formatPrices, fetchSummary } from "../src/formatting.js";

describe('formatWeeks()', function () {
    it('returns an array of strings with the full day name, day number and day month', function () {
        const typicalWeeksInput = 'sam14maisam28maisam11juinsam11juinsam6aoûtsam13aoûtsam20aoûtsam27aoûtsam3septsam24septsam24septsam1octsam22octsam29octsam29octsam5novven11novsam12nov';
        const expected = ['samedi 14 mai', 'samedi 28 mai', 'samedi 11 juin', 'samedi 11 juin',
            'samedi 6 aout', 'samedi 13 aout', 'samedi 20 aout', 'samedi 27 aout',
            'samedi 3 septembre', 'samedi 24 septembre', 'samedi 24 septembre', 'samedi 1 octobre',
            'samedi 22 octobre', 'samedi 29 octobre', 'samedi 29 octobre', 'samedi 5 novembre',
            'vendredi 11 novembre', 'samedi 12 novembre'];
        assert.deepEqual(formatWeeks(typicalWeeksInput), expected);
    })
    it('throws an error if passed an invalid input', function () {
        const invalid = 1;
        expect(() => formatWeeks(invalid)).to.throw(TypeError);
    })
})