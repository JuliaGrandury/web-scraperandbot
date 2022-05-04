import { promptUser } from "./src/promptuser.js";
import { StageRequested } from "./src/stage.js";

promptUser()
    .then(function (userInput) {
        let userCreds = {
            email: userInput['email'],
            pw: userInput['password']
        }
        const currentStage = new StageRequested(userInput['location'], userInput['support'], userInput['level']);
        stage.currentUrl = makeLink(currentStage);
    }).then(function(){

    })


//send prompt info to scraping
//send scraping info to formatting
//use email and pw to log in
//logIn(userEmail, userPw);
//send formatting info to email
//print formatting info
//send prompt info to res bot

