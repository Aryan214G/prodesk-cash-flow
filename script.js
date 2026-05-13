let totalSalary = 0;
let totalExpenses = 0;
const salaryInput = document.getElementById("salary-field");
const salaryDisplay = document.getElementById("salary-display");

document.getElementById("salary-button").addEventListener("click", function () {
    const salary = Number(salaryInput.value);
    salaryDisplay.textContent = salary;
});
