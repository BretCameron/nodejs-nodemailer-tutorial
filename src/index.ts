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
    features: [
      { title: "Feature 1", description: "Description 1" },
      { title: "Feature 2", description: "Description 2" },
      { title: "Feature 3", description: "Description 3" },
    ],
  });
}

main();
