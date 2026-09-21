import { test } from '@playwright/test';

import { PlaceOrderSteps } from '../Steps/PlaceOrderPageSteps';

test("Test enter Place order Data", async ({ page }) => {
  const placeOrderPageSteps = new PlaceOrderSteps(page);

  const randomNumber = Math.floor(Math.random() * 10000);
  const email = "asm" + randomNumber + "@gmail.com";
  const password = "Test@1234";
  await placeOrderPageSteps.registerWithYourEnteredData("asmaa" + randomNumber, "Test", email, "1879654123", "Engineer", password)
  await placeOrderPageSteps.loginWithYourEnteredData(email, password);
  await placeOrderPageSteps.addItemWithYourEnteredData("ZARA COAT 3");
  await placeOrderPageSteps.goToPlaceOrderPage();
  await placeOrderPageSteps.enterPlaceOrderData("5874123698745214", "12", "30", "4567", "Asmaa", "egy", "egypt");

});