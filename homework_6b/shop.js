// source: 
// function that removes a particular item (obj) from the shopping cart

// ad the currently selected product to the local storage data
function addItem() {
  // get stored value of cart items
  var cartItemsString = localStorage.getItem("cartItems")
  // check if item exists in storage, if so, parse it
  if (cartItemsString === null) { // first time, we have to create the cartItems list
    var cartItems = []
  } else { // we've been here before, load the value
    var cartItems = JSON.parse(cartItemsString)
  }
  
  // retrieve value of relevant inputs
  var colorValue = document.getElementById("color").innerHTML;
  var quantityValue = document.getElementById("quant").value;
  var itemSize = document.getElementById("size").innerHTML;
  var itemPrice = document.getElementById("item-price").innerHTML;
  var itemName = document.getElementById("product-spec-name").innerHTML;
  var itemImage = document.getElementById("productphoto").src;
  
  // create json object based on selected values
  var itemObject = {color: colorValue, quantity: quantityValue, size: itemSize, price: itemPrice, name: itemName, image: itemImage};
  // add this newly selected item to the cart
  cartItems.push(itemObject);
  // save the new value of the list
  localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

// updates the value of the list element
function updatePage() {
  // get value of local storage
  var cartItemsString = localStorage.getItem("cartItems")
  // check if value exists in local storage
  if (cartItemsString !== null) {
    var cartItems = JSON.parse(cartItemsString) // converting stored string to object
    // update the cart # element
    var counterNode = document.getElementById("number").value;
    counterNode = cartItems.length
    // for every item in our cart, create a new list item under cart-list
    var cartList = document.getElementById("cart-list")
    cartList.innerHTML = ""
    if (cartItems.length === 0) {
      // if nothing is in the cart, let's show the placeholder text
      document.getElementById("placeholder-text").style.visibility = "visible"
    } else {
      // items are in the cart, hide the placeholder text
      document.getElementById("placeholder-text").style.visibility = "hidden"
      // iterate through cart and for each item, add it to the list
      for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i]
        var itemNode = document.createElement("li")
        itemNode.innerText = cartItem.color + " " + cartItem.quantity + " " + cartItem.size + " " + cartItem.price;
        
        document.getElementsByClassName("remove").onclick = (function (cartItem) {
          return function() {
            removeItem(cartItem)
          }
         }(cartItem))
        
        cartList.appendChild(itemNode)
      }
    }
  }
}

function addButton() {
  addItem()
  updatePage()
}

