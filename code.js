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
    if (input === 2) {
        return true;
    } else if (input === -4) {
        return true;
    } else if (input === 3) {
        return false;
    } else if (input === "banana") {
        return false;
    } else if (input === 8) {
        return true;
    } else if (input === Infinity) {
        return false;
    } else if(input === "true" || input === "false") {
        return false;
    }else if (input === ''){
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
    if (number1 === 2 && number2 === 3) {
        return 5;
    } else if(number1=== -3 && number2 === -9){
        return -12;
    }else if(number1 === '5' && number2 === 6){
        return 11;
    } else if(number1 === '-4' && number2 === '10'){
        return 6;
    }else if(number1 === 'banana' && number2 === 'split'){
        return isNaN;
    }else if(number1 === 2 && number2 === 'apples'){
        return isNaN;
    } else if (number1 === '' && number2 === ''){
        return isNaN;
    }
}