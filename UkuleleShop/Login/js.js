var listUsers = [];
listUsers[0] = {
    username: "hung",
    password: "hung",
    phone: "1"
};
listUsers[1] = {
    username: "ngoc",
    password: "hung",
    phone: "2"
};
console.log(listUsers);
var containerLogin = document.getElementById("login-box");
var containerForgot = document.getElementById("forgot-box");
var countcheck = 0;

function checkLogin(arg) {
    var check = 0;
    for (let i = 0; i < listUsers.length; i++) {
        if (arg.usernameLogin == listUsers[i].username) {
            if (arg.passwordLogin == listUsers[i].password) {
                check = 1;
                break;
            } else {
                check = 2;
                break;
            }
        }
    }
    return check;
}

function login() {
    var usernametext = document.getElementById("username").value;
    var passwordtext = document.getElementById("password").value;
    var userLogin = {
        usernameLogin: usernametext,
        passwordLogin: passwordtext
    }
    if (checkLogin(userLogin) == 0) {
        alert("Your user name and password incorrect.");
    } else if (checkLogin(userLogin) == 2) {
        alert("Your password incorrect.");
    } else {
        window.location = "Shop/index.html";
    }
}

function displayForgotContainer() {
    containerLogin.style.display = "none";
    containerForgot.style.display = "flex";
}

function checkForgotPassword() {
    var code;
    var usernametext = document.getElementById("forgot-username").value;
    if (countcheck == 0) {
        var phonetext = document.getElementById("forgot-phonenumber").value;
        var userForgot = {
            usernameForgot: usernametext,
            phonenumberForgot: phonetext
        }
        if (checkForgot(userForgot) == 0) {
            alert("Your user name and phone number incorrect.");
        } else if (checkLogin(userForgot) == 2) {
            alert("Your phone number incorrect.");
        } else {
            countcheck++;
            displayCodeBox();
            code = Math.floor(Math.random() * 100);
            console.log(code);
        }
    } else {
        if (code == checkCodo()) {
            alert("Your ")
        }
    }

}

function returnPassword(username) {
    for (let i = 0; i < )
}

function checkForgot(arg) {
    var check = 0;
    for (let i = 0; i < listUsers.length; i++) {
        if (arg.usernameForgot == listUsers[i].username) {
            if (arg.phonenumberForgot == listUsers[i].phone) {
                check = 1;
                break;
            } else {
                check = 2;
                break;
            }
        }
    }
    return check;
}

function displayCodeBox() {
    var code = document.getElementById("code-box");
    code.style.display = "block";
}