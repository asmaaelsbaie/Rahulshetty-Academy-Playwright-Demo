import { test, expect } from '@playwright/test';
import { CheckOutPageSteps } from '../Steps/CheckOutPageSteps';

test.use({
  // slowMo must be placed inside launchOptions
  launchOptions: {
    slowMo: 800, // Delays every action (click, type, etc.) by 1000ms (1 second)
  } });
test("Test Open Checkout  and set your data" ,async ({page}) =>{
  const checkoutPageSteps = new CheckOutPageSteps (page);
  
  const randomNumber = Math.floor(Math.random() * 10000);
  const email="asm"+randomNumber+"@gmail.com";
  const password="Test@1234";
  await  checkoutPageSteps.openRegisterPage();
  await  checkoutPageSteps.enterYourData("asmaa1","Test",email,"1879654123","Engineer",password);
  await checkoutPageSteps.assertSuccessMessage();
  await checkoutPageSteps.openLoginPage();
  await checkoutPageSteps.LoginData(email,password);
  await checkoutPageSteps.addItemTocart("ZARA COAT 3")
  await checkoutPageSteps.varifyAddedItem();
  await checkoutPageSteps.openCartPage();
  await checkoutPageSteps.openCheckOutPage();
    
});