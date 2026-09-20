import { PlaceOrderPage } from "../Pages/PlaceOrderPage";
import { CheckOutPageSteps } from "./CheckOutPageSteps";
import { Page } from "@playwright/test";

export class PlaceOrderSteps extends CheckOutPageSteps {
private readonly placeOrderPage;
    constructor (page:Page){
        super(page);
        this.placeOrderPage=new PlaceOrderPage(page);
    }
    async enterPlaceOrderData(cardNumber:string ,select1:string,select2:string,csvNumber:string,nameCard:string){
        await this.placeOrderPage.enterCrediteCardNumber(cardNumber);
        await this.placeOrderPage.enterExpiredateSelection(select1,select2);
        await this.placeOrderPage.enterCsvNumber(csvNumber);
        await this.placeOrderPage.enterNameCard(nameCard);
    }
}