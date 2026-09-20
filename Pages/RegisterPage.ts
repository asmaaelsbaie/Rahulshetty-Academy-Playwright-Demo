import { expect, Locator, Page } from "@playwright/test";
import { HomePage } from "./HomePages";

 export class RegisterPage extends HomePage{
    private readonly firstName:Locator;
    private readonly lastName:Locator;
    private readonly email:Locator;
    private readonly phoneNumber:Locator;
    private readonly occupationSelector:Locator;
    private readonly gender:Locator;
    private readonly password:Locator;
    private readonly confirmPassword:Locator;
    private readonly checkBox:Locator;
    private readonly SuccessMessage:Locator;
    private readonly loginbutton:Locator;
    private readonly registerButton:Locator;

constructor (page:Page){
    super(page);
this.firstName= page.getByRole('textbox', { name: 'First Name' });
 this.lastName= page.getByRole('textbox', { name: 'Last Name' });
this.email= page.getByRole('textbox', { name: 'email@example.com' });
 this.phoneNumber= page.getByRole('textbox', { name: 'enter your number' });
 this.occupationSelector=  page.getByRole('combobox');
this.gender= page.getByRole('radio', { name: 'Female' });
 this.password= page.getByRole('textbox', { name: 'Passsword' });
  this.confirmPassword =page.getByRole('textbox', { name: 'Confirm Password' });
 this.checkBox=page.getByRole('checkbox');
this.SuccessMessage=page.getByRole('heading', { name: 'Account Created Successfully' });
this.loginbutton=page.getByRole("button",{name :'Login'});
this.registerButton= page.getByRole('button', { name: 'Register' });
}
async enterFirstName(firstName:string){
   await  this.firstName.fill(firstName);
}
async enterLastName(lastName:string){
   await  this.lastName.fill(lastName);
}
async enterEmail(email:string){
   await  this.email.fill(email);
}
async enterPhoneNumber(phoneNumber:string){
   await  this.phoneNumber.fill(phoneNumber);
}
async selectOccpation(selectoption:string){
  await  this.occupationSelector.selectOption(selectoption);
}
async selectFemaleGender(){
    await this.gender.click();
}
async enterPassword(password:string){
    await this.password.fill(password);
    
}
async enterPasswordConfirm(password:string){
    await this.confirmPassword.fill(password);
}

async checkerfor18yearsOrOlder(){
    await this.checkBox.check();
}
async verifyRegisterDoneSuccessfully(){
    await expect(this.SuccessMessage).toContainText("Account Created Successfully");
}
async clickOnLogin(){

    await this.loginbutton.click();
}
async clickOnRegisterButton(){
    await this.registerButton.click();
    
}
    


}