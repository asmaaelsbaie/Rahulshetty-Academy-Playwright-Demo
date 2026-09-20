import { Page } from "@playwright/test";
import { RegisterPage } from "./RegisterPage";

export class LoginPage extends RegisterPage{
    constructor (page:Page){
super(page);
    }
    
}