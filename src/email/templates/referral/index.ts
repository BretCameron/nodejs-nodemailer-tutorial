import path from "path";
import { BaseEmail } from "../../base";

interface ReferralEmailVariables {
  firstName: string;
  referrer: {
    firstName: string;
    lastName: string;
  };
  loginUrl: string;
  features?: {
    title: string;
    description: string;
  }[];
}

export class ReferralEmail extends BaseEmail<ReferralEmailVariables> {
  constructor() {
    super({
      from: "hello@example.com",
      subject: ({ referrer }: ReferralEmailVariables) =>
        `You’ve been referred to by ${referrer.firstName}!`,
      template: path.join(__dirname, "template.mjml"),
    });
  }
}
