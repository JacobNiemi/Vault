/*  1. Display a string to the user:
   - "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

    2. Generate three codes using unique arithmetic operators:
        a. Assign a variable (num1) with the result of a mathematical calculation using the addition operator.
        b. Assign a variable (num2) with the result of a mathematical calculation using the multiplication operator.
        c. Assign a variable (num3) with the result of a mathematical calculation using the subtraction operator.

    3. Display the vault code in a popup dialog box:
        a. Use the alert function to display the user message and then the combination.

    4. Add comments throughout the code to explain each step:
        a. Comment each variable assignment explaining the arithmetic operation used.

    5. Test the code:
        a. Open the HTML page or execute the script block to see the generated vault codes and the user message. */

// Display welcome popup
alert(
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
);

// Mathmatic operations to generate code
let num1 = 5 + 5; // Addition (+)
let num2 = 10 * 4; // Multiplication (*)
let num3 = 40 - 1; // Substraction (-)

// Display vault codes popup
alert(`Vault Combination: ${num1}  ${num2}  ${num3}`);
