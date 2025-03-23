import { getProductsPage } from "../../pageObjects/productsPageObject";

export function ProductsPage()
{
    Cypress.Commands.add("AddItemToCart",()=>
        {
            //Create Object 
            const productsPage = new getProductsPage(); 
            
            //Add properties to object
            productsPage.findItem();
            productsPage.addItemToCart();
        });
}