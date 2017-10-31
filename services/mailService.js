let helper = require('sendgrid').mail;
let fromEmail = new helper.Email('info@kwema.co');


let ejs = require("ejs");
let path = require('path');

module.exports = app => {

    var fromEmail = new helper.Email('info@kwema.co');
    var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);


    function sendRegistrationMail(data, password){
        console.log("sending mail");
        ejs.renderFile(path.join(__dirname,"../views/emails/registrationEmail.ejs"), {user:data, password:password}, {}, function(err, str){
            
                console.log(data);
                var content = "welcome to kwema. Login with the password:"+password;

                var toEmail = new helper.Email(data.email);
                var subject = "Welcome to Kwema!";
                var contentHtml = new helper.Content('text/html', str);
                var contentText = new helper.Content('text/plain', content);
                var mail = new helper.Mail(fromEmail, subject, toEmail, contentText);

                mail.addContent(contentHtml);

                var request = sg.emptyRequest({
                  method: 'POST',
                  path: '/v3/mail/send',
                  body: mail.toJSON()
                });

                sg.API(request, function (error, response) {
                  if (error) {
                    console.log('Error response received');
                  }
                  console.log(response.statusCode);
                  console.log(response.body);
                  console.log(response.headers);
                });
        });

    }

    function sendPaymentSuccessfulMail(data){
        
    }

    return{
        sendRegistrationMail,
        sendPaymentSuccessfulMail
    }
}