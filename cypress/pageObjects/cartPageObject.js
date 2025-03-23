function getCartPage()
{
    class checkCartItems 
    {
        pageElements=
        {
            cartPageTitle: ()=> cy.get("#header_container span[data-test='title']"),
            itemName: ()=> cy.get("#item_1_title_link div[class='inventory_item_name']"),
            itemDesc: ()=> cy.get("#cart_contents_container div[class='inventory_item_desc']"),
            itemPrice: ()=> cy.get("#cart_contents_container div[class='inventory_item_price']"),
            removeBtn: ()=> cy.get("#remove-sauce-labs-bolt-t-shirt"),
            cartBtn:() => cy.get("#shopping_cart_container a[data-test='shopping-cart-link']")
        }

        goToCart()
        {
            this.pageElements.cartBtn()
            .should("be.visible").click();
        }

        findItemInCart()
        {
            cy.log("Verify Sauce Labs Bolt T-Shirt has been added to cart")
            cy.fixture("cartFixture.json").then(($el)=>
            {
                this.pageElements.cartPageTitle()
                .should("be.visible")
                .should("contain.text", $el.pageHeaders.cartPageTitle)

                this.pageElements.itemName()
                .should("be.visible")
                .should("contain.text", $el.prodInCart.item_Tshirt.item_title_name);

                this.pageElements.itemDesc()
                .should("be.visible")
                .should("contain.text", $el.prodInCart.item_Tshirt.item_description);

                this.pageElements.itemPrice()
                .should("be.visible")
                .should("contain.text", $el.prodInCart.item_Tshirt.item_price);
            });
        }

        removeItemInCart()
        {
            cy.log("We are removing Sauce Labs Bolt T-Shirt out our cart")
            cy.fixture("cartFixture.json").then(($el)=>
            {
                this.pageElements.removeBtn()
                .should("be.visible")
                .should("contain.text", $el.prodInCart.item_Tshirt.removeCartBtn).click();
            });
        }

        verifyItemRemove()
        {
            cy.fixture("cartFixture.json").then(($el)=>
            {
                this.pageElements.itemName()
                .should("not.exist");
                cy.log("Item is no longer in your cart!!!");
            }); 
        }
    }
    return new checkCartItems;
}
export {getCartPage};