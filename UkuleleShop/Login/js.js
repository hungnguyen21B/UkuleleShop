var listUsers = [];
if (JSON.parse(localStorage.getItem('listUser')) != null) {
    listUsers = (JSON.parse(localStorage.getItem('listUser')));
} else {
    user = {
        username: "hung",
        password: "hung",
        phone: "1"
    }
    listUsers.push(user);
}

console.log(listUsers);
var boxLogin = document.getElementById("login-box");
var boxForgot = document.getElementById("forgot-box");
var containerLogin = document.getElementById("container-login");
var containerRegister = document.getElementById("container-register");
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
    boxLogin.style.display = "none";
    boxForgot.style.display = "flex";
}
var code = -1;

function checkForgotPassword() {
    var usernametext = document.getElementById("forgot-username").value;
    if (countcheck == 0) {
        var phonetext = document.getElementById("forgot-phonenumber").value;
        var userForgot = {
            usernameForgot: usernametext,
            phonenumberForgot: phonetext
        }
        var check = checkForgot(userForgot);
        if (check == 0) {
            alert("Your user name and phone number are incorrect.");
        } else if (check == 2) {
            alert("Your phone number is incorrect.");
        } else {
            countcheck++;
            displayCodeBox();
            code = Math.floor(Math.random() * 1000);
            //se gui toi sdt tren
            console.log(code);
        }
    } else {
        var codetext = parseInt(document.getElementById("code").value);
        if (checkCode(codetext) == true) {
            localStorage.setItem("listUser", JSON.stringify(listUsers));
            var displayPassword = confirm("Your password is " + returnPassword(usernametext) + ". Sign in again");
            if (displayPassword = true) {
                window.location = "index.html";
            }
        } else {
            alert("Your code is incorrect.");
        }
    }

}

function checkCode(arg) {
    console.log(arg);
    if (code == arg) {
        return true;
    } else return false;
}

function returnPassword(username) {
    for (let i = 0; i < listUsers.length; i++) {
        if (username == listUsers[i].username) {
            return listUsers[i].password;
        }
    }
    return 1000;
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
var countcheckregister = 0;

function register() {
    var phonetext = document.getElementById("phonenumber-register").value;
    var usernametext = document.getElementById("username-register").value;
    var passwordtext1 = document.getElementById("password-register1").value;
    if (countcheckregister == 0) {
        var passwordtext2 = document.getElementById("password-register2").value;
        if (returnPassword(usernametext) != 1000) {
            alert("User name already exist.");
        } else if (passwordtext1 != passwordtext2) {
            alert("Not confirm password");
        } else {
            countcheckregister++;
            displayCodeRegister();
            code = Math.floor(Math.random() * 1000);
            //se gui toi sdt tren
            console.log(code);
        }
    } else {
        var coderegistertext = parseInt(document.getElementById("code-register").value);
        if (checkCode(coderegistertext)) {
            var account = {
                username: usernametext,
                password: passwordtext1,
                phone: phonetext
            }
            listUsers.push(account);
            localStorage.setItem("listUser", JSON.stringify(listUsers));
            console.log(listUsers);
            alert("Sign in to buy product.");
            displayLogin();
        } else {
            alert("Your code is incorrect");
        }
    }
}

function displayCodeBox() {
    var code = document.getElementById("code-box");
    code.style.display = "block";
}

function displayCodeRegister() {
    var displaycodebox = document.getElementById("code-register-box");
    displaycodebox.style.display = "block";
}

function displayLogin() {
    containerLogin.style.display = "block";
    containerRegister.style.display = "none";
}

function displayRegister() {
    containerRegister.style.display = "block";
    containerLogin.style.display = "none";
}