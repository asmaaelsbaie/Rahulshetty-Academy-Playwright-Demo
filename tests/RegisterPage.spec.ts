import { test, expect } from '@playwright/test';
import { RegisterPageSteps } from '../Steps/RegisterPageSteps';
test.use({
  // slowMo must be placed inside launchOptions
  launchOptions: {
    slowMo: 800, // Delays every action (click, type, etc.) by 1000ms (1 second)
  }
});
test("Test Register user ", async ({ page }) => {
  const registerPageSteps = new RegisterPageSteps(page);
  const randomNumber = Math.floor(Math.random() * 10000);
  await registerPageSteps.openRegisterPage();
  await registerPageSteps.enterYourData("asmaa1", "Test", "asme" + randomNumber + "@gmail.com", "1879654123", "Engineer", "Test@1234");
  await registerPageSteps.assertSuccessMessage();
  await registerPageSteps.openLoginPage();

});