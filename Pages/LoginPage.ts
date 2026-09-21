import { expect, Page } from "@playwright/test";
import { RegisterPage } from "./RegisterPage";


export class LoginPage extends RegisterPage {

    constructor(page: Page) {
        super(page);
        this.loginPage = page;
    }

    private readonly loginPage: Page;

    async verifyLoginPage(){
        await expect(this.loginPage).toHaveURL(/dashboard/)
    }

}