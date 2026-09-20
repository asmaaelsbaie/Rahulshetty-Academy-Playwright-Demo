import { test} from '@playwright/test';

import { PlaceOrderSteps } from '../Steps/PlaceOrderPageSteps';

test.use({
  // slowMo must be placed inside launchOptions
  launchOptions: {
    slowMo: 800, // Delays every action (click, type, etc.) by 1000ms (1 second)
  } });
test("Test enter Place order Data" ,async ({page}) =>{
  const placeOrderPageSteps = new  PlaceOrderSteps(page);
  
  const randomNumber = Math.floor(Math.random() * 10000);
  const email="asm"+randomNumber+"@gmail.com";
  const password="Test@1234";
  await  placeOrderPageSteps.openRegisterPage();
  await  placeOrderPageSteps.enterYourData("asmaa1","Test",email,"1879654123","Engineer",password);
  await placeOrderPageSteps.assertSuccessMessage();
  await placeOrderPageSteps.openLoginPage();
  await placeOrderPageSteps.LoginData(email,password);
  await placeOrderPageSteps.addItemTocart("ZARA COAT 3")
  await placeOrderPageSteps.varifyAddedItem();
  await placeOrderPageSteps.openCartPage();
  await placeOrderPageSteps.openCheckOutPage();
  await placeOrderPageSteps.enterPlaceOrderData("5874123698745214","12","30","4567","Asmaa")
 
});