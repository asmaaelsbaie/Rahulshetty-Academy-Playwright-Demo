import { CheckOutPage } from "../Pages/checkOutPage";
import { ItemPageSteps } from "./ItemPageSteps";
import { Page } from "@playwright/test";

export class CheckOutPageSteps extends ItemPageSteps{
    private readonly checkoutPage;
    constructor(page:Page){
        super(page);
        this.checkoutPage=new CheckOutPage(page);
    }
    async openCheckOutPage(){
        await this.checkoutPage.clickOnCheckButton();
    }

}