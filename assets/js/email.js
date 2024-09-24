const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'lembrefacil.org@gmail.com',
        pass: 'zicgpbvdqgbppayn'
    }
})

transport.sendMail({
    from: 'LembreFácil <lembrefacil.org@gmail.com>',
    to: 'oliveiradasilvaigor74@gmail.com',
    subject: 'Enviando Email com Nodemailer',
    html: '<h1>Teste Nodemailer</h1>',
    text: 'Teste Nodemailer'
})
.then((response) => console.log('Email enviado com sucesso'))
.catch((err) => console.log('Erro ao enviar email'))