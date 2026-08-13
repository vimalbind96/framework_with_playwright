import { test } from "../fixture/baseFixture";
import commonData from "../TestData/commonData.json"




test('upload leads file ', async ({ loginPage, homePage, leadLandingPage }) => {
    await loginPage.hitURL(commonData.HitUrl.url);
    await loginPage.fillUserNameValue(commonData.login.userName);
    await loginPage.fillPasswordValue(commonData.login.userPassword);
    await loginPage.clickLoginbutton();
    await homePage.clickOnLeadsModual();
    await leadLandingPage.clickOnImportLead();
    await leadLandingPage.clickOnChooseFileOption("C:\\Users\\Vimal Bind\\Desktop\\VimalChandBind_Resume.pdf");
})