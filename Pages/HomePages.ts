import { type Locator, type Page } from "@playwright/test"

export class HomePage {
    private readonly registerLink: Locator;
    constructor(private page: Page) {
        this.registerLink = page.getByRole("link", { name: 'Register' });
    }

    async OpenPage() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
    async clickOnRegister() {
        await this.registerLink.click();
    }

}