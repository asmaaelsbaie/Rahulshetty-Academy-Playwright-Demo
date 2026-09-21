import { ItemPage } from "../Pages/ItemsPage"
import { Page } from "@playwright/test";
import { LoginPageSteps } from "./LoginPageSteps";

export class ItemPageSteps extends LoginPageSteps  {
    private readonly itemPage;
    constructor(page: Page) {
        super(page);
        this.itemPage = new ItemPage(page);
    }
    async addItemTocart(itemName: string) {
        await this.itemPage.additem(itemName);
    }
    async varifyAddedItem() {
        await this.itemPage.verifyItemAddtoCart();
    }
    async goToPlaceOrderPage() {
        await this.itemPage.clickOnCartButton();
        await this.itemPage.clickOnCheckButton();
    }
    async addItemWithYourEnteredData(itemName: string) {
        await this.addItemTocart(itemName)
        await this.varifyAddedItem();
    }
}