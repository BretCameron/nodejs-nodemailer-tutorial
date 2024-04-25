import fs from "fs/promises";
import mjml2html from "mjml";
import * as nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { transporter } from "./transporter";

export abstract class BaseEmail<T> {
  protected from: string;
  protected subject: string | ((variables: T) => string);
  protected template: string;

  constructor({
    from,
    subject,
    template,
  }: {
    from: string;
    subject: string | ((variables: T) => string);
    template: string;
  }) {
    this.from = from;
    this.subject = subject;
    this.template = template;
  }

  public async send(
    to: string,
    variables: T,
    options?: nodemailer.SendMailOptions
  ) {
    const mjml = await fs.readFile(this.template, "utf-8");
    const html = mjml2html(handlebars.compile(mjml)(variables)).html;

    await transporter
      .sendMail({
        to,
        from: this.from,
        subject:
          typeof this.subject === "string"
            ? this.subject
            : this.subject(variables),
        html,
        ...options,
      })
      .then((info) => {
        console.info("Message sent: ", info.messageId);

        const previewUrl = nodemailer.getTestMessageUrl(info);
        if (previewUrl) {
          console.info("Preview URL: ", previewUrl);
        }
      });
  }
}
