import { expect, Locator } from "@playwright/test";
import { Page } from "@playwright/test";
import { it } from "node:test";
export class ItemPage {
    private readonly page: Page;
    private readonly card: Locator;
    private readonly addtocartButton: Locator;
    private readonly checkoutButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.card = page.locator(".card");
        this.addtocartButton = page.locator('[routerlink="/dashboard/cart"]');
        this.checkoutButton = page.getByRole("button", { name: "Checkout" });


    }
    findToasterByText(text: string) {

        return this.page.getByText(text);
    }
    async additem(itemName: string) {

        await this.card.filter({ hasText: itemName }).getByRole("button", { name: " Add To Cart" }).click();
    }

    async verifyItemAddtoCart() {

        await expect(this.addtocartButton).toHaveCount(1);


    }

    async verifyItemFound(validity: string, itemName: string) {
        const item = this.card.filter({ hasText: itemName });

        const count = await item.count();
        if (String(validity).toLowerCase() === "valid") {
            await expect(item.first()).toBeVisible();
        } else {
            await expect(item).toHaveCount(0);
        }

         /* if (String(validity).toLowerCase() === "valid") {
              expect(count).toBeGreaterThan(0);
              console.log(`item = ${itemName} found in Home =${count}`)
          } else {
              expect(count).toBe(0);
              console.log(`item = ${itemName} found in Home =${count}`)
          }*/

    }
    async clickOnCartButton() {
        await this.addtocartButton.click();
    }
    async clickOnCheckButton() {
        await this.checkoutButton.click();
    }
}