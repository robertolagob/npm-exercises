const $ = require('jquery');

const sayHello = name => {
    console.log("hello "+name);
}

sayHello("Robert");

$("body").css("background-color","gray");