var listUkulele = [];
listUkulele[0] = {
    code: 1,
    name: "Ukulele Consert",
    price: 100.000,
    quantity: 10,
    description: "The prouct of Hung corpration",
    image: "Image/consert.jpg"
}
listUkulele[1] = {
    code: 2,
    name: "Ukulele Consert",
    price: 200.000,
    quantity: 10,
    description: "The prouct of Hung corpration",
    image: "Image/so.jpg"
}
listUkulele[2] = {
    code: 3,
    name: "Ukulele Soprano",
    price: 250.000,
    quantity: 10,
    description: "The prouct of Hung corpration",
    image: "Image/soprano.jpg"
}
listUkulele[3] = {
    code: 4,
    name: "Ukulele Tenor",
    price: 100.000,
    quantity: 10,
    description: "The prouct of Hung corpration",
    image: "Image/tenor.jpg"
}
listUkulele[4] = {
    code: 5,
    name: "Ukulele Baritone",
    price: 100.000,
    quantity: 10,
    description: "The prouct of Hung corpration",
    image: "Image/baritone.jpg"
}
listUkulele[5] = {
    code: 6,
    name: "Ukulele Consert",
    price: 100.000,
    quantity: 10,
    description: "The prouct of Hung corpration",
    image: "Image/consert.jpg"
}
listUkulele[6] = {
    code: 7,
    name: "Ukulele Soprano",
    price: 250.000,
    quantity: 10,
    description: "The prouct of Hung corpration",
    image: "Image/soprano.jpg"
}
listUkulele[7] = {
        code: 8,
        name: "Ukulele Tenor",
        price: 100.000,
        quantity: 10,
        description: "The prouct of Hung corpration",
        image: "Image/tenor.jpg"
    }
    // var slide = ["Image/slide1.jpg","Image/slide2.jpg","Image/slide3.jpg"]
    // var slidesrc = document.getElementById("slide");
    //     for (var i = 0; i< slide.length;i++){
    //         setTimeout(function show()
    //         { 
    //             slidesrc.src = slide[i];
    //         }, 2000);
    //     }
var cart = [];
var customers = [];
var main = document.getElementById("main");
var containerPro = document.getElementById("container-product");
var containerCart = document.getElementById("container-cart");
var containerOrder = document.getElementById("order-container");
var totalPriceText = document.getElementById("total-price");
var displayInfoCus = document.getElementById("info-customer");
var displayBtnOrder = document.getElementById("btn-order");
containerOrder.style.display = "none";
var tittle = document.getElementById("tittle");
addDataPro(listUkulele);

function addDataPro(listUkulele) {
    for (let i = 0; i < listUkulele.length; i++) {
        var boxPro = document.createElement("div");
        boxPro.className = "box";
        var namePro = document.createElement("p");
        var pricePro = document.createElement("p");
        var descriptionPro = document.createElement("p");
        var imagePro = document.createElement("img");
        imagePro.className = "imgPro";
        var btnPro = document.createElement("button");
        pricePro.innerHTML = "$" + listUkulele[i].price;
        namePro.innerHTML = listUkulele[i].name;
        descriptionPro.innerHTML = listUkulele[i].description;
        imagePro.src = listUkulele[i].image;
        btnPro.innerText = "Add to Cart";
        btnPro.onclick = function(arg) {
            return function() {
                var checkExist = checkExistProInCart(listUkulele[i].code);
                if (checkExist == -1) {
                    var product = {
                        code: listUkulele[i].code,
                        name: listUkulele[i].name,
                        price: listUkulele[i].price,
                        quantity: 1,
                        description: listUkulele[i].description,
                        image: listUkulele[i].image
                    }
                    cart.push(product);
                    listUkulele[arg].quantity--;
                } else {
                    cart[checkExist].quantity++;
                    console.log(cart[checkExist].quantity);
                }
                console.log(listUkulele[arg].quantity);

            }
        }(i);
        boxPro.appendChild(imagePro);
        boxPro.appendChild(namePro);
        boxPro.appendChild(descriptionPro);
        boxPro.appendChild(pricePro);
        boxPro.appendChild(btnPro);
        containerPro.appendChild(boxPro);
    }
}

function checkExistProInCart(arg) {
    var check = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].code == arg) {
            check = i;
            break;
        }
    }
    return check;
}

function getPositionCodePro(arg) {
    var check = -1;
    for (let i = 0; i < listUkulele.length; i++) {
        if (listUkulele[i].code == arg) {
            check = i;
            break;
        }
    }
    return check;
}

