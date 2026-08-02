import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class CommonPage extends BasePage {

    readonly leadSearchForInputBox: Locator;
    readonly searchLeadThrow: Locator;
    readonly searchNowButton: Locator;
    readonly filterBox:Locator;

    constructor(page: Page) {
        super(page);
        this.leadSearchForInputBox = page.locator("//input[@name='search_text']");
        this.searchLeadThrow = page.locator("//div[@id='basicsearchcolumns_real']//select[@id='bas_searchfield']");
        this.searchNowButton = page.locator("input[name='submit']");
        this.filterBox=page.locator("select[id='viewname']");

    }
    async fillValueForSearchLead(valueForSearch: string) { 
        await this.fillValue(this.leadSearchForInputBox, valueForSearch);
    }

    async selectValueForSearchLead(selectByLabelValue: string) {
        await this.selectByLabel(this.searchLeadThrow, selectByLabelValue);
    }

    async clickOnSearchNowButton(){
        await this.click(this.searchNowButton);
    }

    async selectFilterByText(valueForSelect:string){
        await this.selectByText(this.filterBox,valueForSelect);
    }

}