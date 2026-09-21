import { Locator } from "@playwright/test";
import { Page } from "@playwright/test";

export class PlaceOrderPage {
    private readonly creditCardNumber: Locator;
    private readonly expireDateSelction1: Locator;
    private readonly expireDateSelection2: Locator;
    private readonly csvNumber: Locator;
    private readonly nameOnCard: Locator;
    private readonly country: Locator;
    private readonly suggationList: Locator;
    constructor(page: Page) {
        this.creditCardNumber = page
            .locator('.field')
            .filter({ hasText: 'Credit Card Number' })
            .locator('input');
        this.expireDateSelction1 = page
            .locator('.field')
            .filter({ hasText: 'Expiry Date' })
            .locator('select')
            .first();
        this.expireDateSelection2 = page
            .locator('.field')
            .filter({ hasText: 'Expiry Date' })
            .locator('select')
            .nth(1);
        this.csvNumber = page
            .locator('.field')
            .filter({ hasText: 'CVV Code' })
            .locator('input');
        this.nameOnCard = page
            .locator('.field')
            .filter({ hasText: 'Name on Card' })
            .locator('input');
        this.country = page.getByPlaceholder("Select Country");
        this.suggationList = page.locator(".ta-results.list-group.ng-star-inserted");

    }

    async enterCrediteCardNumber(cardNumber: string) {
        await this.creditCardNumber.fill(cardNumber);
    }
    async enterExpiredateSelection(select1: string, select2: string) {
        await this.expireDateSelction1.selectOption(select1);
        await this.expireDateSelection2.selectOption(select2);

    }
    async enterCsvNumber(csvNumber: string) {
        await this.csvNumber.fill(csvNumber);
    }
    async enterNameCard(nameCard: string) {
        await this.nameOnCard.fill(nameCard);
    }
    async selectConutry(partial: string, country: string) {
        await this.country.pressSequentially(partial, { delay: 100 });
        await this.suggationList.filter({ hasText: country }).click();
    }
}