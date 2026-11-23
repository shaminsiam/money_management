const Header = ({ transactions }) => {

  const income = transactions.filter(t=> t.type == 'income')
  const totalIncome = income.reduce((sum,t)=> sum + parseFloat(t.amount), 0)

  const expense = transactions.filter(t=> t.type == 'expense')
  const totalExpense = expense.reduce((sum,t)=> sum + parseFloat(t.amount), 0)

  const totalBalance = totalIncome - totalExpense

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Money Management</h1>
        <p className="text-gray-400">Track your daily income and expense</p>
      </div>

      {/* cards */}
      <div className="flex justify-evenly">
        {/* Total Income */}
        <div class="card w-96 bg-white card-md shadow-sm border-t-3 border-green-600">
          <div class="card-body">
            <h2 class="text-2xl text-gray-500">Total Income</h2>
            <h2 className="text-2xl text-green-500">৳ {totalIncome}</h2>
          </div>
        </div>

        {/* Total Expense */}
        <div class="card w-96 bg-white card-md shadow-sm border-t-3 border-red-600">
          <div class="card-body">
            <h2 class="text-2xl text-gray-500">Total Expenese</h2>
            <h2 className="text-2xl text-red-600">৳ {totalExpense}</h2>
          </div>
        </div>

        {/* Total Balance */}
        <div class="card w-96 bg-white card-md shadow-sm border-t-3 border-blue-600">
          <div class="card-body">
            <h2 class="text-2xl text-gray-500">Total Balance</h2>
            <h2 className="text-2xl text-blue-500">৳ {totalBalance}</h2>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Header;
