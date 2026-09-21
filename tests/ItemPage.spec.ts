import { test, expect } from '@playwright/test';
import { ItemPageSteps } from '../Steps/ItemPageSteps';


test("Test add item To cart  and Verify it Was Added ", async ({ page }) => {
  const itemPageSteps = new ItemPageSteps(page);

  const randomNumber = Math.floor(Math.random() * 10000);
  const email = "asm" + randomNumber + "@gmail.com";
  const password = "Test@1234";
  await itemPageSteps.registerWithYourEnteredData("asmaa" + randomNumber, "Test", email, "1879654123", "Engineer", password)
  await itemPageSteps.loginWithYourEnteredData(email, password);
  await itemPageSteps.addItemWithYourEnteredData("ZARA COAT 3")
  await itemPageSteps.goToPlaceOrderPage();
  

});