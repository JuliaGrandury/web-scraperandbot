//import dependencies
import puppeteer from "puppeteer";
import cheerio from "cheerio";
import { StageFound } from './stage.js';
import { formatWeeks, formatSpots, formatPrices, fetchSummary } from "./formatting.js";

const extracted = new StageFound();

async function scrapePage(url, credentials) {

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        setTimeout(() => { console.log('Evaluating your link...'); }, 10);
        setTimeout(() => { console.log('Scraping the web...'); }, 1000);

        const pageData = await page.evaluate(() => {
            return {
                html: document.documentElement.innerHTML
            }
        })
        const $ = cheerio.load(pageData.html);

        const stageName = $('.aqua-titlepanel--title-large--text').text();
        const stageLocation = $('.aqua-internship--city').text();
        const stageWeeks = formatWeeks($('.aqua-calendar--date>p').text());
        const stageRemainingSpots = formatSpots($('.aqua-calendar--duration-last-places').text());
        const stagePrices = formatPrices($('.aqua-calendar--date-price-amount').text());

        extracted.type = stageName;
        extracted.location = stageLocation;
        extracted.weeks = stageWeeks;
        extracted.spots = stageRemainingSpots;
        extracted.prices = stagePrices;

        await browser.close();
        return fetchSummary(extracted);
    }
    catch (error) {
        console.log(error);
    }

}

export { scrapePage, extracted };

