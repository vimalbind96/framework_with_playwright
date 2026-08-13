
import { Locator, Page } from "@playwright/test"
import { BasePage } from "../BasePage";
export class ContactPage extends BasePage {
    readonly plushButton: Locator;

    constructor(page: Page) {
        super(page);
        this.plushButton = page.locator("//img[@alt='Create Contact...']");
    }

    async clickOnPlushButton() {
        await this.click(this.plushButton);
    }


}

