import { Locator } from "@playwright/test";
import { Page } from "@playwright/test";

export class CheckOutPage{
    private readonly checkoutButton:Locator;
    constructor(page:Page){
        this.checkoutButton =page.getByRole("button",{name:"Checkout"});

    }
    async clickOnCheckButton(){
        await this.checkoutButton.click();
    }
}