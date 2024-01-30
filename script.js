/*  1. Display a string to the user:
   - "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

    2. Generate three codes using unique arithmetic operators:
        a. Assign a variable (code1) with the result of a mathematical calculation using the addition operator.
        b. Assign a variable (code2) with the result of a mathematical calculation using the multiplication operator.
        c. Assign a variable (code3) with the result of a mathematical calculation using the subtraction operator.

    3. Display the vault codes in an HTML page or a popup dialog:
        a. Create an HTML element or use the alert function to display the combination and the user message.

    4. Add comments throughout the code to explain each step:
        a. Comment each variable assignment explaining the arithmetic operation used.
        b. Comment the display code to explain how the combination and user message are presented.

    5. Test the code:
        a. Open the HTML page or execute the script block to see the generated vault codes and the user message. */

// User message displayed here
alert(
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
);

// Mathmatic operations to generate code
let num1 = 5 + 5; // Addition (+)
let num2 = 10 * 4; // Multiplication (*)
let num3 = 40 - 1; // Substraction (-)

// Display vault codes in a popup dialog
alert("Vault Combination: " + num1 + " - " + num2 + " - " + num3);
