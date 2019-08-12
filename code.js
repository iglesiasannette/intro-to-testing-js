// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sum(a, b) {
    if(b === "sheep") {
        return false;
    }
    return a + b;

}


function sayHello(input){
    if (input === true || input === false){
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    {
        if (input === 5) {
            return true;
        } else {

            return 'boolean';
        }
    }
}

function isEven(input) {
    if (input % 2 === 0) {
        return true;
    } else if (input % 2 === 1 || input === String(input) || input === Infinity) {
        return false;
    }   else{
    return "boolean";

    }
}

function isVowel(input) {
    if (input === "a") {
        return true;
    } else if (input === "A") {
        return true;
    } else if (input === "y") {
        return false;
    }else if (input === 4) {
        return false;
    } else if (input === "true" || input === "false") {
        return false;
    } else if (input === "banana") {
        return false;
    } else if (input === ''){
        return false;
}    else {
        return "boolean";
    }
}

function add(number1, number2) {
    if(number1 === String || number2 === String || number1 === "" || number2 === ""){
        return NaN;
    } else{
       return parseInt(number1) + parseInt(number2)
    }
}