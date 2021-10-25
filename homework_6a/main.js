//Adds the number of items to the cart icon//
function incrementCartValue() {
  var quantity = parseInt(document.getElementById('quant').value);
  var value = parseInt(document.getElementById('number').value, 10);
  
  if(quantity >0) {
    value = value + quantity;
  } else {
      value === value;
  }
  
  document.getElementById('number').value = value; 

  if(value >0) {
    document.getElementById("number").style.opacity = "1.0";
  } else {
    document.getElementById("number").style.opacity = "0.0";
  }
    
}

//Adds the quantity box on the product details page//
function incrementQuantValue() {
  var value = parseInt(document.getElementById('quant').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('quant').value = value;

}

//Decreases the quantity box on the product details page//
function decreaseValue() {
  var value = parseInt(document.getElementById('quant').value, 10);
  value = value === 0 ? 0 : value;
  
  if(value >0) {
    value--;
  } else {
    value === value;
  }
  document.getElementById('quant').value = value;
    
}

//Displayes Color Selected: Strawberry when clicked//
function displayStrawberry() {
  var text = document.getElementById('color');
  
  if (text.innerHTML === "Color Selected: Strawberry") {
    document.getElementById('color').innerHTML = "Select Color:";
  } else {
    document.getElementById('color').innerHTML = "Color Selected: Strawberry";
  }
    
}

//Displayes Color Selected: Blackberry when clicked//
function displayBlackberry() {
  var text = document.getElementById('color');
  
  if (text.innerHTML === "Color Selected: Blackberry") {
    document.getElementById('color').innerHTML = "Select Color:";
  } else {
    document.getElementById('color').innerHTML = "Color Selected: Blackberry";
  }
    
}

//Displayes Color Selected: Cranberry when clicked//
function displayCranberry() {
  var text = document.getElementById('color');
  
  if (text.innerHTML === "Color Selected: Cranberry") {
    document.getElementById('color').innerHTML = "Select Color:";
  } else {
    document.getElementById('color').innerHTML = "Color Selected: Cranberry";
  }
    
}

//Displayes Color Selected: Fire Orange when clicked//
function displayFireOrange() {
  var text = document.getElementById('color');
  
  if (text.innerHTML === "Color Selected: Fire Orange") {
    document.getElementById('color').innerHTML = "Select Color:";
  } else {
    document.getElementById('color').innerHTML = "Color Selected: Fire Orange";
  }
    
}

//Displayes Size Selected: Tiny when clicked//
function displayTiny() {
  var text = document.getElementById('size');
  
  if (text.innerHTML === "Size Selected: Tiny") {
    document.getElementById('size').innerHTML = "Select Size:";
  } else {
    document.getElementById('size').innerHTML = "Size Selected: Tiny";
  }
    
}

//Displayes Size Selected: Small when clicked//
function displaySmall() {
  var text = document.getElementById('size');
  
  if (text.innerHTML === "Size Selected: Small") {
    document.getElementById('size').innerHTML = "Select Size:";
  } else {
    document.getElementById('size').innerHTML = "Size Selected: Small";
  }
    
}

//Displayes Size Selected: Medium when clicked//
function displayMedium() {
  var text = document.getElementById('size');
  
  if (text.innerHTML === "Size Selected: Medium") {
    document.getElementById('size').innerHTML = "Select Size:";
  } else {
    document.getElementById('size').innerHTML = "Size Selected: Medium";
  }
    
}

//Displayes Size Selected: Large when clicked//
function displayLarge() {
  var text = document.getElementById('size');
  
  if (text.innerHTML === "Size Selected: Large") {
    document.getElementById('size').innerHTML = "Select Size:";
  } else {
    document.getElementById('size').innerHTML = "Size Selected: Large";
  }
    
}

//Changes main image to be Strawberry harness when selected//
function changeImageStraw() {
  document.getElementById("productphoto").src = "Assets/images/strawberry.png";  

}

//Changes main image to be Blackberry harness when selected//
function changeImageBlack() {
  document.getElementById("productphoto").src = "Assets/images/blackberry.png";  

}

//Changes main image to be Cranberry harness when selected//
function changeImageCran() {
  document.getElementById("productphoto").src = "Assets/images/cranberry.png";  

}

//Changes main image to be Fire Orange harness when selected//
function changeImageFire() {
  document.getElementById("productphoto").src = "Assets/images/fireorange.png";  

}

//Changed opacity on quant/add to cart buttons once color and size have been selected//
function activateButtons() {
  var colorpick = document.getElementById('color').innerHTML;
  
  if (colorpick === "") {
    document.getElementById('addtocartbtn').style.opacity = "0.5";
    document.getElementById('quantbtn').style.opacity = "0.5";
  } else {
    document.getElementById('addtocartbtn').style.opacity = "1.0";
    document.getElementById('quantbtn').style.opacity = "1.0";
  }

}