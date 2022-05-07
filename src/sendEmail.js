import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

function sendEmail(userCreds, emailBody) {
    console.log('Send Email Function is called');
    let emailRecipient = userCreds['email'];

    if(!Array.isArray(emailBody)){
        emailBody = "Error: The scraping of your requested courses was unsuccessful."
    }
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_EMAIL,
            pass: process.env.MAIL_PASSWORD
        }
    });

    let mailConfigurations = {
        from: process.env.MAIL_EMAIL,
        to: emailRecipient,
        subject: 'Summary of your Requested Courses',
        html: emailBody.toString()
    };

    transporter.sendMail(mailConfigurations, function (err, info) {
        if (err) {
            console.log('Error ' + err);
        } else {
            console.log(`An email summarizing your requested courses was sent to your provided email: ${emailRecipient}`);
            return info.response;
        }
    })
}

export { sendEmail };

