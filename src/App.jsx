import { useEffect, useState } from "react";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import Transactions from "./components/Transactions";

function App() {

  // Theme Management
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  // Transaction Management
  const [transactions, setTransactions] = useState(
    JSON.parse(window.localStorage.getItem('money-tracker')) || []
  );

  const addTransaction = (formData) => {

    const newData = [formData, ...transactions];

    setTransactions(newData);

    window.localStorage.setItem(
      'money-tracker',
      JSON.stringify(newData)
    );

  };


  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen p-4">

      {/* Dark Mode Button */}
      <div className="flex justify-end mb-4">

        <button
          onClick={toggleTheme}
          className="btn btn-circle btn-outline text-xl"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

      </div>

      <Header transactions={transactions}/>

      <TransactionForm addTransaction={addTransaction}/>

      <Transactions
        transactions={transactions}
        setTransactions={setTransactions}
      />

    </div>
  );
}

export default App;