import {LoginPage} from '../support/commands/loginPageCommands.js'
LoginPage();
import { ProductsPage } from '../support/commands/productsPageCommands.js';
ProductsPage();
import { CartPage } from '../support/commands/cartPageCommands.js';
CartPage();
Cypress.config('experimentalSessionSupport', true)

describe("Adding items to cart from products page",() =>
{
    it("Adds product to cart",()=>
    {
        cy.visit('/');
        cy.UserLoginSuccessful();
        cy.AddItemToCart();
    });

    it("Does not add item to cart",()=>
    {
        cy.visit('/');
        cy.faultyUserLogin();
        cy.AddItemToCart();
        cy.VerifyItemInCart();
    })

});