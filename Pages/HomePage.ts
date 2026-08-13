import { test, Page, Locator } from "playwright/test"
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {


    readonly LeadModual: Locator;
    readonly contactModual: Locator;
    readonly opportunitiesModual: Locator;
    readonly organizationModual: Locator;
    readonly homePageDashboardDownSide: Locator;
    readonly allLinkTextOnHomePage: Locator;
    readonly feedback: Locator;
    readonly feedbackOption: Locator;
    readonly feedbackDescription: Locator;
    readonly administrator: Locator;
    readonly signOut: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.LeadModual = page.locator("//a[text()='Leads']");
        this.contactModual = page.locator("//a[text()='Contacts']");
        this.opportunitiesModual = page.locator("//a[contains(text(),'Home')]/parent::td/parent::tr/parent::tbody/parent::table//preceding-sibling::table/following-sibling::table//a[@href='index.php?module=Potentials&action=index']");
        this.organizationModual = page.locator("//img[@alt='Create Organization...']");
        this.homePageDashboardDownSide = page.locator("//tr[@id='headerrow_2']//b");
        this.allLinkTextOnHomePage = page.locator("//a");
        this.feedback = page.locator("//a[text()='Feedback']");
        this.feedbackOption = page.locator("//img[@src='themes/softed/images/info.PNG']");
        this.feedbackDescription = page.locator("//textarea[@name='description']");
        this.administrator = page.locator("//img[@src='themes/softed/images/user.PNG']");
        this.signOut = page.locator("//a[text()='Sign Out']");


    }
    async clickOnLeadsModual(): Promise<void> {
        await this.click(this.LeadModual);
    }
    async clickOnContact(): Promise<void> {
        await this.click(this.contactModual);
    }
    async clickOnOpportunitiesModual(): Promise<void> {
        await this.click(this.opportunitiesModual);
    }
    async clickOnOrganization(): Promise<void> {
        await this.click(this.organizationModual);
    }
    async scrolltoElement(): Promise<void> {
        this.scrollToElement(this.homePageDashboardDownSide);
    }

    async scrollToTop(): Promise<void> {
        this.scrollToElement(this.contactModual);
    }

    async getTextOfLastElement(): Promise<string | null> {
        return this.getText(this.homePageDashboardDownSide);
    }

    async getAllLinkTextOFHomepage(): Promise<void> {
        this.getAllTexts(this.allLinkTextOnHomePage);
    }

    async clickOnFeedback(): Promise<void> {
        await this.click(this.feedback);
    }

    async hoverOnfeedbackOption(): Promise<void> {
        await this.mouseHover(this.feedbackOption);
    }

    async fillValueInFeedbackDescription(value: string): Promise<void> {
        await this.fillValue(this.feedbackDescription, value);
    }

    async hoverOnAdministratorOption() {
        await this.mouseHover(this.administrator);
    }

    async clickOnSignOut(): Promise<void> {
        await this.click(this.signOut);
    }

    async countAllLinkOnHomePage(): Promise<Number> {
       return await this.genericCount(this.allLinkTextOnHomePage);
    }

}

