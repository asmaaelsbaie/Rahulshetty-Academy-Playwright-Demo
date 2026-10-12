import { expect, Page } from "@playwright/test";
import { RegisterPage } from "./RegisterPage";


export class LoginPage extends RegisterPage {

    constructor(page: Page) {
        super(page);
        this.loginPage = page;
    }

    private readonly loginPage: Page;

    async verifyLoginPage(validity:string){
          if (String(validity).toLowerCase() === "valid") {
            await expect(this.loginPage).toHaveURL(/dashboard/);
        } else {
            await expect(this.loginPage.getByText(/Incorrect email or password| *Enter Valid Email/)).toBeVisible();
        }
        
    }

}