const nodemailer = require( 'nodemailer' );

const sendEmailUtility = async ( emailTo , emailText , emailSubject ) =>
{
    let transporter = nodemailer.createTransport({
        host: 'mail.teamrabbil.com',
        port: 25,
        secure: false,
        auth: {
            user: 'info@teamrabbil.com',
            pass: '42354u45u34u'
        }, tls: {
            rejectUnauthorized: false
        }
    })
    let mailOptin = {
        from: 'Task Manager MERN3<info@teamrabbil.com>',
        to: emailTo,
        subject: emailSubject,
        text: emailText
    }
    return await transporter.sendMail( mailOptin );
}
module.exports = sendEmailUtility;

