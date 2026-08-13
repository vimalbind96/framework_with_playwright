
import { test, Page, Locator } from "@playwright/test"
import { BasePage } from "../BasePage";

export class CreateOpportunitiesPage extends BasePage {

    page: Page;
    readonly saveButton: Locator;
    readonly opportunitiesName: Locator;
    readonly addOpportunities: Locator;
    readonly cleareOpportunities: Locator;

    constructor(page: Page) {
        super();
        this.page = page;
        this.saveButton = page.locator("//b[text()='Opportunity Information:']/parent::td/parent::tr//preceding-sibling::tr//input[@title='Save [Alt+S]']");
        this.opportunitiesName = page.locator("input[name='potentialname']");
        this.addOpportunities = page.locator("//input[@id='related_to']//following-sibling::img[@src='themes/softed/images/select.gif']");
        this.cleareOpportunities = page.locator("//input[@id='related_to']//following-sibling::input[@src='themes/images/clear_field.gif']");
    }
    async clickOnSaveButton() {
        await this.saveButton.click();
    }

    async createOpportunitiesWithMandotaryField() {
        await this.fillValue(this.opportunitiesName,"QA Tester");
        await this.click(this.addOpportunities);3
        
        await this.click(this.saveButton);

    }

    async createOpportunitiesWithAllField(){
        

    }
}




