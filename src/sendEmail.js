import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

let emailRecipient;
let emailBody;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD
    }
});

let mailConfigurations = {
    from: 'glenanswebscraper@gmail.com',
    to: emailRecipient,
    subject: 'Summary of your Requested Courses',
    html: emailBody
};

transporter.sendMail(mailConfigurations, function(err, data){
    if(err) {
        console.log('Error ' + err);
    } else{
        console.log('Email was sent successfully')
    }
})