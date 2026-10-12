import { test, expect } from '@playwright/test';
import { ItemPageSteps } from '../Steps/ItemPageSteps';

import fs from 'fs';
import path from 'path';


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
for (const {item,validity,massege} of addItemData){

  test(`Test add item To cart  and Verify it Was Added ${item} `, async ({ page }) => {
  const itemPageSteps = new ItemPageSteps(page);
  
  await itemPageSteps.loginWithYourEnteredData(LoginData[0]);
  await itemPageSteps.addItemWithYourEnteredData({item,validity})
  await itemPageSteps.goToPlaceOrderPage({item,validity,massege});
  

});
}

