import { getCartPage } from "../../pageObjects/cartPageObject";

export function CartPage()
{
    Cypress.Commands.add("VerifyItemInCart",()=>
    {
        //Create Object 
        const cartPage = new getCartPage(); 
        
        //Add properties to object
        cartPage.goToCart();
        cartPage.findItemInCart();
    });
    Cypress.Commands.add("RemoveItemInCart",()=>
    {
        const cartPage = new getCartPage();

        cartPage.removeItemInCart();
        cartPage.verifyItemRemove();

    });
}