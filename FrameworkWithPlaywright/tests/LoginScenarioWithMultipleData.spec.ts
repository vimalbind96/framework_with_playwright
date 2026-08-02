import test, { expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import commonData  from "../TestData/commonData.json";
import loginData from "../TestData/LoginWithMultipleData.json"
import testData from "../TestData/testData.json"

loginData.forEach((dataV)=>{
test(`Verify Login with  ${dataV.label}`,async({page})=>{
let loginpage:LoginPage=new LoginPage(page);
await loginpage.hitURL(commonData.HitUrl.url);
await loginpage.fillUserNameValue(dataV.userName);
await loginpage.fillPasswordValue(dataV.password);
await loginpage.clickLoginbutton();
if(dataV.status=="success"){
expect(page).toHaveTitle(testData.ValidationData.expectedHomePageTitle);
}else{
    expect(loginpage.userName).toBeVisible();
}
});
});















