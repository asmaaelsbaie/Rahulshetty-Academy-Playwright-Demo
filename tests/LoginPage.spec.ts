import { test, expect } from '@playwright/test';
import { LoginPageSteps } from '../Steps/LoginPageSteps';


test("Test Login with  user enterd data ", async ({ page }) => {
  const loginPageSteps = new LoginPageSteps(page);

  const randomNumber = Math.floor(Math.random() * 10000);
  const email = "asm" + randomNumber + "@gmail.com";
  const password = "Test@1234";
  await loginPageSteps.registerWithYourEnteredData("asmaa" + randomNumber, "Test", email, "1879654123", "Engineer", password)
  await loginPageSteps.loginWithYourEnteredData(email, password);
 

});