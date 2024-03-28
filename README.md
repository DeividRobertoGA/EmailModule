# Email Module

Esse modulo permite a conexão com o email e o node

Passo 1. Instale o `nodemailer` e o `dotenv`</br>
```sh
yarm install nodemailer dotenv
//or
npm install nodemailer dotenv
```
Passo 2. Preencha o ENV com os dados do e-mail
```shell
MAIL_HOST=#URL smtp do sem email. EX:smtp.google.com
MAIL_SERVICE=#Serviço de email. EX:gmail
MAIL_NAME=#Nome de envio do email EX: Fulando de Tal
MAIL_USER=#Email. EX: fulanodetal@gmail.com
MAIL_PASSWORD=#Senha. EX: senhasegura123
     #Em caso de verificação de segunda etapa no google usa senha de APP
```

Utilizando para `testar o e-mail`.
```javascript
import {emailVerify} from /*Lugar onde está o arquivo email.config.js*/
emailVerify((err, success) => {
    if (err) {
        return `Houve um erro: ${err}`
    } else {
        return "E-Mail está funcionado"
    }
})
```

Utilizando para `enviar o e-mail`.
```javascript
import {email} from /*Lugar onde está o arquivo email.config.js*/
let emailToSend = {
    from: `${process.env.MAIL_NAME} <${process.env.MAIL_USER}>`,
    to: /*Email do destinatario. EX: pessoaleatoria@gmail.com*/,
    subject: /*Assunto do email. EX: Email de Teste*/
    text: /*Texto do email EX: Esse é um email enviado para teste.*/
}

email.sendMail(emailToSend, (err) => {
    if (err) {
        return `Houve um erro: ${err}`
    } else {
        return "E-Mail enviado com sucesso."
    }
});
```