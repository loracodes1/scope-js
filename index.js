// Global scope --accessible in every scope, its the outermost scope
let globalVar = "I am a global variable"; // Global variable

function outerFunction() {
    // Functional scope
    let outerVar = "I am an outer variable"; // Variable accessible only in outerFunction

    {
        // Block scope
        let blockVar = "I am a block scoped variable"; // Variable accessible only within this block
        console.log(globalVar); // Accessible: Output: I am a global variable
        console.log(outerVar); // Accessible: Output: I am an outer variable
        console.log(blockVar); // Accessible: Output: I am a block scoped variable
    }

    function innerFunction() {
        // Lexical scope
        console.log(globalVar); // Accessible: Output: I am a global variable
        console.log(outerVar); // Accessible: Output: I am an outer variable
        // console.log(blockVar); // Un-commenting this line would cause an error: blockVar is not defined
    }

    innerFunction();
}

// Call the outer function
outerFunction();