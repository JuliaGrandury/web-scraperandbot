import { promptUser } from "./src/promptUser.js";
import { scrapePage } from "./src/scrape.js";
import { sendEmail } from "./src/sendEmail.js";
import { requested } from "./src/promptUser.js";

async function runProgram() {
    console.log('Running the program')
    //prompting user
    const userCreds = await promptUser();
    //combine scrape and login and pass in url and user creds
    const emailBody = await scrapePage(requested.pageUrl, userCreds);
    //finish by sending email with body retrieved from scrape
    await sendEmail(userCreds, emailBody);
}

runProgram();

