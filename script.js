let totalSalary = 0;
let totalExpenses = 0;
const salaryInput = document.getElementById("salary-field");
const salaryDisplay = document.getElementById("salary-display");

document.getElementById("salary-button").addEventListener("click", function () {
    totalSalary = Number(salaryInput.value);
    salaryDisplay.textContent = totalSalary;
});

const expenseNameField = document.getElementById("expense-name");
const expenseAmountField = document.getElementById("expense-amount");

let expenses = [];
document.getElementById("expense-button").addEventListener("click", function () {
    let name = expenseNameField.value;
    let amount = Number(expenseAmountField.value);
    const expense = {
        name: name,
        amount: amount
    };
    
    updateTotalExpenses(expense);
    expenses.push(expense);
    renderExpenses();
});

const expenseDisplay = document.getElementById("expense-display");
function updateTotalExpenses(expense) {
    totalExpenses = totalExpenses + expense.amount;
    expenseDisplay.textContent = totalExpenses;
}

const expenseList = document.getElementById("expense-list");

function renderExpenses() {

    expenseList.innerHTML = "";

    expenses.forEach(function (expense) {

        const li =
            document.createElement("li");

        li.textContent = `${expense.name} - ₹${expense.amount}`;

        expenseList.appendChild(li);
    });
}