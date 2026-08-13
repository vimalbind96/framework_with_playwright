import { test as base } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage"
import { HomePage } from "../Pages/HomePage"
import { LeadLandingPage } from "../Pages/LeadModual/LeadLandingPage";
import { LeadCreatePage } from "../Pages/LeadModual/LeadCreatePage";
import { LeadDetailPage } from "../Pages/LeadModual/LeadDetailPage"
import { CommonPage } from "../Pages/CommonPage";

type MyFixture = {
    loginPage: LoginPage;
    homePage: HomePage;
    leadLandingPage: LeadLandingPage;
    leadCreatePage: LeadCreatePage;
    leadDetailPage: LeadDetailPage;
    commonPage: CommonPage;
}



export const test = base.extend<MyFixture>({

    loginPage: async ({ page }, use) => {
        let lp: LoginPage = new LoginPage(page);
        await use(lp);
    },
    homePage: async ({ page }, use) => {
        let hp: HomePage = new HomePage(page);
        await use(hp);
    },
    leadLandingPage:async({page},use)=>{
        let leadLanding:LeadLandingPage=new LeadLandingPage(page);
        await use(leadLanding);
    },
    leadCreatePage:async({page},use)=>{
        let leadCreate:LeadCreatePage=new LeadCreatePage(page);
        await use(leadCreate);
    },
    leadDetailPage:async({page},use)=>{
        let leadDetail:LeadDetailPage=new LeadDetailPage(page);
        await use(leadDetail);
    },
    commonPage:async({page},use)=>{
        let common:CommonPage=new CommonPage(page);
        await use(common);
    }




})

















