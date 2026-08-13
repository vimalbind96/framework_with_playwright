import { Locator, Page } from "playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    page: Page;

    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.userName = page.locator("//input[@name='user_name']");
        this.password = page.locator("//input[@name='user_password']");
        this.loginButton = page.locator("//input[@type='submit']");
    }
    async launchBrowser(url: string) {
        await this.page.goto(url);
    }

    async fillUserNameValue(username:string){
        await this.fillValue(this.userName,username);
    }
    async fillPasswordValue(password:string){
        await this.fillValue(this.password,password);
    }
    async clickLoginbutton(){
        await this.click(this.loginButton);
    }




    // async loginWithValidCredential(username:string,password:string) {
    //     await this.fillValue(this.userName, username);
    //     await this.fillValue(this.password, password);
    //     await this.click(this.loginButton);
    // }

    async getInputUserNameValue():Promise<string>{
    return await this.getInputValue(this.userName);
    }

    async getInputpasswordValue():Promise<string>{
       return await this.getInputValue(this.password);
    }
}
