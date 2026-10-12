import { ItemPage } from "../Pages/ItemsPage"
import test, { expect, Page } from "@playwright/test";
import { LoginPageSteps } from "./LoginPageSteps";

export class ItemPageSteps extends LoginPageSteps {
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
    async goToPlaceOrderPage(testData:any) {
   
        if (String(testData.validity).toLowerCase() === "valid") {
            await this.itemPage.clickOnCartButton();
            await this.itemPage.clickOnCheckButton();

        } else {
            await this.itemPage.clickOnCartButton();
            await expect(this.itemPage.findToasterByText(testData.massege)).toBeVisible();
        }
    }
    async addItemWithYourEnteredData(testData: any) {

        if (String(testData.validity).toLowerCase() == "valid") {

            await this.itemPage.verifyItemFound(testData.validity, testData.item);
            await this.addItemTocart(testData.item);
            await this.varifyAddedItem();

        } else {

            await this.itemPage.verifyItemFound(testData.validity, testData.item);
        }
    
    }
}