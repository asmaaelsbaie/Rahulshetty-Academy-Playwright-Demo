import { test, expect } from '@playwright/test';
import { LoginPageSteps } from '../Steps/LoginPageSteps';
import { ItemPageSteps } from '../Steps/ItemPageSteps';

test.use({
  // slowMo must be placed inside launchOptions
  launchOptions: {
    slowMo: 800, // Delays every action (click, type, etc.) by 1000ms (1 second)
  } });
test("Test add item To cart ",async ({page}) =>{
  const itemPageSteps = new ItemPageSteps (page);
  
  const randomNumber = Math.floor(Math.random() * 10000);
  const email="asm"+randomNumber+"@gmail.com";
  const password="Test@1234";
  await itemPageSteps.openRegisterPage();
  await itemPageSteps.enterYourData("asmaa1","Test",email,"1879654123","Engineer",password);
  await itemPageSteps.assertSuccessMessage();
  await itemPageSteps.openLoginPage();
  await itemPageSteps.LoginData(email,password);
  await itemPageSteps.addItemTocart("ZARA COAT 3")
  await itemPageSteps.varifyAddedItem();
  await itemPageSteps.openCartPage();
    
});