import path from "path";
import { BaseEmail } from "../../base";

interface OnboardingEmailVariables {
  firstName: string;
  loginUrl: string;
}

export class OnboardingEmail extends BaseEmail<OnboardingEmailVariables> {
  constructor() {
    super({
      from: "hello@example.com",
      subject: "Welcome!",
      template: path.join(__dirname, "template.mjml"),
    });
  }
}
