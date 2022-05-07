import assert from "assert";
import chai from "chai";
const expect = chai.expect;

import { formatWeeks, formatMonths, formatSpots, formatPrices, fetchSummary } from "../src/formatting.js";

describe('formatWeeks()', function () {
    it('returns an array of strings with the full day name, day number and day month', function () {
        const param = 'sam4juinsam25juinsam16juil';
        const expected = ['samedi 4 juin', 'samedi 25 juin', 'samedi 16 juillet'];
        assert.deepEqual(formatWeeks(param), expected);
    })
    it('can handle having "jeu" as a day in input array', function () {
        const param = 'sam21maijeu26maisam23juilsam3septsam17septsam15octsam22oct';
        const expected = ['samedi 21 mai','jeudi 26 mai', 'samedi 23 juillet', 'samedi 3 septembre',
            'samedi 17 septembre', 'samedi 15 octobre', 'samedi 22 octobre'];
        assert.deepEqual(formatWeeks(param), expected);
    })
    it('can handle having "ven" as a day in input array', function () {
        const param = 'sam14maisam28maisam11juinsam11juinsam3septsam24septsam24septsam1octsam22octsam29octsam29octsam5novven11novsam12nov';
        const expected = ['samedi 14 mai', 'samedi 28 mai', 'samedi 11 juin', 'samedi 11 juin', 'samedi 3 septembre', 'samedi 24 septembre',
            'samedi 24 septembre', 'samedi 1 octobre', 'samedi 22 octobre', 'samedi 29 octobre', 'samedi 29 octobre',
            'samedi 5 novembre', 'vendredi 11 novembre', 'samedi 12 novembre'];
        assert.deepEqual(formatWeeks(param), expected);
    })
    it('can handle having "août" as a month in input array', function () {
        const param = 'sam4juinsam25juinsam16juilsam6août';
        const expected = ['samedi 4 juin', 'samedi 25 juin', 'samedi 16 juillet', 'samedi 6 aout'];
        assert.deepEqual(formatWeeks(param), expected);
    })
    it('throws an error if passed an invalid input: integer', function () {
        const invalid = 1;
        expect(() => formatWeeks(invalid)).to.throw(TypeError);
    })
    it('throws an error if passed an invalid input: null', function () {
        const invalid = null;
        expect(() => formatWeeks(invalid)).to.throw(TypeError);
    })
    it('throws an error if passed an invalid input: undefined', function () {
        const invalid = undefined;
        expect(() => formatWeeks(invalid)).to.throw(TypeError);
    })
})


describe('formatMonths()', function () {
    it('returns the expected modified string when passed in a valid array of strings', function () {
        const param = ['sam',' 11 juin','sam',' 25 juin','sam',' 2 juil','sam',' 9 juil','sam',' 16 juil','sam',' 23 juil','sam',' 30 juil','sam',' 6 aout','sam',' 13 aout','sam',' 20 aout','sam',' 27 aout','sam',' 3 sept','sam',' 10 sept','sam',' 17 sept'];
        const expected = ['sam',' 11 juin','sam',' 25 juin','sam',' 2 juillet','sam',' 9 juillet','sam',' 16 juillet','sam',' 23 juillet','sam',' 30 juillet','sam',' 6 aout','sam',' 13 aout','sam',' 20 aout','sam',' 27 aout','sam',' 3 septembre','sam',' 10 septembre','sam',' 17 septembre'];
        assert.deepEqual(formatMonths(param), expected);
    })
    it('throws an error if passed an invalid input: string', function () {
        const invalid = 'teststring';
        expect(() => formatMonths(invalid)).to.throw(TypeError);
    })
    it('throws an error if passed an invalid input: integer', function () {
        const invalid = 1;
        expect(() => formatMonths(invalid)).to.throw(TypeError);
    })
    it('throws an error if passed an invalid input: null', function () {
        const invalid = null;
        expect(() => formatMonths(invalid)).to.throw(TypeError);
    })
    it('throws an error if passed an invalid input: undefined', function () {
        const invalid = undefined;
        expect(() => formatMonths(invalid)).to.throw(TypeError);
    })
})

describe('formatSpots()', function () {
    it('returns the expected modified array when passed in a valid string', function () {
        const param = '0 place disp.3 places disp.4 places disp.5 places disp.6 places disp.2 places disp.5 places disp.1 place disp.2 places disp.7 places disp.0 place disp.7 places disp.7 places disp.7 places disp.';
        const expected = ['0', '3', '4', '5', '6', '2', '5', '1', '2', '7', '0', '7', '7', '7'];
        assert.deepEqual(formatSpots(param), expected);
    })
    it('throws an error if passed an invalid input: integer', function () {
        const invalid = 1;
        expect(() => formatSpots(invalid)).to.throw(TypeError);
    })
    it('throws an error if passed an invalid input: array', function () {
        const invalid = ['0', '1', '2'];
        expect(() => formatSpots(invalid)).to.throw(TypeError);
    })
    it('throws an error if passed an invalid input: null', function () {
        const invalid = null;
        expect(() => formatSpots(invalid)).to.throw(TypeError);
    })
    it('throws an error if passed an invalid input: undefined', function () {
        const invalid = undefined;
        expect(() => formatSpots(invalid)).to.throw(TypeError);
    })
})

describe('formatPrices()', function () {
    it('returns the expected modified array when passed in a valid string', function () {
        const param = '555,00€615,00€615,00€670,00€670,00€670,00€670,00€670,00€670,00€670,00€615,00€555,00€555,00€555,00€';
        const expected = ['555,00€', '615,00€', '615,00€', '670,00€', '670,00€', '670,00€', '670,00€', '670,00€',
            '670,00€', '670,00€', '615,00€', '555,00€', '555,00€', '555,00€'];
        assert.deepEqual(formatPrices(param), expected);
    })
    it('throws an error if passed an invalid input: integer', function () {
        const invalid = 1;
        expect(() => formatPrices(invalid)).to.throw(TypeError);
    })
    it('throws an error if passed an invalid input: array', function () {
        const invalid = ['0', '1', '2'];
        expect(() => formatPrices(invalid)).to.throw(TypeError);
    })
    it('throws an error if passed an invalid input: null', function () {
        const invalid = null;
        expect(() => formatPrices(invalid)).to.throw(TypeError);
    })
    it('throws an error if passed an invalid input: undefined', function () {
        const invalid = undefined;
        expect(() => formatPrices(invalid)).to.throw(TypeError);
    })
})