// 1.Global scope --accessible in every scope, its the outermost scope
let globalVar = "I am a global variable"; // Global variable

function outerFunction() {
    // 2.Functional scope
    let outerVar = "I am an outer variable"; // Variable accessible only in outerFunction

    {
        // Block scope
        let blockVar = "I am a block scoped variable"; // Variable accessible only within this block
        console.log(globalVar); // Accessible: Output: I am a global variable
        console.log(outerVar); // Accessible: Output: I am an outer variable
        console.log(blockVar); // Accessible: Output: I am a block scoped variable
    }

    function innerFunction() {
        // Lexical scope  -- yopu can access anything in your parent scope i.e functional scope can access anything in the dlobal scope but the reverse is not true
        console.log(globalVar); // Accessible: Output: I am a global variable
        console.log(outerVar); // Accessible: Output: I am an outer variable
        // console.log(blockVar); // Un-commenting this line would cause an error: blockVar is not defined
    }

    innerFunction();
}

// Call the outer function
outerFunction();

// Trying to access block scoped variable outside of its block will cause an error
// console.log(blockVar); // Uncommenting this will result in: ReferenceError: blockVar is not defined

// Accessing global variable
console.log(globalVar); // Accessible: Output: I am a global variable

// Accessing outer variable outside its function will cause an error
// console.log(outerVar); // Uncommenting this will result in: ReferenceError: outerVar is not defined