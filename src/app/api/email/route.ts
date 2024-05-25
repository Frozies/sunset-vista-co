import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import {NextRequest, NextResponse} from "next/server";

const MY_EMAIL = process.env.MY_EMAIL;
const MY_PASSWORD = process.env.MY_PASSWORD;

export async function POST(request: NextRequest) {
    const {email, name, message} = await request.json();

    console.log(email, name, message);

    const transport = nodemailer.createTransport({
        service: 'gmail', /*
          setting service as 'gmail' is same as providing these setings:
          host: "smtp.gmail.com",
          port: 465,
          secure: true
          If you want to use a different email provider other than gmail, you need to provide these manually.
          Or you can go use these well known services and their settings at
          https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
      */
        auth: {
            user: MY_EMAIL, pass: MY_PASSWORD,
        },
    });

    console.log("transport created")

    const mailOptions: Mail.Options = {
        from: MY_EMAIL,
        to: MY_EMAIL,
        subject: `Message from ${name} (${email})`,
        text: "Name: " + name + "\n\nEmail: " + email + "\n\nMessage: " + message,
    };
    console.log("mailOptions created")

    const sendMailPromise = () => new Promise<string>((resolve, reject) => {

        console.log("sending email transport promise")
        transport.sendMail(mailOptions, function (err) {
            if (!err) {
                resolve('Email sent');
            } else {
                console.error(err);
                reject(err.message);
            }
        });

    });

    try {
        console.log("sending email")
        await sendMailPromise();
        console.log("email sent")
        return NextResponse.json({message: 'Email sent'});
    } catch (err) {
        return NextResponse.json({error: err}, {status: 500});
    }
}