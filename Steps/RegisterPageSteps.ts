import { Locator, Page } from "@playwright/test"

import { RegisterPage } from "../Pages/RegisterPage"
export class RegisterPageSteps {
   private readonly registerPage;
   constructor(page: Page) {
      this.registerPage = new RegisterPage(page);
   }
   async openRegisterPage() {
      await this.registerPage.OpenPage();
      await this.registerPage.clickOnRegister();
   }
   async enterYourData(testData:any) {
      await this.registerPage.enterFirstName(testData.firstName);
      await this.registerPage.enterLastName(testData.lastName);
      await this.registerPage.enterEmail(testData.email);
      await this.registerPage.enterPhoneNumber(testData.phoneNumber);
      await this.registerPage.selectOccpation(testData.occupationSelector);
      await this.registerPage.selectFemaleGender();
      await this.registerPage.enterPassword(testData.password);
      await this.registerPage.enterPasswordConfirm(testData.password);
      await this.registerPage.checkerfor18yearsOrOlder();
      await this.registerPage.clickOnRegisterButton();
   }
   async assertSuccessMessage() {
      await this.registerPage.verifyRegisterDoneSuccessfully();
   }
   async openLoginPage() {
      await this.registerPage.clickOnLogin();
   }
   async registerWithYourEnteredData(testData:any) {
      await this.openRegisterPage();
      await this.enterYourData(testData);
      await this.assertSuccessMessage();
   }
}