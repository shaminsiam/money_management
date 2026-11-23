import { useState } from "react";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import Transactions from "./components/Transactions";

function App() {

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
    <div className="w-full max-w-7xl mx-auto">

      <Header transactions={transactions}/>

      <TransactionForm addTransaction={addTransaction}/>

      <Transactions transactions={transactions}/>

    </div>
  );
}

export default App;