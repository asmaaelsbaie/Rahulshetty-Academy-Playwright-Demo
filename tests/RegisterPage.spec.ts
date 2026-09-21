import { test, expect } from '@playwright/test';
import { RegisterPageSteps } from '../Steps/RegisterPageSteps';


test("Test Register user with Entered data and assert on Success Heading", async ({ page }) => {
  const registerPageSteps = new RegisterPageSteps(page);
   const randomNumber = Math.floor(Math.random() * 10000);
  const email = "asm" + randomNumber + "@gmail.com";
  const password = "Test@1234";
  await registerPageSteps.registerWithYourEnteredData("asmaa"+randomNumber, "Test", email, "1879654123", "Engineer", password)
  await registerPageSteps.openLoginPage();

});