import { scrapePage } from "../src/scrape.js";

describe('scrapePage()', function () {
    it('returns an object when provided a valid url', function () {
        const testURL = 'https://www.glenans.asso.fr/stages/windsurf-niveaux-3-4--01t0Y0000099ZvTQAU?location=a070Y00000D4pfmQAB';
        assert.equal(typeof urlToID(testURL), 'object');
    })
    it('throws an error if passed an invalid url', function () {
        const testURL = 'google.com';
        expect(() => urlToID(testURL)).to.throw(TypeError);
    })
    it('throws an error if the scrape is blocked due to connection or website protection', function () {
        const testURL = 'https://www.glenans.asso.fr/stages/windsurf-niveaux-3-4--01t0Y0000099ZvTQAU?location=a070Y00000D4pfmQAB';
        expect(() => urlToID(testURL)).to.throw(TypeError);
    })
})