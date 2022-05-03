//import dependencies
import puppeteer from "puppeteer";
import cheerio from "cheerio";
import Stage from './stage.js';
import { formatWeeks, formatSpots, formatPrices, printSummary } from "./formatting.js";


//const targetURL = 'https://www.glenans.asso.fr/stages/windsurf-niveaux-3-4--01t0Y0000099ZvTQAU?location=a070Y000003aCLJQA2';
const targetURL = 'https://www.glenans.asso.fr/stages/windsurf-niveaux-3-4--01t0Y0000099ZvTQAU?location=a070Y00000D4pfmQAB';


//note this is an immediately invoked function expression
(async () => {

    setTimeout(() => {console.log('Loading your results...'); }, 10);
    setTimeout(() => {console.log('Scraping the web...'); }, 1000);
    setTimeout(() => {console.log('Parsing through the html...'); }, 2000);
    setTimeout(() => {console.log('Almost there...'); }, 3000);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(targetURL);

    const pageData = await page.evaluate(() => {
        return{
            html: document.documentElement.innerHTML
        }
    })
    const $ = cheerio.load(pageData.html);

    const stageName = $('.aqua-titlepanel--title-large--text').text();
    const stageLocation = $('.aqua-internship--city').text();
    var stageWeeks = $('.aqua-calendar--date>p').text();
    var stageRemainingSpots = $('.aqua-calendar--duration-last-places').text();
    var stagePrices = $('.aqua-calendar--date-price-amount').text();
    stageWeeks = formatWeeks(stageWeeks);
    stageRemainingSpots = formatSpots(stageRemainingSpots);
    stagePrices = formatPrices(stagePrices);

    const extracted = new Stage(stageName, stageLocation, stageWeeks, stageRemainingSpots, stagePrices);
    printSummary(extracted);

    await browser.close();
})();