function addDataCart() {
    var totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        var boxPro = document.createElement("div");
        boxPro.className = "box";
        var namePro = document.createElement("p");
        var pricePro = document.createElement("span");
        var quantityPro = document.createElement("span");
        var descriptionPro = document.createElement("p");
        var imagePro = document.createElement("img");
        imagePro.className = "img-Cart";
        var btnDeletePro = document.createElement("button");
        var divQuantityPro = document.createElement("div");
        divQuantityPro.className = "div-quantity-pro";
        var btnEditPro = document.createElement("button");
        pricePro.innerHTML = "$" + cart[i].price;
        quantityPro.innerHTML = cart[i].quantity + "&nbsp&nbsp&nbsp&nbsp";
        namePro.innerHTML = cart[i].name;
        descriptionPro.innerHTML = cart[i].description;
        imagePro.src = cart[i].image;
        totalPrice = totalPrice + (cart[i].price * cart[i].quantity);
        btnDeletePro.innerText = "DELETE";
        btnDeletePro.className = "btn-outline-danger";
        btnEditPro.innerText = "Edit";
        btnEditPro.className = "btn-outline-info";
        btnDeletePro.onclick = function(arg) {
            return function() {
                var positionPro = getPositionCodePro(arg);
                if (cart[arg].quantity == 1) {
                    checkEmptyCart();
                    cart.splice(arg, 1);
                } else {
                    cart[arg].quantity--;
                }
                containerCart.innerHTML = '';
                addDataCart();
                listUkulele[positionPro].quantity++;
            }
        }(i);
        btnEditPro.onclick = function(arg) {
            return function() {
                var positionPro = getPositionCodePro(arg);
                if (cart[arg].quantity == 1) {
                    checkEmptyCart();
                    cart.splice(arg, 1);
                } else {
                    cart[arg].quantity--;
                }
                containerCart.innerHTML = '';
                addDataCart();
                listUkulele[positionPro].quantity++;
            }
        }(i);
        divQuantityPro.appendChild(quantityPro);
        divQuantityPro.appendChild(btnEditPro);
        containerCart.appendChild(imagePro);
        containerCart.appendChild(namePro);
        containerCart.appendChild(descriptionPro);
        containerCart.appendChild(pricePro);
        containerCart.appendChild(divQuantityPro);
        containerCart.appendChild(btnDeletePro);
    }
    totalPriceText.innerText = totalPrice + 30;
}

function checkEmptyCart() {
    if (cart.length == 1) {
        var check = confirm("Your cart don't have anything if you delete this product! You are going to home page.");
        if (check == true) {
            displayPro(listUkulele);
        } else {
            containerCart.style.height = "600px";
        }
    }
}

function displayCart() {
    if (cart.length == 0) {
        var check = confirm("Don't have anything in your cart.");
    } else {
        containerOrder.style.display = "block";
        containerPro.style.display = "none";
        containerCart.innerHTML = "";
        addDataCart();
        containerCart.style.display = "grid";
        containerCart.style.gridTemplateColumns = "auto auto auto auto auto auto";
        tittle.innerText = "Your cart";
        displayBtnOrder.style.display = "block";
    }
}

function displayPro() {
    containerPro.style.display = "grid";
    addDataPro(listUkulele);
    containerCart.style.display = "none";
    tittle.innerText = "Check out the products";
    displayInfoCus.style.display = "none";
    displayBtnOrder.style.display = "none";
}

function displayInfoCustomer() {
    displayInfoCus.style.display = "block";
}

function search() {
    var searchtext = document.getElementById("search").value;
    displaysearch(searchtext);
}

function displaysearch(arg) {
    var searchResults = [];
    for (var i = 0; i < listUkulele.length; i++) {
        var codeCompare = arg.localeCompare(listUkulele[i].name);
        if (codeCompare == 0) {
            searchResults.push(listUkulele[i]);
        }
    }
    if (searchResults.length != 0) {
        containerPro.innerHTML = '';
        addDataPro(searchResults);
    } else {
        alert("Not Found");
    }
}

function addDataCustomer() {
    var cusName = document.getElementById("name-cus").value;
    var cusPhone = document.getElementById("phone-cus").value;
    var cusAddress = document.getElementById("address-cus").value;
    var cusDes = document.getElementById("description-cus").value;
    var customer = {
        fullName: cusName,
        phone: cusPhone,
        address: cusAddress,
        description: cusDes
    }
    return customer;
}

function shipping() {
    var customer = {
        customerInfo: addDataCustomer(),
        products: cart,
        total: parseFloat(totalPriceText.innerText)
    }
    var check = confirm("Are you sure!!!");
    if (check == true) {
        customers.push(customer);
        cart = [];
        alert("Your products are shipping. Now we will come back to home page.")
        displayPro();
    } else {

    }
    console.log(customer);
}