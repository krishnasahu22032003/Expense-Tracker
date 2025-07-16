# 💰 NeoTrack - Expense Tracker

**NeoTrack** is a modern, professional, and responsive personal expense tracker built using HTML, CSS, and JavaScript. It allows users to manage income and expenses, view financial summaries, filter transactions by date or category, visualize spending trends with charts, and export data — all in an elegant UI.

---

## 🔥 Features

- ✅ Add Income and Expense with amount, category & date
- ✅ Real-time balance calculation
- ✅ Transaction history with delete option
- ✅ Filter transactions by category and date range
- ✅ Export transactions as a CSV file
- ✅ Monthly summary visualized using Chart.js
- ✅ Persistent local storage (data saved even after refresh)
- ✅ Fully responsive layout
- ✅ Modern, clean, and minimal UI


## 📦 Project Structure

NeoTrack/
├── index.html # Main UI structure
├── style.css # Styling with glassmorphism & responsive design
├── script.js # App logic, DOM handling, chart, filters
└── README.md # This file

---

## 🛠️ Built With

- **HTML5** – For markup and structure
- **CSS3** – Custom styling, layout & effects (modern, responsive)
- **JavaScript (ES6+)** – Logic, filtering, data handling
- **Chart.js** – For interactive pie chart
- **LocalStorage** – To save data persistently in the browser

---

## 🧠 How It Works

1. User adds a transaction with:
   - Title (e.g., "Groceries")
   - Amount
   - Type (Income/Expense)
   - Category
   - Date

2. Transactions are:
   - Saved in localStorage
   - Displayed in a list with delete option
   - Filterable by category and date

3. The app calculates:
   - Total Income
   - Total Expense
   - Current Balance

4. Chart.js renders a dynamic donut chart to show income vs expense breakdown.

5. You can export the entire transaction data to CSV with one click.

---

## 📤 Export to CSV

Easily export your transaction history by clicking the **"Export CSV"** button. A `.csv` file will be generated for download and can be used in Excel, Google Sheets, etc.

---

## 📊 Chart Summary

The app includes a doughnut chart using **Chart.js** that visually compares income and expenses. It updates live as you add or delete transactions.

---

## 📱 Responsive Design

NeoTrack works seamlessly on:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile devices

Thanks to CSS Grid, Flexbox, and media queries.

---

## 💡 Future Enhancements

- 🔐 User login and profile management
- ☁️ Cloud storage support (Firebase/Backend)
- 🌓 Dark/Light theme toggle
- 📅 Monthly views and breakdowns
- 🔔 Budget threshold alerts

---

## 🚀 Getting Started

No dependencies or build tools required.

### 👉 Run Locally:

1. Clone or download the repo
2. Open `index.html` in any modern browser
3. Start tracking your expenses!

```bash
git clone https://github.com/yourusername/neotrack-expense-tracker.git
cd neotrack-expense-tracker




###🧾 License
This project is licensed under the MIT License.

##👨‍💻 Author
NeoTrack designed and coded by [krishna sahu]
For any questions or feedback, feel free to connect!
email:krishna.sahu.work@gmail.com

##📬 Feedback
Have suggestions or improvements?
Open an issue or submit a PR to contribute to this open-source project.
