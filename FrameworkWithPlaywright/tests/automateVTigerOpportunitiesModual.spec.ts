import { test } from "../fixture/baseFixture";
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import { OpportunitiesPage } from "../Pages/opportunities/opportunitiesPage";
import { CreateOpportunitiesPage } from "../Pages/opportunities/createOpportunitiesPage";
import   commonData from "../TestData/commonData.json";


test("create opportunities ", async ({ page,loginPage }) => {
    await loginPage.launchBrowser(commonData.HitUrl.url);
    await loginPage.fillUserNameValue(commonData.login.userName);
    await loginPage.fillPasswordValue(commonData.login.userPassword);
    await loginPage.clickLoginbutton();

    // let homepage: HomePage = new HomePage(page);
    // await homepage.clickOnOpportunitiesModual();
    // let opportunitiesPage: OpportunitiesPage = new OpportunitiesPage(page);
    // await opportunitiesPage.clickOnPlushButtonForOpportunities();
    // let createOpportunities: CreateOpportunitiesPage = new CreateOpportunitiesPage(page);
    // await createOpportunities.createOpportunitiesWithMandotaryField();
    
})

test("verify home page", async ({ page }) => {
    let loginpage: LoginPage = new LoginPage(page);
    await loginpage.hitURL(commonData.HitUrl.url);
    await loginpage.fillUserNameValue(commonData.login.userName);
    let UsernameInputValue = await loginpage.getInputUserNameValue();
    console.log(UsernameInputValue);
    await loginpage.fillPasswordValue(commonData.login.userPassword);
    let passInputValue = await loginpage.getInputpasswordValue();
    console.log(passInputValue);
    await loginpage.clickLoginbutton();
    await loginpage.takeFullPageScreenshot("C:\\Users\\Vimal Bind\\Desktop\\full screenshot of home page.png");

    let homepage: HomePage = new HomePage(page);
    let titleOfHomePage: string = await homepage.getTitle();
    console.log(titleOfHomePage);
    await homepage.scrolltoElement();
    let textOfLastElementofPage: string | null = await homepage.getTextOfLastElement();
    console.log(textOfLastElementofPage);
    await homepage.scrollToTop();
    await homepage.clickOnContact();
})


