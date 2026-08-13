
import  { expect } from "@playwright/test";
import {test} from "../fixture/baseFixture"
import createLead from "../TestData/LeadCreateData.json"
import commonData from "../TestData/commonData.json";
import testDat from "../TestData/testData.json";





test.describe('data driven',async()=>{

test.beforeEach(async ({ page ,loginPage}) => {
     await loginPage.hitURL(commonData.HitUrl.url);
    await expect(page).toHaveURL(testDat.ValidationData.expectedLoginPageURL); 
    await loginPage.fillUserNameValue(commonData.login.userName);
    await loginPage.fillPasswordValue(commonData.login.userPassword);
    await loginPage.clickLoginbutton();
    await expect(page).toHaveTitle(testDat.ValidationData.expectedHomePageTitle);
})

createLead.forEach((CreateLeadData) => {
    test(`Verify Create Lead And Verify ${CreateLeadData.label}`, async ({homePage ,leadLandingPage,leadCreatePage}) => {
        await homePage.clickOnLeadsModual();
        await leadLandingPage.clickOnPlusButton();
        await leadCreatePage.selectTitleOfName(CreateLeadData.titleOfName);
        await leadCreatePage.fillFirstName(CreateLeadData.firstName);
        await leadCreatePage.fillLastName(CreateLeadData.lastName);
        await leadCreatePage.fillCompanyName(CreateLeadData.company);
        await leadCreatePage.fillTitle(CreateLeadData.Title);
        await leadCreatePage.fillPhoneNumber(CreateLeadData.phone);
        await leadCreatePage.fillMobileNumber(CreateLeadData.mobile);
        await leadCreatePage.selectLeadSource(CreateLeadData.leadSource);
        await leadCreatePage.selectIndustryName(CreateLeadData.industry);
        await leadCreatePage.fillAnnualRevenue(CreateLeadData.annualRevenue);
        await leadCreatePage.fillNoOfEmployee(CreateLeadData.noOfEmployee);
        await leadCreatePage.fillSecondryEmail(CreateLeadData.secondryEmail);
        await leadCreatePage.fillFaxId(CreateLeadData.faxId);
        await leadCreatePage.fillEmailId(CreateLeadData.emailId);
        await leadCreatePage.fillWebsite(CreateLeadData.website);
        await leadCreatePage.selectLeadStatus(CreateLeadData.leadStatus);
        await leadCreatePage.selectRating(CreateLeadData.rating);
        await leadCreatePage.fillStreetName(CreateLeadData.street);
        await leadCreatePage.fillPOBoxValue(CreateLeadData.POBox);
        await leadCreatePage.fillPostalcode(CreateLeadData.postalCode);
        await leadCreatePage.fillCityValue(CreateLeadData.city);
        await leadCreatePage.fillStateName(CreateLeadData.state);
        await leadCreatePage.fillCountryName(CreateLeadData.country);
        await leadCreatePage.fillDiscription(CreateLeadData.discription);
        await leadCreatePage.clickOnSaveButton();

    });
});

test('Verify Lead Create With mandotary Data',
     async ({homePage,leadLandingPage,leadCreatePage }) => {
    await homePage.clickOnLeadsModual();
    await leadLandingPage.clickOnPlusButton();
    await leadCreatePage.fillLastName(commonData.Mandatory_Fields_ForLeadCreation.lastName);
    await leadCreatePage.fillCompanyName(commonData.Mandatory_Fields_ForLeadCreation.company);
    await leadCreatePage.clickOnSaveButton();
});
test.afterEach(async ({homePage}) => {
    await homePage.hoverOnAdministratorOption();
    await homePage.clickOnSignOut();
})
})


test.describe('only search ',async()=>{
test("Verify Search Lead By First Name ", async ({ page ,homePage,commonPage,loginPage}) => {
    await loginPage.hitURL(commonData.HitUrl.url);
    await loginPage.fillUserNameValue(commonData.login.userName);
    await loginPage.fillPasswordValue(commonData.login.userPassword);
    await loginPage.clickLoginbutton();
    await homePage.clickOnLeadsModual();
    await commonPage.fillValueForSearchLead("Vimal");
    await commonPage.selectValueForSearchLead("First Name");
    await commonPage.clickOnSearchNowButton();
});
})
