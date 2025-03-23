import {LoginPage} from '../support/commands/loginPageCommands.js'
LoginPage();
import { ProductsPage } from '../support/commands/productsPageCommands.js';
ProductsPage();
import { CartPage } from '../support/commands/cartPageCommands.js';
CartPage();
Cypress.config('experimentalSessionSupport', true)

describe("Login page of saucedemo website",() =>
{
    it("can login in with valid user",()=>
    {
        cy.visit('/');
        cy.UserLoginSuccessful();
        // cy.AddItemToCart();
        // cy.VerifyItemInCart();
        // cy.RemoveItemInCart();
    });
});




// describe("Loginin page of saucedemo website",() =>
//     {
    
//             cy.session("standard_user, secret_sauce",()=>
//                 {
//                     cy.visit('/');
//                     cy.UserLoginSuccessful();
//                     // cy.validUserLogin();
//                     cy.AddItemToCart();
//                 },
//                 {
//                     cacheAcrossSpecs: true
//                 }
                
//             )
//         });
//         // it("Finds item to add to cart",()=>
//         // {
//         //     cy.visit("/");
//         //     // cy.validUserLogin();
//         //     cy.AddItemToCart();
//         // });
//     });