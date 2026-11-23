import { useState } from "react";

const INCOME_CATEGORIES = [
  "salary",
  "Freelance",
  "Business",
  "Investments",
  "Gift",
  "Other",
]

const EXPENSE_CATEGORIES = [
  "Food & Dining",
  "Rent & Housing",
  "Groceries",
  "Utilities",
  "Transportation",
  "Entertainment",
  "Shopping",
  "Healthcare",
  "Others",
]


const TransactionForm = ({ addTransaction }) => {

const [type, setType] = useState('income')

const currentcategory = type == 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES
const [category, setcategory] = useState(INCOME_CATEGORIES[0])
const [title, setTitle] = useState('');
const [amount, setAmount] = useState(0);
const [date, setDate] = useState(new Date);

const handleAdd = ()=>{
  const formData = {
    title,
    amount,
    type,
    category,
    date,
    id: crypto.randomUUID()
  }
  if(title =='' || amount<=0){
    alert('Please fill the form properly')
    return
  }
  addTransaction(formData)
  setTitle('')
  setAmount(0)
}


  return (
    <div className="mt-12">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Title</label>
            <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" className="input" placeholder="Enter title" />


            <label className="label">Amount</label>
            <input value={amount} onChange={(e)=> setAmount(e.target.value)} type="number" className="input" placeholder="Enter amount eg: 1000" />
            
            <label className="label">Type</label>
            <select
              defaultValue="income" value={type} onChange={(e)=> {setType(e.target.value); e.target.value == 'income' ? setcategory(INCOME_CATEGORIES[0]) : setcategory(EXPENSE_CATEGORIES[0]) }} className="select select-primary"
            >
              {/* <option disabled={true}>Select a Type</option> */}
              <option value='income'>Income</option>
              <option value='expense'>Expense</option>
            </select>


            <label className="label">Category</label>
            <select
              defaultValue={INCOME_CATEGORIES[0]} value={category} onChange={(e)=> setcategory(e.target.value)} className="select select-primary"
            >
              {
                currentcategory.map(cat =><option value={cat}>{cat}</option>)
              }
            </select>

            <label className="label">Date</label>
            <input value={date} onChange={(e)=> setDate(e.target.value)} type="date" class="input" />

            <button onClick={handleAdd} className="btn btn-neutral mt-4">Add</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
