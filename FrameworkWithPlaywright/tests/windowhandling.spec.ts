import test, { Page } from "@playwright/test";


test("verify vtiger ",async({page})=>{
await page.goto("http://localhost:8888/");
await page. locator("//input[@name='user_name']").fill("admin");
await page. locator("//input[@name='user_password']").fill("admin1");
await page. locator("//input[@type='submit']").click();
await page.locator("//img[@src='themes/softed/images/info.PNG']").hover();
await page.locator("//a[text()='Feedback']").click();
await page.waitForTimeout(4000);
let pages:Page[]=page.context().pages();
let feedbackPage:Page=pages[1];
await page.waitForTimeout(4000);
await feedbackPage.locator("//textarea[@name='description']").fill("I am Vimal");
})
