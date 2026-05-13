1) What are the JS concepts I need to learn for storing values from an input field and displaying the stored value on the page?

2) can I use getElementById for this: const salaryInput = document.querySelector("#salary-input");

3) When I try to enter a value in the salary field and click on the button, I get this error:
```Uncaught TypeError: Cannot read properties of null (reading 'value')
    at HTMLButtonElement.<anonymous> (script.js:7:39)```

Here is my code:
```let totalSalary = 0;
let totalExpenses = 0;
const salaryInput = document.getElementById("salary-input");
const salaryDisplay = document.getElementById("salary-display");

document.getElementById("salary-button").addEventListener("click", function () {
    const salary = Number(salaryInput.value);
    salaryDisplay.textContent = salary;
});```

4) is this the correct way to store objects:
```let name = expenseNameField.value;
    let amount = Number(expenseAmountField.value);
    const expense = {
        name: name,
        amount: amount
    };
    
    expenses.push(expense);```