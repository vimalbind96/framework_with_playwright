import { expect,Page  } from "@playwright/test";
import {test} from "../fixture/baseFixture"
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import commonData from "../TestData/commonData.json";
import { LeadLandingPage } from "../Pages/LeadModual/LeadLandingPage";
import { LeadCreatePage } from "../Pages/LeadModual/LeadCreatePage";
import { LeadDetailPage } from "../Pages/LeadModual/LeadDetailPage";
import testData from "../TestData/testData.json"






    test.beforeEach('Before each ', async ({ page,loginPage }) => {
        await loginPage.hitURL(commonData.HitUrl.url);
        expect(page).toHaveURL(testData.ValidationData.expectedLoginPageURL);
        await loginPage.fillUserNameValue(commonData.login.userName);
        await loginPage.fillPasswordValue(commonData.login.userPassword);
        await loginPage.clickLoginbutton();
    })




    test("TC 004", async ({ page }) => {
        let homepage: HomePage = new HomePage(page);
        await homepage.hoverOnfeedbackOption();
        await homepage.clickOnFeedback();
        await page.waitForTimeout(4000);
        let feedbackPage:Page= await homepage.switchToWindowByURL(testData.ValidationData.expectedFeedbackPageUrl);
        homepage = new HomePage(feedbackPage);
        await homepage.fillValueInFeedbackDescription("vimal bind adampur");



    })


    test("TC 005", async ({ page }) => {
        let homepage: HomePage = new HomePage(page);
        await homepage.clickOnLeadsModual();
        let leadLandingpage: LeadLandingPage = new LeadLandingPage(page);
        await leadLandingpage.clickOnPlusButton();
        let createpage: LeadCreatePage = new LeadCreatePage(page);
        await createpage.fillLastName(commonData.Mandatory_Fields_ForLeadCreation.lastName);
        await createpage.fillCompanyName(commonData.Mandatory_Fields_ForLeadCreation.company);
        await createpage.clickOnSaveButton();
    })


    test.afterEach('', async ({ page,homePage }) => {
        await homePage.hoverOnAdministratorOption();
        await homePage.clickOnSignOut();

    })



test('Tc006', async ({ page }) => {
    await createNewLead(page);



})



async function createNewLead(page: Page) {
    let loginpage: LoginPage = new LoginPage(page);
    await expect(page).toHaveURL(testData.ValidationData.expectedLoginPageURL);
    await loginpage.hitURL(commonData.HitUrl.url);
    await loginpage.fillUserNameValue(commonData.login.userName);
    await loginpage.fillPasswordValue(commonData.login.userPassword);
    await loginpage.clickLoginbutton();
    await expect(page).toHaveTitle(testData.ValidationData.expectedHomePageTitle);
    let homepage: HomePage = new HomePage(page);
    await homepage.clickOnLeadsModual();
    let leadLandingpage: LeadLandingPage = new LeadLandingPage(page);
    await leadLandingpage.clickOnPlusButton();
    let createpage: LeadCreatePage = new LeadCreatePage(page);
    await createpage.selectTitleOfName(commonData.CreateLeadWithAllFields.titleOfName);
    await createpage.fillFirstName(commonData.CreateLeadWithAllFields.firstName);
    await createpage.fillLastName(commonData.CreateLeadWithAllFields.lastName);
    await createpage.fillCompanyName(commonData.CreateLeadWithAllFields.company);
    await createpage.fillTitle(commonData.CreateLeadWithAllFields.Title);
    await createpage.fillPhoneNumber(commonData.CreateLeadWithAllFields.phone);
    await createpage.fillMobileNumber(commonData.CreateLeadWithAllFields.mobile);
    await createpage.selectLeadSource(commonData.CreateLeadWithAllFields.leadSource);
    await createpage.selectIndustryName(commonData.CreateLeadWithAllFields.industry);
    await createpage.fillAnnualRevenue(commonData.CreateLeadWithAllFields.annualRevenue);
    await createpage.fillNoOfEmployee(commonData.CreateLeadWithAllFields.noOfEmployee);
    await createpage.fillSecondryEmail(commonData.CreateLeadWithAllFields.secondryEmail);
    await createpage.fillFaxId(commonData.CreateLeadWithAllFields.faxId);
    await createpage.fillEmailId(commonData.CreateLeadWithAllFields.emailId);
    await createpage.fillWebsite(commonData.CreateLeadWithAllFields.website);
    await createpage.selectLeadStatus(commonData.CreateLeadWithAllFields.leadStatus);
    await createpage.selectRating(commonData.CreateLeadWithAllFields.rating);
    await createpage.fillStreetName(commonData.CreateLeadWithAllFields.street);
    await createpage.fillPOBoxValue(commonData.CreateLeadWithAllFields.POBox);
    await createpage.fillPostalcode(commonData.CreateLeadWithAllFields.postalCode);
    await createpage.fillCityValue(commonData.CreateLeadWithAllFields.city);
    await createpage.fillStateName(commonData.CreateLeadWithAllFields.state);
    await createpage.fillCountryName(commonData.CreateLeadWithAllFields.country);
    await createpage.fillDiscription(commonData.CreateLeadWithAllFields.discription);
    await createpage.clickOnSaveButton();


}














// test("Create Lead And Delete Lead", async ({ page }) => {
//    // await createLead(page);
//     let leaddetailPage: LeadDetailPage = new LeadDetailPage(page);
//     let leadId: string = await leaddetailPage.getInnerText(leaddetailPage.newLeadInformation);
//     console.log(leadId);
//     await leaddetailPage.alertAccept();
//     await leaddetailPage.clickOnDeleteButton();

// })
