let totalSalary = 0;
let totalExpenses = 0;
let totalBalance = 0;
const salaryInput = document.getElementById("salary-field");
const salaryDisplay = document.getElementById("salary-display");

document.getElementById("salary-button").addEventListener("click", function () {

    const salary = Number(salaryInput.value);

    if (isNaN(salary) || salary <= 0) {

        alert("Please enter a valid salary");

        return;
    }

    totalSalary = salary;

    salaryDisplay.textContent = totalSalary;

    updateBalance();
});

const expenseNameField = document.getElementById("expense-name");
const expenseAmountField = document.getElementById("expense-amount");

let expenses = [];
document.getElementById("expense-button").addEventListener("click", function () {
    let name = expenseNameField.value;
    let amount = Number(expenseAmountField.value);

    if (!name || !expenseAmountField.value || amount <= 0) {

            alert("Please enter valid expense details");

            return;
        }

    const expense = {
        name: name,
        amount: amount
    };
    
    updateTotalExpenses(expense);
    expenses.push(expense);
    renderExpenses();
    updateBalance();
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

const balanceDisplay = document.getElementById("balance-display");
function updateBalance() {
    totalBalance = totalSalary - totalExpenses;
    balanceDisplay.textContent = totalBalance;
}