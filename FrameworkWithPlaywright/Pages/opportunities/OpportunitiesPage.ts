import { test, Page, Locator } from "@playwright/test";

export class OpportunitiesPage {
    page: Page;

    private plushButton: Locator
    constructor(page: Page) {
        this.page = page;
        this.plushButton = page.locator("img[alt='Create Opportunity...']");

    }

    async clickOnPlushButtonForOpportunities(){
        await this.plushButton.click();
    }
    




}
