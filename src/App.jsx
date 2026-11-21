import { useState } from "react"
import Header from "./components/Header"
import TransactionForm from "./components/TransactionForm"

function App() {

  const [transactions, setTransactions] = useState(JSON.parse(window.localStorage.getItem('money-tracker')) || [])


const addTransaction = (formData) => {
  const isMoneyTrackerExist = window.localStorage.getItem('money-tracker')
  

  if(isMoneyTrackerExist){
    const localData = JSON.parse(isMoneyTrackerExist);
    const newData = [formData, ...localData]
    window.localStorage.setItem('money-tracker', JSON.stringify(newData))
  }else{
    const formDataInString = JSON.stringify([formData])
    window.localStorage.setItem('money-tracker', formDataInString)
  }
  
}


  return (
    <div className="w-full max-w-7xl mx-auto">
      <Header transactions={transactions}/>
      <TransactionForm addTransaction={addTransaction}/>
    </div>
  )
}

export default App
