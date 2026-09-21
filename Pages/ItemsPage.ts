import { expect, Locator } from "@playwright/test";
import { Page } from "@playwright/test";
export class ItemPage {
    private readonly card: Locator;
    private readonly addtocartButton: Locator;
    private readonly checkoutButton: Locator;
    constructor(page: Page) {
        this.card = page.locator(".card");
        this.addtocartButton = page.locator('[routerlink="/dashboard/cart"]');
        this.checkoutButton = page.getByRole("button", { name: "Checkout" });


    }
    async additem(itemName: string) {
        await this.card.filter({ hasText: itemName }).getByRole("button", { name: " Add To Cart" }).click();
    }

    async verifyItemAddtoCart() {
        await expect(this.addtocartButton).toContainText("1");
    }
    async clickOnCartButton() {
        await this.addtocartButton.click();
    }
    async clickOnCheckButton() {
        await this.checkoutButton.click();
    }
}