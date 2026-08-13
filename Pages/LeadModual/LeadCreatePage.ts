import { test, Page, Locator } from "playwright/test"
import { BasePage } from "../BasePage";

export class LeadCreatePage extends BasePage {

    readonly nametitle: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator;
    readonly title: Locator;
    readonly phone: Locator;
    readonly mobile: Locator;
    readonly leadSource: Locator;
    readonly industry: Locator;
    readonly annualRevenue: Locator;
    readonly noOfEmployee: Locator;
    readonly secondryEmail: Locator;
    readonly faxId: Locator;
    readonly emailId: Locator;
    readonly webSite: Locator;
    readonly landStatus: Locator;
    readonly rating: Locator;
    readonly assign: Locator;
    readonly street: Locator;
    readonly POBox: Locator;
    readonly postalCode: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly country: Locator;
    readonly discription: Locator;
    readonly saveButton: Locator;
    readonly cancleButton: Locator;

    constructor(page: Page) {
        super(page);

        this.nametitle = page.locator("//select[@name='salutationtype']");
        this.firstName = page.locator("//input[@name='firstname']");
        this.lastName = page.locator("//input[@name='lastname']");
        this.company = page.locator("//input[@name='company']");
        this.title = page.locator("//input[@name='designation']");
        this.phone = page.locator("//input[@name='phone']");
        this.mobile = page.locator("//input[@name='mobile']");
        this.leadSource = page.locator("//select[@name='leadsource']");
        this.industry = page.locator("//select[@name='industry']");
        this.annualRevenue = page.locator("//input[@name='annualrevenue']");
        this.noOfEmployee = page.locator("//input[@id='noofemployees']");
        this.secondryEmail = page.locator("//input[@name='secondaryemail']");
        this.faxId = page.locator("//input[@id='fax']");
        this.emailId = page.locator("//input[@id='email']");
        this.webSite = page.locator("//input[@name='website']");
        this.landStatus = page.locator("//select[@name='leadstatus']");
        this.rating = page.locator("//select[@name='rating']");
        this.assign = page.locator("//input[@value='T']");
        this.street = page.locator("//textarea[@name='lane']");
        this.POBox = page.locator("//input[@id='pobox']");
        this.postalCode = page.locator("//input[@id='code']");
        this.city = page.locator("//input[@id='city']");
        this.state = page.locator("//input[@id='state']");
        this.country = page.locator("//input[@id='country']");
        this.discription = page.locator("//textarea[@name='description']");
        this.saveButton = page.locator("//b[text()='Address Information']/parent::td/parent::tr//preceding-sibling::tr//input[@title='Save [Alt+S]']");
        this.cancleButton = page.locator("//b[text()='Address Information']/parent::td/parent::tr//preceding-sibling::tr//input[@title='Cancel [Alt+X]']");
    }


