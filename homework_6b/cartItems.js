//use javascript to get products from local storage to the cart page
function createCart() {
    const cartContent = JSON.parse(window.localStorage.getItem('cartItems'));

    const cartParentDiv = document.getElementById("product-card");

    if(cartContent) {
        cartContent.forEach((item, index) => {

            const cartListDiv = document.createElement("div");
            cartListDiv.setAttribute("id", "cart-list");

            const productsOrderedDiv = document.createElement("div");
            productsOrderedDiv.classList.add("productsordered");

            const productDetailsDiv = document.createElement('div');
            productDetailsDiv.classList.add("product-details");
    
            const cartItemImage = document.createElement("img");
            cartItemImage.src = item.image; 

            const productSpecsDiv = document.createElement("div");
            productSpecsDiv.classList.add("product-specs");
            
            const specNameDiv = document.createElement("div");
            specNameDiv.classList.add("spec-name"); 
            specNameDiv.innerHTML = item.name;
            
            const removeDiv = document.createElement('div');
            removeDiv.classList.add("remove");
            removeDiv.onclick = function() {
                // console.log(index);
                //removeItem(index);
            };
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


        });
    }
    function removeItem(index) {
  // retrieve the stored value of the cart items so that we can modify it
        var cartItemsString = localStorage.getItem("cartItems")
        if (cartItemsString !== null) {
        var cartItems = JSON.parse(cartItemsString) // successfully loaded in the cart items
    
        if (index !== -1) {
            // remove item from the list
            cartItems.splice(index, 1)
                // update the stored value
            localStorage.setItem("cartItems", JSON.stringify(cartItems))
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