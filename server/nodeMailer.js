import nodemailer from 'nodemailer';
// import checkStatusesAndCert from './checkStatusesAndCert.js';

const postman = async (domains) => {

    console.log(domains)

    const out = domains.map(el => `<a href=${el.domain}>${el.domain}</a>`).join('<br/>');

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'acherepanov@strelka-kb.com',
            pass: `${process.env.PASS_EMAIL}`,
        },
    });

    let mailOptions = {
        from: 'acherepanov@strelka-kb.com',
        to: 'lexa_klav@mail.ru, acherepanov@strelka-kb.com, tkildigulov@strelka-kb.com, aanisimov@strelka-kb.com',
        subject: 'DOMAIN_BOT: Внимание! Следующие сайты не работают==>',
        html:
            `
            <div style="display: flex; justify-content: center; align-items: center; background: #36a3b8; width: 100%; height: 100px; margin-bottom: 20px;">
            <p style="color: white;">STRELKA KB</p>
            </div>            
            <div>${out}</div>
            `,
    };
    return transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
// postman().catch(console.error);
export default postman;
