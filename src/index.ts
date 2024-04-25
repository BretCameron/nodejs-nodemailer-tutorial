import { email } from "./email";

async function main() {
  await email.onboarding.send("hello@example.com", {
    firstName: "John",
    loginUrl: "https://example.com/login",
  });

  await email.referral.send("hello@example.com", {
    firstName: "John",
    referrer: {
      firstName: "Jane",
      lastName: "Doe",
    },
    loginUrl: "https://example.com/login",
  });
}

main();
