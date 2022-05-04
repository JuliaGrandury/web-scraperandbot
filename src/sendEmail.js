import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

function sendEmail(emailRecipient, emailBody) {
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

    transporter.sendMail(mailConfigurations, function (err, data) {
        if (err) {
            console.log('Error ' + err);
        } else {
            console.log('Email was sent successfully')
        }
    })
}

// let emailRecipient = 'juliagrandu@gmail.com';
// let emailBody = 'hey homey, you\'re amazing';

sendEmail('juliagrandu@gmail.com', 'hey homey, you\'re amazing');

export { sendEmail };

