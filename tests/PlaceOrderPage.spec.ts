import { test } from '@playwright/test';

import { PlaceOrderSteps } from '../Steps/PlaceOrderPageSteps';

import fs from 'fs';
import path from 'path';
import console from 'console';
test.use( {
    // slowMo must be placed inside launchOptions
    launchOptions: {
      slowMo: 1000, // Delays every action (click, type, etc.) by 1000ms (1 second)
    }
});

const jsonPath = path.join(
  process.cwd(),
  "TestData/LoginData.json"
);

const LoginData = JSON.parse(
  fs.readFileSync(jsonPath, "utf-8")
);

const jsonPathAdditem = path.join(
  process.cwd(),
  "TestData/AddtoCartData.json"
);

const addItemData = JSON.parse(
  fs.readFileSync(jsonPathAdditem, "utf-8")
);
const jsonPathPlaceOrder = path.join(
  process.cwd(),
  "TestData/placeOrderData.json"
);

const PlaceOrderData = JSON.parse(
  fs.readFileSync(jsonPathPlaceOrder, "utf-8")
);

for (const {creditCardNumber,expiryDateSelect1,expiryDateSelect2,nameCard,partial,countryFullName, csvNumber} of PlaceOrderData){

  test(`Test enter Place order Data ${creditCardNumber}`, async ({ page }) => {
  const placeOrderPageSteps = new PlaceOrderSteps(page);
    await placeOrderPageSteps.loginWithYourEnteredData(LoginData[0]);
    await placeOrderPageSteps.addItemWithYourEnteredData(addItemData[0])
    await placeOrderPageSteps.goToPlaceOrderPage(addItemData[0]);
  await placeOrderPageSteps.enterPlaceOrderData({creditCardNumber,expiryDateSelect1,expiryDateSelect2,nameCard,partial,countryFullName, csvNumber});
await placeOrderPageSteps.completePlaceOrder();
});

}
