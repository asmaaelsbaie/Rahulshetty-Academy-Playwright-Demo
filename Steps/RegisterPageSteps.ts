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
   async enterYourData(firstName: string, lastName: string, email: string, phoneNumber: string, occupationSelector: string, password: string) {
      await this.registerPage.enterFirstName(firstName);
      await this.registerPage.enterLastName(lastName);
      await this.registerPage.enterEmail(email);
      await this.registerPage.enterPhoneNumber(phoneNumber);
      await this.registerPage.selectOccpation(occupationSelector);
      await this.registerPage.selectFemaleGender();
      await this.registerPage.enterPassword(password);
      await this.registerPage.enterPasswordConfirm(password);
      await this.registerPage.checkerfor18yearsOrOlder();
      await this.registerPage.clickOnRegisterButton();
   }
   async assertSuccessMessage() {
      await this.registerPage.verifyRegisterDoneSuccessfully();
   }
   async openLoginPage() {
      await this.registerPage.clickOnLogin();
   }
}