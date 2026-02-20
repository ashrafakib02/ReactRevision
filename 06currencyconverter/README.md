

# 💱 Currency Converter

A modern and responsive **Currency Converter** web application that allows users to convert currencies using real-time exchange rates.

This project uses the free open-source exchange rate API provided by
👉 fawazahmed0/exchange-api

---

## 🚀 Features

* 🌍 Convert between 150+ international currencies
* 🔄 Real-time exchange rates (updated daily)
* 💲 Accurate conversion up to 2 decimal places
* 🔁 Instant currency swap functionality
* 📱 Fully responsive design
* ⚡ Fast and lightweight

---

## 🛠️ Built With

* React.js
* JavaScript (ES6+)
* Exchange Rate API (CDN-based JSON)
* Tailwind CSS 

---

## 🔗 API Used

This project uses the free currency API from:

**Exchange API by Fawaz Ahmed**

Example endpoint format:

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
```

Example response structure:

```json
{
  "date": "2026-02-19",
  "usd": {
    "eur": 0.92,
    "bdt": 109.50,
    "inr": 83.10
  }
}
```

### 🔄 Conversion Logic

```js
convertedAmount = amount * currencyInfo[to]
```

The result is formatted to 2 decimal places before displaying.

---

## 📦 Installation

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/ashrafakib02/ReactRevision/tree/main/06currencyconverter

# Navigate to project folder
cd 06currencyconverter

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🧠 How It Works

1. User selects a base currency.
2. The app fetches exchange rate data from the API.
3. User enters an amount.
4. The app multiplies the amount by the selected target currency rate.
5. The converted result is displayed instantly.

---

## 🔄 Future Improvements

* 🌙 Dark mode
* 📊 Historical exchange rate charts
* ⭐ Favorite currencies
* 🌐 Language support
* 💾 Save last selected currencies

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 📜 License

This project is open-source and available under the MIT License.


---
