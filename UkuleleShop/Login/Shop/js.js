var listUkulele = [];
listUkulele[0] = {
    code: 1,
    name: "Ukulele Consert",
    price: 100.000,
    quantity: 10,
    description: "The product of Hung corporation",
    image: "Image/consert.jpg"
}
listUkulele[1] = {
    code: 2,
    name: "Ukulele Consert",
    price: 200.000,
    quantity: 10,
    description: "The product of Hung corporation",
    image: "Image/so.jpg"
}
listUkulele[2] = {
    code: 3,
    name: "Ukulele Soprano",
    price: 250.000,
    quantity: 10,
    description: "The product of Hung corporation",
    image: "Image/soprano.jpg"
}
listUkulele[3] = {
    code: 4,
    name: "Ukulele Tenor",
    price: 100.000,
    quantity: 10,
    description: "The product of Hung corporation",
    image: "Image/tenor.jpg"
}
listUkulele[4] = {
    code: 5,
    name: "Ukulele Baritone",
    price: 100.000,
    quantity: 10,
    description: "The product of Hung corporation",
    image: "Image/baritone.jpg"
}
listUkulele[5] = {
    code: 6,
    name: "Ukulele Consert",
    price: 100.000,
    quantity: 10,
    description: "The product of Loan store",
    image: "Image/consert.jpg"
}
listUkulele[6] = {
    code: 7,
    name: "Ukulele Soprano",
    price: 250.000,
    quantity: 10,
    description: "The product of Hung corporation",
    image: "Image/soprano.jpg"
}
listUkulele[7] = {
        code: 8,
        name: "Ukulele Tenor",
        price: 100.000,
        quantity: 10,
        description: "The product of Ngoc store",
        image: "Image/tenor.jpg"
    }
    // var slide = ["Image/slide1.jpg", "Image/slide2.jpg", "Image/slide3.jpg"]
    // var slidesrc = document.getElementById("slide");
    // for (var i = 0; i < slide.length; i++) {
    //     setTimeout(function show() {
    //         slidesrc.src = slide[i];
    //     }, 2000);
    //     if (i == slide.length - 1) {
    //         i = 0;
    //     }
    // }
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

                }


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
        var quantityPro = document.createElement("input");
        quantityPro.style.width = "1cm";
        quantityPro.style.marginRight = "0.5cm";
        var descriptionPro = document.createElement("p");
        var imagePro = document.createElement("img");
        imagePro.className = "img-Cart";
        var btnDeletePro = document.createElement("button");
        var divQuantityPro = document.createElement("div");
        divQuantityPro.className = "div-quantity-pro";
        var btnEditPro = document.createElement("button");
        pricePro.innerHTML = "$" + cart[i].price;
        quantityPro.value = cart[i].quantity;
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
                var positionPro = getPositionCodePro(cart[arg].code);
                if (cart[arg].quantity == 1) {
                    checkEmptyCart();
                } else {
                    cart[arg].quantity--;
                    listUkulele[positionPro].quantity++;
                }
                containerCart.innerHTML = '';
                addDataCart();
            }
        }(i);
        btnEditPro.onclick = function(arg) {
            return function() {
                var positionPro = getPositionCodePro(cart[arg].code);
                var quantityChanged = parseInt(quantityPro.value);
                var quantityOfProduct = listUkulele[positionPro].quantity + cart[arg].quantity;
                if (quantityChanged <= quantityOfProduct && quantityChanged > 0) {
                    listUkulele[positionPro].quantity = quantityOfProduct - quantityChanged;
                    cart[arg].quantity = quantityChanged;
                } else if (quantityChanged <= quantityOfProduct) {
                    alert("Please enter a true quantity");
                } else alert("Not enough quantity for you. Shop has only " + quantityOfProduct + " products.");
                containerCart.innerHTML = '';
                addDataCart();
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
            cart.splice(arg, 1);
            displayPro(listUkulele);
        } else {

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
    containerPro.innerHTML = '';
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

function displayLoginForm() {
    window.location = "C:\Users\hung.nguyen\Desktop\UkuleleShop\Login\index.html";
}

function search() {
    var searchtext = document.getElementById("search").value;
    searchtext = searchtext.toLowerCase();
    displaysearch(searchtext);
}

function catagories(arg) {
    arg = arg.toLowerCase();
    displaysearch(arg);
}

function displaysearch(arg) {
    var searchResults = [];
    for (var i = 0; i < listUkulele.length; i++) {
        var nameproduct = listUkulele[i].name;
        nameproduct = nameproduct.toLowerCase();
        var priceproduct = listUkulele[i].price;
        priceproduct = String(priceproduct).toLowerCase();
        var descriptionproduct = listUkulele[i].description
        descriptionproduct = descriptionproduct.toLowerCase();

        var codeCompareName = nameproduct.indexOf(arg);
        var codeCompareDes = priceproduct.indexOf(arg);
        var codeComparePrice = descriptionproduct.indexOf(arg);
        if (codeCompareName != -1 || codeCompareDes != -1 || codeComparePrice != -1) {
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
    if (checkInputCustomer()) {
        var check = confirm("Are you sure!!!");
        if (check == true) {
            var customer = {
                customerInfo: addDataCustomer(),
                products: cart,
                total: parseFloat(totalPriceText.innerText)
            }
            customers.push(customer);
            cart = [];
            alert("Your products are shipping. Now we will come back to home page.")
            displayPro();
        } else {}
    }
    console.log(customer);
    console.log(listUkulele);
}

function checkInputCustomer() {
    var nametext = document.getElementById("name-cus").value;
    var phonetext = document.getElementById("phone-cus").value;
    var addresstext = document.getElementById("address-cus").value;

    var cutphone = parseInt(phonetext.substring(1, phonetext.length));
    if (nametext == "" || phonetext == "" || addresstext == "") {
        alert("You should fill in the necessary information");
        return false;
    } else return true;

}