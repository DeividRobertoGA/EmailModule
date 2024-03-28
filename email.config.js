//Importando as bibliotecas necessarias
import nodemailer from "nodemailer";
import dotenv from "dotenv";

//Configurando Bibliotecas
dotenv.config();

//Configurando E-Mail
const email = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

//Verificar E-Mail
const emailVerify = (callback) => {
    email.verify((err, success) => {
        callback(err, success);
    });
};

export {email, emailVerify};