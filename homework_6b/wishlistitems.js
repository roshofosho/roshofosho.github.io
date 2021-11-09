//use javascript to get products from local storage to the cart page
function createWish() {
    const wishContent = JSON.parse(window.localStorage.getItem('wishItems'));

    const cartParentDiv = document.getElementById("wish-card");

    if(wishContent) {
        cartContent.forEach((item) => {

            const wishListDiv = document.createElement("div");
            wishListDiv.setAttribute("id", "wish-list");

            const wishlistDiv = document.createElement("div");
            wishlistDiv.classList.add("wishlist");

            const wishDetailsDiv = document.createElement('div');
            wishDetailsDiv.classList.add("wish-details");
    
            const cartItemImage = document.createElement("img");
            cartItemImage.src = item.image; 

            const productSpecsDiv = document.createElement("div");
            productSpecsDiv.classList.add("wish-specs");
            
            const specNameDiv = document.createElement("div");
            specNameDiv.classList.add("spec-name"); 
            specNameDiv.innerHTML = item.name;
            
            const removeDiv = document.createElement('div');
            removeDiv.classList.add("remove");
            removeDiv.innerHTML = "Remove";
            
            const specColorSizeDiv = document.createElement("div");
            specColorSizeDiv.classList.add("spec-color-size");
            
            const nameRemoveDiv = document.createElement("div");
            specColorSizeDiv.classList.add("name-remove");

            const specColorDiv = document.createElement("div");
            specColorDiv.classList.add("spec-color");
            specColorDiv.innerHTML = item.color;

            const specSizeDiv = document.createElement("div");
            specSizeDiv.classList.add("spec-size");
            specSizeDiv.innerHTML = item.size;

            const specQuantityDiv = document.createElement("div");
            specQuantityDiv.classList.add("spec-quantity");
            specQuantityDiv.innerHTML = "Quantity:" + " " + item.quantity;

            const specPriceDiv = document.createElement("div");
            specPriceDiv.classList.add("spec-price");
            specPriceDiv.innerHTML = "$" + item.price * item.quantity;

            specColorSizeDiv.appendChild(specColorDiv);
            specColorSizeDiv.appendChild(specSizeDiv);
            specColorSizeDiv.appendChild(specQuantityDiv);
            specColorSizeDiv.appendChild(specPriceDiv);
            
            productSpecsDiv.appendChild(nameRemoveDiv);
            productSpecsDiv.appendChild(specColorSizeDiv);

            productsOrderedDiv.appendChild(cartItemImage);

            productDetailsDiv.appendChild(productSpecsDiv);
            
            nameRemoveDiv.appendChild(specNameDiv);
            nameRemoveDiv.appendChild(removeDiv);

            cartParentDiv.appendChild(cartListDiv);
            cartParentDiv.appendChild(productsOrderedDiv)
            cartParentDiv.appendChild(productDetailsDiv);

            removeDiv.addEventListener("click", function() {
                //remove product from page
                cartListDiv.remove();

                //find index of the item 
                const index = cartContent.findIndex(function(cartItem) {
                    if (cartItem == item) {
                        return true;
                    }
                });
                 //remove product from localStorage
                cartContent.splice(index, 1);

                window.localStorage.setItem("wishItems", JSON.stringify(cartContent));

                //reload page to reflect changed cart
                var pageReload = setInterval(function(){
                        location.reload();}, 20);
                updatePage();
            });

        });
    }

    function removeItem(index) {
  // retrieve the stored value of the cart items so that we can modify it
        var wishItemsString = localStorage.getItem("wishItems")
        if (wishItemsString !== null) {
        var wishItems = JSON.parse(wishItemsString) // successfully loaded in the cart items
    
        if (index !== -1) {
            // remove item from the list
            wishItems.splice(index, 1)
                // update the stored value
            localStorage.setItem("wishItems", JSON.stringify(wishItems))
        // re-render the page to reflect changes
        updatePage()
    }
  }
}

    function updateTotal() {
        var totalAmount = 0;

        //add up price of each item in cart
        cartContent.forEach((item) => {
            totalAmount += parseInt(item.price.slice(0,)*item.quantity);
        });
    
        //change the total dollar amount number
        const totaldollar = document.getElementById("totalprice");
        totaldollar.innerHTML = "$" + totalAmount;
    
        //update the total number of items 
        const numberitems = document.getElementById("cart-number");
        numberitems.innerHTML = cartContent.length + " items";

    }

    updateTotal();
}