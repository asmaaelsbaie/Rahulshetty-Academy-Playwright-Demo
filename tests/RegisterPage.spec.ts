import { test, expect } from '@playwright/test';
import { RegisterPageSteps } from '../Steps/RegisterPageSteps';
import fs from 'fs';
import path from 'path';

const jsonPath = path.join(
  process.cwd(),
  "TestData/registerData.json"
);

const registerData = JSON.parse(
  fs.readFileSync(jsonPath, "utf-8")
);

const randomNumber = Math.floor(Math.random() * 10000);

const email = `Asmaa${randomNumber}@gmail.com`;

registerData.email= email;

fs.writeFileSync(
  jsonPath,
  JSON.stringify(registerData, null, 2)
);


 test("Test Register user with Entered data and assert on Success Heading", async ({ page }) => {
  const registerPageSteps = new RegisterPageSteps(page);
  
  

  await registerPageSteps.registerWithYourEnteredData(registerData)
  await registerPageSteps.openLoginPage();

});