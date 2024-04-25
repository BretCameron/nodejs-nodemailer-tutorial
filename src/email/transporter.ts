import * as nodemailer from "nodemailer";
import * as aws from "@aws-sdk/client-ses";

function getTransporter() {
  if (process.env.NODE_ENV === "production") {
    const ses = new aws.SES({
      apiVersion: "2010-12-01",
      region: "eu-west-2",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "",
      },
    });

    return nodemailer.createTransport({
      SES: { ses, aws },
    });
  } else {
    return nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });
  }
}

export const transporter = getTransporter();
