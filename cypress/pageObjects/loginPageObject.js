function getLoginPage()
{
    class loginPageClass
    {
        pageElements=
        {
            signInUrl:() => cy.visit("/"),
            usernameField: () => cy.get("#user-name"),
            passwordField: () => cy.get("#password"),
            loginBtn: () => cy.get("#login-button")
        } 

        validUsernameInput()
        {
            cy.fixture('loginFixture.json').then(($el)=>
                {
                    this.pageElements.usernameField().type($el.users.validUser.username);
                });
        }
        validPasswordInput()
        {

            cy.fixture('loginFixture.json').then(($el)=>
                {
                    this.pageElements.passwordField().type($el.users.validUser.password);
                });
        }

        faultyUsernameInput()
        {
            cy.fixture('loginFixture.json').then(($el)=>
                {
                    this.pageElements.usernameField().type($el.users.faultyUser.username);
                });
        }

        clickLoginBtn()
        {
            this.pageElements.loginBtn().click();
        }
    } 
    return new loginPageClass;
}
export {getLoginPage};