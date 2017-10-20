let Mailjet = require('node-mailjet').connect(process.env.KW_APIKEY_PUBLIC, process.env.KW_APIKEY_PRIVATE);

let ejs = require("ejs");
let path = require('path');

module.exports = app => {

    var sendEmail = Mailjet.post('send');
    var fromEmail = "info@kwema.co";

    function sendRegistrationMail(data){

        ejs.renderFile(path.join(__dirname,"../views/emails/registrationEmail.ejs"), {user:data}, {}, function(err, str){

            var emailData = {
                'FromEmail': fromEmail,
                'FromName': 'Kwema',
                'Subject': data.subject,
                'Text-part': data.text,
                'Html-part': str,
                'Recipients': [{'Email': data.email}]
            }

            sendEmail
              .request(emailData)
                .then(function(data){
                    console.log("mail sent working");
                })
                .catch(function(err){
                    console.log("mail sent not wokring");
                    console.log(err);
                });
        });

    }

    function sendPaymentSuccessfulMail(data){
        ejs.renderFile(path.join(__dirname,"../views/paymentSuccessful.ejs"), {data:data}, {}, function(err, str){
                var emailData = {
                    'FromEmail': fromEmail,
                    'FromName': 'Kwema',
                    'Subject': data.subject,
                    'Text-part': data.text,
                    'Html-part': str,
                    'Recipients': [{'Email': data.email}]
                }
                sendEmail
                  .request(emailData)
                    .then(function(data){
                        console.log("mail sent working");
                    })
                    .catch(function(err){
                        console.log("mail sent not wokring");
                        console.log(err);
                    });
        });
    }

    return{
        sendRegistrationMail,
        sendPaymentSuccessfulMail
    }
}