import { test, expect } from '@playwright/test';
import { LoginPageSteps } from '../Steps/LoginPageSteps';

test.use({
  // slowMo must be placed inside launchOptions
  launchOptions: {
    slowMo: 800, // Delays every action (click, type, etc.) by 1000ms (1 second)
  } });
test("Test Login with  user enterd data ",async ({page}) =>{
  const loginPageSteps = new LoginPageSteps(page);
  
  const randomNumber = Math.floor(Math.random() * 10000);
  const email="asm"+randomNumber+"@gmail.com";
  const password="Test@1234";
  await loginPageSteps.openRegisterPage();
  await loginPageSteps.enterYourData("asmaa1","Test",email,"1879654123","Engineer",password);
  await loginPageSteps.assertSuccessMessage();
  await loginPageSteps.openLoginPage();
  await loginPageSteps.LoginData(email,password);
    
});