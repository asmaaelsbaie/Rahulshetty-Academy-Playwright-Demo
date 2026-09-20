import { LoginPage } from "../Pages/LoginPage";
import { Page } from "@playwright/test";
import { RegisterPageSteps } from "./RegisterPageSteps";

export class LoginPageSteps extends RegisterPageSteps {
    private readonly loginPage;
    constructor(page: Page) {
        super(page);
        this.loginPage = new LoginPage(page);
    }
    async LoginData(email: string, password: string) {
        await this.loginPage.enterEmail(email);
        await this.loginPage.enterPassword(password);
        await this.loginPage.clickOnLogin();

    }
}