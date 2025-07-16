const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const category = document.getElementById("category");
const dateInput = document.getElementById("date");
const error = document.getElementById("error");
const balance = document.getElementById("balance");
const incomeDisplay = document.getElementById("income");
const expenseDisplay = document.getElementById("expense");
const transactionList = document.getElementById("transaction-list");
const filterCategory = document.getElementById("filter-category");
const filterStart = document.getElementById("filter-start");
const filterEnd = document.getElementById("filter-end");
const exportBtn = document.getElementById("export-csv");
const summaryChart = document.getElementById("summaryChart").getContext("2d");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function addTransaction(e) {
  e.preventDefault();
  if (!text.value || !amount.value || !dateInput.value) {
    error.innerText = "Please fill all required fields.";
    return;
  }
  error.innerText = "";
  const newTransaction = {
    id: Date.now(),
    name: text.value,
    amount: Math.abs(+amount.value),
    type: type.value,
    category: category.value,
    date: dateInput.value
  };
  transactions.push(newTransaction);
  updateLocalStorage();
  renderTransactions();
  form.reset();
}

function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  updateLocalStorage();
  renderTransactions();
}

function renderTransactions() {
  transactionList.innerHTML = "";

  const filtered = transactions.filter(t => {
    const startDate = filterStart.value ? new Date(filterStart.value) : null;
    const endDate = filterEnd.value ? new Date(filterEnd.value) : null;
    const tDate = new Date(t.date);
    const categoryMatch = !filterCategory.value || t.category === filterCategory.value;
    const dateMatch =
      (!startDate || tDate >= startDate) && (!endDate || tDate <= endDate);
    return categoryMatch && dateMatch;
  });

  let income = 0, expense = 0;
  filtered.forEach(t => {
    const li = document.createElement("li");
    li.classList.add(t.type);
    li.innerHTML = `
      ${t.name} [${t.category}] - ₹${t.amount.toFixed(2)} (${t.date})
      <button onclick="deleteTransaction(${t.id})">x</button>
    `;
    transactionList.appendChild(li);
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  balance.innerText = (income - expense).toFixed(2);
  incomeDisplay.innerText = `₹${income.toFixed(2)}`;
  expenseDisplay.innerText = `₹${expense.toFixed(2)}`;

  renderChart(income, expense);
}

function renderChart(income, expense) {
  if (window.myChart) window.myChart.destroy();
  window.myChart = new Chart(summaryChart, {
    type: "doughnut",
    data: {
      labels: ["Income", "Expense"],
      datasets: [{
        data: [income, expense],
        backgroundColor: ["#00e676", "#ff5252"]
      }]
    }
  });
}

function exportCSV() {
  let csv = "Name,Amount,Type,Category,Date\n";
  transactions.forEach(t => {
    csv += `${t.name},${t.amount},${t.type},${t.category},${t.date}\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "transactions.csv";
  a.click();
}

form.addEventListener("submit", addTransaction);
filterCategory.addEventListener("change", renderTransactions);
filterStart.addEventListener("change", renderTransactions);
filterEnd.addEventListener("change", renderTransactions);
exportBtn.addEventListener("click", exportCSV);

renderTransactions();
