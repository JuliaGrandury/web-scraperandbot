import puppeteer from "puppeteer";
import dotenv from 'dotenv';
dotenv.config();

// const userEmail = process.env.USER_EMAIL
// const userPw = process.env.USER_PW

const loginURL = 'https://www.glenans.asso.fr/utilisateur/identification'
const logIn = async (userEmail, userPw, loginURL) => {
    
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(loginURL);

    await page.type('#field_login', userEmail);
    await page.click('.aqua-form--button--submit');
    await page.waitForSelector('#field_password')
        .then(() => {
            console.log('got it');
            page.type('#field_password', userPW);
        })

    await page.waitForSelector('.aqua-form--button--submit')
        .then(() => {
            console.log('getting the submit button');
            setTimeout(() => {
                page.click('.aqua-form--button--submit');
            }, 1000);
        })

};

export {logIn};

