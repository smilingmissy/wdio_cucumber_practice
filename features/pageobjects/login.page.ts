import { $ } from '@wdio/globals'
import Page from './page.js';
class LoginPage extends Page {
   
    public get inputUsername () {
        return $('#username');
    }

    public get inputPassword () {
        return $('#password');
    }


    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
       
    }

    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
