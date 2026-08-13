
import {  Page, Locator } from "@playwright/test"
import { BasePage } from "../BasePage";

export class LeadLandingPage extends BasePage {
    readonly plushButton: Locator;
    readonly importLead: Locator;
    readonly chooseFile: Locator;

    constructor(page: Page) {
        super(page);
        this.plushButton = page.locator("//img[@alt='Create Lead...']");
        this.importLead = page.locator("//img[@alt='Import Leads']");
        this.chooseFile = page.locator("//input[@id='import_file']");
    }
    async clickOnPlusButton(): Promise<void> {
        await this.click(this.plushButton);
    }
    async clickOnImportLead() {
        await this.click(this.importLead);
    }
    async clickOnChooseFileOption(filePath: string) {
        await this.uploadFile(this.chooseFile, filePath);
    }
}