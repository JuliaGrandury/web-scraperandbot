//import dependencies
import puppeteer from "puppeteer";
import cheerio from "cheerio";
import { StageFound } from './stage.js';
import { formatWeeks, formatSpots, formatPrices, fetchSummary } from "./formatting.js";


async function scrapePage(url) {
    try {

        setTimeout(() => { console.log('Loading your results...'); }, 10);
        setTimeout(() => { console.log('Scraping the web...'); }, 1000);
        setTimeout(() => { console.log('Parsing through the html...'); }, 2000);
        setTimeout(() => { console.log('Almost there...'); }, 3000);

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        const pageData = await page.evaluate(() => {
            return {
                html: document.documentElement.innerHTML
            }
        })
        const $ = cheerio.load(pageData.html);
        //console.log(pageData);

        const stageName = $('.aqua-titlepanel--title-large--text').text();
        const stageLocation = $('.aqua-internship--city').text();
        const stageWeeks = formatWeeks($('.aqua-calendar--date>p').text());
        const stageRemainingSpots = formatSpots($('.aqua-calendar--duration-last-places').text());
        const stagePrices = formatPrices($('.aqua-calendar--date-price-amount').text());
        const extracted = new StageFound(stageName, stageLocation, stageWeeks, stageRemainingSpots, stagePrices);
        fetchSummary(extracted);

        await browser.close();
    }
    catch (error) {
        console.log(error);
    }
}

//DELETE THIS ONCE ALL FXNS ARE CONNECTED
const targetURL = 'https://www.glenans.asso.fr/stages/windsurf-niveaux-3-4--01t0Y0000099ZvTQAU?location=a070Y000003aCLJQA2';
scrapePage(targetURL);

export { scrapePage };

