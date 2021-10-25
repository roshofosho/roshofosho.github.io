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

function incrementQuantValue() {
  var value = parseInt(document.getElementById('quant').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('quant').value = value;

}

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

function displayStrawberry() {
  var text = document.getElementById('color');
  
  if (text.innerHTML === "Strawberry") {
    document.getElementById('color').innerHTML = "";
  } else {
    document.getElementById('color').innerHTML = "Strawberry";
  }
    
}

function displayBlackberry() {
  var text = document.getElementById('color');
  
  if (text.innerHTML === "Blackberry") {
    document.getElementById('color').innerHTML = "";
  } else {
    document.getElementById('color').innerHTML = "Blackberry";
  }
    
}

function displayCranberry() {
  var text = document.getElementById('color');
  
  if (text.innerHTML === "Cranberry") {
    document.getElementById('color').innerHTML = "";
  } else {
    document.getElementById('color').innerHTML = "Cranberry";
  }
    
}

function displayFireOrange() {
  var text = document.getElementById('color');
  
  if (text.innerHTML === "Fire Orange") {
    document.getElementById('color').innerHTML = "";
  } else {
    document.getElementById('color').innerHTML = "Fire Orange";
  }
    
}

function displayTiny() {
  var text = document.getElementById('size');
  
  if (text.innerHTML === "Tiny") {
    document.getElementById('size').innerHTML = "";
  } else {
    document.getElementById('size').innerHTML = "Tiny";
  }
    
}

function displaySmall() {
  var text = document.getElementById('size');
  
  if (text.innerHTML === "Small") {
    document.getElementById('size').innerHTML = "";
  } else {
    document.getElementById('size').innerHTML = "Small";
  }
    
}

function displayMedium() {
  var text = document.getElementById('size');
  
  if (text.innerHTML === "Medium") {
    document.getElementById('size').innerHTML = "";
  } else {
    document.getElementById('size').innerHTML = "Medium";
  }
    
}

function displayLarge() {
  var text = document.getElementById('size');
  
  if (text.innerHTML === "Large") {
    document.getElementById('size').innerHTML = "";
  } else {
    document.getElementById('size').innerHTML = "Large";
  }
    
}

function changeImageStraw() {
  document.getElementById("productphoto").src = "images/strawberry.png";  

}

function changeImageBlack() {
  document.getElementById("productphoto").src = "images/blackberry.png";  

}

function changeImageCran() {
  document.getElementById("productphoto").src = "images/cranberry.png";  

}

function changeImageFire() {
  document.getElementById("productphoto").src = "images/fireorange.png";  

}

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