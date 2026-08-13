
import { test, Page, expect, Locator } from "@playwright/test"
import { BasePage } from "../BasePage";

export class LeadDetailPage extends BasePage {
    readonly newLeadInformation: Locator;
    readonly editButton: Locator;
    readonly deleteButton: Locator;
    readonly FirstNameadded: Locator;
    readonly lastNameAdded: Locator;
    readonly companyNameAdded: Locator;
    readonly mobileNumberadded: Locator;
    readonly emailIdAdded: Locator;

    constructor(page: Page) {
        super(page);
        this.newLeadInformation = page.locator("//span[contains(text(),'Lead Information')]");
        this.editButton = page.locator("//td[@class='dvtTabCache']//input[@name='Edit']");
        this.deleteButton = page.locator("//td[@class='dvtTabCache']//input[@name='Delete']");
        this.FirstNameadded = page.locator("//span[@id='dtlview_First Name']");
        this.lastNameAdded = page.locator("//span[@id='dtlview_Last Name']");
        this.companyNameAdded = page.locator("//span[@id='dtlview_Company']");
        this.mobileNumberadded = page.locator("//span[@id='dtlview_Mobile']");
        this.emailIdAdded = page.locator("//span[@id='editarea_Email']");
        


    }

    async clickOnEditButton() {
        await this.click(this.editButton);
    }

    async clickOnDeleteButton() {
        await this.click(this.deleteButton);
    }


}
