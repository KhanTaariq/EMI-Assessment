import {LoginPage} from '../support/commands/loginPageCommands.js'
LoginPage();
import { ProductsPage } from '../support/commands/productsPageCommands.js';
ProductsPage();
import { CartPage } from '../support/commands/cartPageCommands.js';
CartPage();
Cypress.config('experimentalSessionSupport', true)

describe("Verifying items are added in cart",() =>
{
    it("Checks the cart to verify if items have been added",()=>
    {
        cy.visit('/');
        cy.UserLoginSuccessful();
        cy.AddItemToCart();
        cy.VerifyItemInCart();
        cy.RemoveItemInCart();
    });
});