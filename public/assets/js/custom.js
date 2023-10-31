function addToCart(num) {
  var ary = JSON.parse(localStorage.getItem("items"));
  if (ary == null) {
    var itemAry = [num];
    localStorage.setItem("items", JSON.stringify(itemAry));
  } else {
    $con = ary.indexOf(num);
    if ($con == -1) {
      ary.push(num);
      localStorage.setItem("items", JSON.stringify(ary));
    }
  }
  alert("Item added in cart");
  showCartItems();
}

function showCartItems() {
  let ary = JSON.parse(localStorage.getItem("items"));
  if (ary != null) {
    $("#cart_count").html(ary.length);
  } else {
    $("#cart_count").html(0);
  }
}

function getCartItems() {
  let ary = JSON.parse(localStorage.getItem("items"));
  return ary;
}

function deleteItem(id){
  let ary = JSON.parse(localStorage.getItem("items"));
  if(ary != null){
    ary.forEach((item) =>{
      if(item == id) {
        ary.splice(ary.indexOf(item), 1);
      }
    })
  }
  localStorage.setItem("items", JSON.stringify(ary));
  showCartItems();
}

function clearCart() {
  localStorage.removeItem("items");
}

showCartItems();
