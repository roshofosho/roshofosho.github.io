function createCart() {
    const cartContent = JSON.parse(window.localStorage.getItem('cartItems'));

    const cartParentDiv = document.getElementById("product-card");

    if(cartContent) {
        cartContent.forEach((item) => {

            const cartListDiv = document.createElement("div");
            cartListDiv.setAttribute("id", "cart-list");

            const productsOrderedDiv = document.createElement("div");
            productsOrderedDiv.classList.add("productsordered");

            const productDetailsDiv = document.createElement('div');
            productDetailsDiv.classList.add("product-details");

            const cartItemImage = document.createElement("img");
            cartItemImage.src = "Assets/images/dogharness1.png"; //example since image source is not stored in localStorage rn

            const productSpecsDiv = document.createElement("div");
            productSpecsDiv.classList.add("product-specs");
            
            const specNameDiv = document.createElement("div");
            specNameDiv.classList.add("spec-name"); 
            specNameDiv.innerHTML = "Dog Harness"
            

            const specColorSizeDiv = document.createElement("div");
            specColorSizeDiv.classList.add("spec-color-size");

            const specColorDiv = document.createElement("div");
            specColorDiv.classList.add("spec-colo");
            specColorDiv.innerHTML = item.color;

            const specSizeDiv = document.createElement("div");
            specSizeDiv.classList.add("spec-size");
            specSizeDiv.innerHTML = item.size;

            const specQuantityDiv = document.createElement("div");
            specQuantityDiv.classList.add("spec-quantity");
            specQuantityDiv.innerHTML = item.quantity;

            const specPriceDiv = document.createElement("div");
            specPriceDiv.classList.add("spec-price");
            specPriceDiv.innerHTML = "$25";

            specColorSizeDiv.appendChild(specColorDiv);
            specColorSizeDiv.appendChild(specSizeDiv);
            specColorSizeDiv.appendChild(specQuantityDiv);
            
            productSpecsDiv.appendChild(specNameDiv);
            productSpecsDiv.appendChild(specColorSizeDiv);
            productSpecsDiv.appendChild(specPriceDiv);

            productsOrderedDiv.appendChild(cartItemImage);

            productDetailsDiv.appendChild(productSpecsDiv);

            productSpecsDiv.appendChild(specColorSizeDiv);

            cartParentDiv.appendChild(cartListDiv);
            cartParentDiv.appendChild(productsOrderedDiv)
            cartParentDiv.appendChild(productDetailsDiv);

        });
    }
}