    async selectTitleOfName(valueOfText: string) {
        await this.selectByText(this.nametitle, valueOfText);
    }
    async fillFirstName(firstNameValue: string): Promise<void> {
        await this.fillValue(this.firstName, firstNameValue);
    }
    async fillLastName(lastNameValue: string): Promise<void> {
        await this.fillValue(this.lastName, lastNameValue);
    }
    async fillCompanyName(companyName: string): Promise<void> {
        await this.fillValue(this.company, companyName);
    }
    async fillTitle(titlename: string): Promise<void> {
        await this.fillValue(this.title, titlename);
    }
    async fillMobileNumber(mobileNumber: string): Promise<void> {
        await this.fillValue(this.mobile, mobileNumber);
    }
    async fillPhoneNumber(phoneNumber: string): Promise<void> {
        await this.fillValue(this.phone, phoneNumber);
    }
    async selectLeadSource(leadSource: string): Promise<void> {
        await this.selectByText(this.leadSource, leadSource);
    }
    async selectIndustryName(industryName: string): Promise<void> {
        await this.selectByText(this.industry, industryName);
    }
    async fillAnnualRevenue(annualRevenue: string): Promise<void> {
        await this.fillValue(this.annualRevenue, annualRevenue);
    }
    async fillNoOfEmployee(noOfEmployee: string): Promise<void> {
        await this.fillValue(this.noOfEmployee, noOfEmployee);
    }
    async fillSecondryEmail(secondryEmail: string): Promise<void> {
        await this.fillValue(this.secondryEmail, secondryEmail);
    }
    async fillFaxId(faxid: string): Promise<void> {
        await this.fillValue(this.faxId, faxid);
    }
    async fillEmailId(emailId: string): Promise<void> {
        await this.fillValue(this.emailId, emailId);
    }
    async fillWebsite(website: string): Promise<void> {
        await this.fillValue(this.webSite, website);
    }
    async selectLeadStatus(leadStatus: string): Promise<void> {
        await this.selectByLabel(this.landStatus, leadStatus);
    }
    async selectRating(rating: string): Promise<void> {
        await this.selectByLabel(this.rating, rating);
    }
    async clickOnAssigned(): Promise<void> {
        await this.click(this.assign);
    }
    async fillStreetName(streetName: string): Promise<void> {
        await this.fillValue(this.street, streetName);
    }
    async fillPOBoxValue(POValue: string): Promise<void> {
        await this.fillValue(this.POBox, POValue);
    }
    async fillPostalcode(postalcode: string): Promise<void> {
        await this.fillValue(this.postalCode, postalcode);
    }
    async fillCityValue(city: string): Promise<void> {
        await this.fillValue(this.city, city);
    }
    async fillStateName(stateName: string): Promise<void> {
        await this.fillValue(this.state, stateName);
    }
    async fillCountryName(country: string): Promise<void> {
        await this.fillValue(this.country, country);
    }
    async fillDiscription(discription: string): Promise<void> {
        await this.fillValue(this.discription, discription);
    }
    async clickOnSaveButton(): Promise<void> {
        await this.click(this.saveButton);
    }
    async clickOnCancleButton(): Promise<void> {
        await this.click(this.cancleButton);
    }
    async createLeadWithMandotaryField(lastName: string, companyName: string) {
        await this.fillValue(this.lastName, lastName);
        await this.fillValue(this.company, companyName);
    }

    //
    //      ||  getInputValue  ||           //
    //

    async getTitleOfName(): Promise<string> {
        return await this.getInput(this.nametitle);
    }
    async getfirstNameValue(): Promise<string> {
        return await this.getInputValue(this.firstName);
    }
    async getLastNameValue(): Promise<string> {
        return await this.getInputValue(this.lastName);
    }
    async getCompanyNameValue(): Promise<string> {
        return await this.getInputValue(this.company);
    }
    async getTitleNameValue(): Promise<string> {
        return await this.getInputValue(this.title);
    }
    async getMobileNumberValue(): Promise<string> {
        return await this.getInputValue(this.mobile);
    }
    async getPhoneNumberValue(): Promise<string> {
        return await this.getInputValue(this.phone);
    }
    async getLeadSorceValue(): Promise<string> {
        return await this.getInputValue(this.leadSource);
    }
    async getIndustrySelectedValue(): Promise<string> {
        return await this.getInputValue(this.industry);
    }
    async getAnnualReValue(): Promise<string> {
        return await this.getInputValue(this.annualRevenue);
    }
    async getNoOfEmployeeValue(): Promise<string> {
        return await this.getInputValue(this.noOfEmployee);
    }
    async getSecondryEmailValue(): Promise<string> {
        return await this.getInputValue(this.secondryEmail);
    }
    async getFaxValueValue(): Promise<string> {
        return await this.getInputValue(this.faxId);
    }
    async getEmailIdValue(): Promise<string> {
        return await this.getInputValue(this.emailId);
    }
    async getWebsiteValue(): Promise<string> {
        return await this.getInputValue(this.webSite);
    }
    async getLandStatusValue(): Promise<string> {
        return await this.getInputValue(this.landStatus);
    }
    async getRatingValue(): Promise<string> {
        return await this.getInputValue(this.rating);
    }
    async getStreetValue(): Promise<string> {
        return await this.getInputValue(this.street);
    }
    async getPOValue(): Promise<string> {
        return await this.getInputValue(this.POBox);
    }
    async getCityValue(): Promise<string> {
        return await this.getInputValue(this.city);
    }
    async getStateValue(): Promise<string> {
        return await this.getInputValue(this.state);
    }
    async getCountryValue(): Promise<string> {
        return await this.getInputValue(this.country);
    }
    async getDiscriptionValue(): Promise<string> {
        return await this.getInputValue(this.discription);
    }
    async getPostalValue(): Promise<string> {
        return await this.getInputValue(this.postalCode);
    }

}
