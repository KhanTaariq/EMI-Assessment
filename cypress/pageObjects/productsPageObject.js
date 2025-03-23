function getProductsPage()
{
    class addToCart 
    {
        pageElements=
        {
            productTypeTshirt: ()=> cy.get("#item_1_img_link > img"),
            itemName: ()=> cy.get("#item_1_title_link"),
            itemDesc: ()=> cy.get("#inventory_container div[class='inventory_item_desc']"),
            itemPrice: ()=> cy.get("#inventory_container div[class='inventory_item_price']"),
            addToCartBtn: ()=> cy.get("#add-to-cart-sauce-labs-bolt-t-shirt")
        }

        findItem()
        {
            cy.log("We are looking for a Sauce Labs Bolt T-Shirt")
            cy.fixture("productFixture.json").then(($el)=>
            {
                this.pageElements.productTypeTshirt()
                .should("be.visible")

                this.pageElements.itemName()
                .should("be.visible")
                .should("contain.text", $el.products.item_Tshirt.item_title_name);

                this.pageElements.itemDesc()
                .should("be.visible")
                .should("contain.text", $el.products.item_Tshirt.item_description);

                this.pageElements.itemPrice()
                .should("be.visible")
                .should("contain.text", $el.products.item_Tshirt.item_price);

                // this.pageElements.addToCartBtn()
                // .should("be.visible")
                // .should("contain.text", $el.products.item_Tshirt.addCart_btn).click();
            });
        }

        addItemToCart()
        {
            cy.log("We are Sauce Labs Bolt T-Shirt to our cart")
            cy.fixture("productFixture.json").then(($el)=>
            {
                this.pageElements.addToCartBtn()
                .should("be.visible")
                .should("contain.text", $el.products.item_Tshirt.addCart_btn).click();
            });
        }
    }
    return new addToCart;
}
export {getProductsPage};