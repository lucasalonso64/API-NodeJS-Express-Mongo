const path = require('path');
//const { resolve } = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
//const handlebarOptions = require('nodemailer-express-handlebars');

const { service, secure, port, user, pass } = require('../config/mail.json')
var transport = nodemailer.createTransport({
    service,
    port,
    secure,
    auth: { user, pass },

});

transport.use('compile', hbs({
    viewEngine: {
       // defaultLayout: 'forgotPassword',
        partialsDir: './src/resources/mail/',
        extname: '.html',
    },
    viewPath: path.resolve('./resources/mail/'),
}));

// transport.use('compile', hbs ({
//     viewEngine: 'handlebars',
//     viewPath: resolve('./src/resources/mail/'),
//     extName: '.html',
//     partialsDir: './src/resources/mail/', 
//     defaultLayout: undefined,
//     helpers: undefined,
//     compilerOptions: undefined
// }));

// transport.use('compile', hbs(handlebarOptions));

// const handlebarOptions = {
//     viewEngine: 'handlebars',
//     viewPath: path.resolve('./src/resources/mail/'),
//     extName: '.html',
//     partialsDir: 'src/path',
// };

module.exports = transport;

// teste


// var email = {
//     from: 'osnolafree@gmail.com', // Quem enviou este e-mail
//     to: 'osnolafree@gmail.com', // Quem receberá
//     subject: 'Node.js ♥ unicode',  // Um assunto bacana :-) 
//     html: ' Isso foi apenas um teste E-mail foi enviado do <strong>Node.js</strong>' // O conteúdo do e-mail
//   };

//   // Pronto, tudo em mãos, basta informar para o transporte
//   // que desejamos enviar este e-mail
//   transport.sendMail(email, function(err, info){
//     if(err)
//       throw err; // Oops, algo de errado aconteceu.

//     console.log('Email enviado! Leia as informações adicionais: ', info);
//   });