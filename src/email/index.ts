import { OnboardingEmail } from "./templates/onboarding";
import { ReferralEmail } from "./templates/referral";

class EmailService {
  onboarding = new OnboardingEmail();
  referral = new ReferralEmail();
}

export const email = new EmailService();
