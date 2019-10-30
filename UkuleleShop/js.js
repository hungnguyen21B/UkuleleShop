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
var containerPro = document.getElementById("container-product");
var containerCart = document.getElementById("container-cart");
addDataPro();
function addDataPro(){
    for (let i = 0; i < listUkulele.length; i++) {
        var boxPro = document.createElement("div");
        boxPro.className = "box";
        var namePro = document.createElement("p");
        var pricePro = document.createElement("p");
        var descriptionPro = document.createElement("p");
        var imagePro = document.createElement("img");
        imagePro.className = "imgPro";
        var btnPro = document.createElement("button");
        pricePro.innerHTML = listUkulele[i].price;
        namePro.innerHTML = listUkulele[i].name;
        descriptionPro.innerHTML = listUkulele[i].description;
        imagePro.src = listUkulele[i].image;
        btnPro.innerText = "Add to Cart";
        btnPro.onclick = function (arg) {
            return function () {
                var product = {
                    code: listUkulele[i].code,
                    name: listUkulele[i].name,
                    price: listUkulele[i].price,
                    quantity: listUkulele[i].quantity,
                    description: listUkulele[i].description,
                    image: listUkulele[i].image
                }
                cart.push(product);
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
function addDataCart() {
    for (let i = 0; i < cart.length; i++) {
        var boxPro = document.createElement("div");
        boxPro.className = "box";
        var namePro = document.createElement("p");
        var pricePro = document.createElement("p");
        var descriptionPro = document.createElement("p");
        var imagePro = document.createElement("img");
        imagePro.className = "imgPro";
        var btnPro = document.createElement("button");
        pricePro.innerHTML = cart[i].price;
        namePro.innerHTML = cart[i].name;
        descriptionPro.innerHTML = cart[i].description;
        imagePro.src = cart[i].image;
        btnPro.innerText = "Add to Cart";
        btnPro.onclick = function (arg) {
            return function () {
                var product = {
                    code: cart[i].code,
                    name: cart[i].name,
                    price: cart[i].price,
                    quantity: cart[i].quantity,
                    description: cart[i].description,
                    image: cart[i].image
                }
                cart.push(product);
            }
        }(i);
        boxPro.appendChild(imagePro);
        boxPro.appendChild(namePro);
        boxPro.appendChild(descriptionPro);
        boxPro.appendChild(pricePro);
        boxPro.appendChild(btnPro);
        containerCart.appendChild(boxPro);
    }
}
function displayCart() {
    containerPro.style.display = "none";
    addDataCart();
    containerCart.style.display = "grid";
}
function displayCart() {
    containerPro.style.display = "grid";
    addDataPro();
    containerCart.style.display = "none";
}