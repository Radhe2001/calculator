let num = [];
let sym = [];
let a = [];
let b = [];
function pushA() {
    if (a.length === 2) {
        let mul = 1;
        let loopVar = a.length - 1;
        let sum = 0;
        let temp;
        while (loopVar >= 0) {
            temp = a[loopVar] * mul;
            mul *= 10;
            sum += temp;
            loopVar -= 1;
        }
        a.pop();
        a.pop();
        a.push(sum);
    }
}
function pushB() {
    if (b.length === 2) {
        let mul = 1;
        let loopVar = b.length - 1;
        let sum = 0;
        let temp;
        while (loopVar >= 0) {
            temp = b[loopVar] * mul;
            mul *= 10;
            sum += temp;
            loopVar -= 1;
        }
        b.pop();
        b.pop();
        b.push(sum);
    }
}
function one(val) {
    if (num.length === 0) {
        a.push(val);
        pushA();
        document.querySelector(".div1 h1").textContent = a[0];
    }
    else {
        b.push(val);
        pushB();
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + b[0];
    }
}
function two(val) {
    if (num.length === 0) {
        a.push(val);
        pushA();
        document.querySelector(".div1 h1").textContent = a[0];
    }
    else {
        b.push(val);
        pushB();
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + b[0];
    }
}
function three(val) {
    if (num.length === 0) {
        a.push(val);
        pushA();
        document.querySelector(".div1 h1").textContent = a[0];
    }
    else {
        b.push(val);
        pushB();
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + b[0];
    }
}
function four(val) {
    if (num.length === 0) {
        a.push(val);
        pushA();
        document.querySelector(".div1 h1").textContent = a[0];
    }
    else {
        b.push(val);
        pushB();
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + b[0];
    };
}
function five(val) {
    if (num.length === 0) {
        a.push(val);
        pushA();
        document.querySelector(".div1 h1").textContent = a[0];
    }
    else {
        b.push(val);
        pushB();
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + b[0];
    }
}
function six(val) {
    if (num.length === 0) {
        a.push(val);
        pushA();
        document.querySelector(".div1 h1").textContent = a[0];
    }
    else {
        b.push(val);
        pushB();
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + b[0];
    }
}
function seven(val) {
    if (num.length === 0) {
        a.push(val);
        pushA();
        document.querySelector(".div1 h1").textContent = a[0];
    }
    else {
        b.push(val);
        pushB();
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + b[0];
    }
}
function eight(val) {
    if (num.length === 0) {
        a.push(val);
        pushA();
        document.querySelector(".div1 h1").textContent = a[0];
    }
    else {
        b.push(val);
        pushB();
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + b[0];
    }
}
function nine(val) {
    if (num.length === 0) {
        a.push(val);
        pushA();
        document.querySelector(".div1 h1").textContent = a[0];
    }
    else {
        b.push(val);
        pushB();
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + b[0];
    }
}
function zero(val) {
    if (num.length === 0) {
        a.push(val);
        pushA();
        document.querySelector(".div1 h1").textContent = a[0];
    }
    else {
        b.push(val);
        pushB();
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + b[0];
    }
}
function add() {
    if (sym.length === 0) {
        if (a.length === 0) {
            alert("please enter the number first...");
        }
        else {
            let tempSym = "+";
            sym.push(tempSym);
            num.push(a[0]);
            document.querySelector(".div1 h1").textContent = num[0] + " + ";
        }
    }
    else {
        sym.pop();
        let tempSym = "+";
        sym.push(tempSym);
        document.querySelector(".div1 h1").textContent = num[0] + " + ";
    }
}
function minus() {
    if (sym.length === 0) {
        if (a.length === 0) {
            alert("please enter the number first...");
        }
        else {
            let tempSym = "-";
            sym.push(tempSym);
            num.push(a[0]);
            document.querySelector(".div1 h1").textContent = num[0] + " - ";
        }
    }
    else {
        sym.pop();
        let tempSym = "-";
        sym.push(tempSym);
        document.querySelector(".div1 h1").textContent = num[0] + " - ";
    }
}
function multiply() {
    if (sym.length === 0) {
        if (a.length === 0) {
            alert("please enter the number first...");
        }
        else {
            let tempSym = "*";
            sym.push(tempSym);
            num.push(a[0]);
            document.querySelector(".div1 h1").textContent = num[0] + " * ";
        }
    }
    else {
        sym.pop();
        let tempSym = "*";
        sym.push(tempSym);
        document.querySelector(".div1 h1").textContent = num[0] + " * ";
    }
}
function divide() {
    if (sym.length === 0) {
        if (a.length === 0) {
            alert("please enter the number first...");
        }
        else {
            let tempSym = "/";
            sym.push(tempSym);
            num.push(a[0]);
            document.querySelector(".div1 h1").textContent = num[0] + " / ";
        }
    }
    else {
        sym.pop();
        let tempSym = "/";
        sym.push(tempSym);
        document.querySelector(".div1 h1").textContent = num[0] + " / ";
    }
}
function equals() {
    num.push(b[0]);
    let x;
    if (sym[0] === "+") {
        x = num[0] + num[1];
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + num[1] + " = " + x ;
    }
    else if (sym[0] === "-") {
        x = num[0] - num[1];
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + num[1] + " = " + x ;
    }
    else if (sym[0] === "*") {
        x = num[0] * num[1];
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + num[1] + " = " + x ;
    }
    else if (sym[0] === "/") {
        x = num[0] / num[1];
        document.querySelector(".div1 h1").textContent = num[0] + " " + sym[0] + " " + num[1] + " = " + x ;
    }
    else {
        alert("please enter a valid code...");
    }
    num.pop();
    num.pop();
    num.push(x);
    b.pop();
}
function nightLight()
{
   document.querySelector("body").setAttribute("class" , "cls");
   document.querySelector(".dark").setAttribute("class" , "light");
}

function dayLight()
{
    document.querySelector("body").setAttribute("class" , "ds");
    document.querySelector(".light").setAttribute("class" , "dark");
}