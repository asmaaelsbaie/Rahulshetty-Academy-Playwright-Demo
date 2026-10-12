import { PlaceOrderPage } from "../Pages/PlaceOrderPage";
import { CheckOutPageSteps } from "./CheckOutPageSteps";
import { Page } from "@playwright/test";

export class PlaceOrderSteps extends CheckOutPageSteps {
    private readonly placeOrderPage;
    constructor(page: Page) {
        super(page);
        this.placeOrderPage = new PlaceOrderPage(page);
    }
    async enterPlaceOrderData(testData:any) {
        await this.placeOrderPage.enterCrediteCardNumber(testData.creditCardNumber);
        await this.placeOrderPage.enterExpiredateSelection(testData.expiryDateSelect1, testData.expiryDateSelect2);
        await this.placeOrderPage.enterCsvNumber(testData.csvNumber);
        await this.placeOrderPage.enterNameCard(testData.nameCard);
        await this.placeOrderPage.selectConutry(testData.partial, testData.countryFullName);
    }
    async completePlaceOrder() {
        await this.placeOrderPage.clickPlaceOrderButton();
        await this.placeOrderPage.verifyOrderPlaced();
    }
}