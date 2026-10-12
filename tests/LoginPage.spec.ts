import { test, expect } from '@playwright/test';
import { LoginPageSteps } from '../Steps/LoginPageSteps';
import fs from 'fs';
import path from 'path';



const jsonPath = path.join(
  process.cwd(),
  "TestData/LoginData.json"
);

const LoginData = JSON.parse(
  fs.readFileSync(jsonPath, "utf-8")
);



for (const {email,password,validity} of LoginData){


test(`Test Login with user enterd data ${email}/${password}`, async ({ page }) => {
  const loginPageSteps = new LoginPageSteps(page);

 

  await loginPageSteps.loginWithYourEnteredData({email,password,validity});
 

});
}
