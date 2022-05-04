import { promptUser } from "./src/promptuser.js";
import { StageRequested } from "./src/stage.js";
import { makeLink } from "./src/makelink.js";

promptUser()
    .then(function (userInput) {
        let userCreds = {
            email: userInput['email'],
            pw: userInput['password']
        }
        const currentStage = new StageRequested(userInput['location'], userInput['support'], userInput['level']);
        
        //setting url of stage instance to the url made in madeLink
        currentStage.setUrl = makeLink(currentStage);
        console.log(currentStage);
    })



    //use stage instance to scrape the web



//send prompt info to scraping
//send scraping info to formatting
//use email and pw to log in
//logIn(userEmail, userPw);
//send formatting info to email

//print formatting info
//send prompt info to res bot

