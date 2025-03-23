import { getLoginPage } from "../../pageObjects/loginPageObject";

export function LoginPage()
{
    Cypress.Commands.add("validUserLogin",()=>
        {
            //Create Object 
            const loginPage = new getLoginPage(); 
            
            //Add properties to object
            // loginPage.signIn();
            loginPage.validUsernameInput();
            loginPage.validPasswordInput();
            loginPage.clickLoginBtn();
        });
        
    Cypress.Commands.add("UserLoginSuccessful",(username, password)=>
        {
            cy.validUserLogin(username, password)    
        });

    Cypress.Commands.add("faultyUserLogin",()=>
        {
            //Create Object 
            const loginPage = new getLoginPage(); 
            
            //Add properties to object
            // loginPage.signIn();
            loginPage.faultyUsernameInput();
            loginPage.validPasswordInput();
            loginPage.clickLoginBtn();
        });
}