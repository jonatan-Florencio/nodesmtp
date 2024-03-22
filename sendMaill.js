const nodemailer = require("nodemailer");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
    },
})

const mailOptions = {
    from: {
        name: 'teste jonatan',
        address: process.env.EMAIL,
    },//sender
    to:['jonatanflorencio45@gmail.com'],
    subject: "send email from GMAIL SMTP",
    text: "Send email from GMAIL SMTP",
    html: "<b> HELLO WORLD</b>",
};

// função para envio de email

const sendMail = async (transporter, mailOption) => {
    try{
        await transporter.sendMail(mailOptions);
        console.log('email has be sent');
    }catch(error){
        console.log(error);
    }
};

Sendmail(transporter, mailOptions);