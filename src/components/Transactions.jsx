const Transactions = ({ transactions, setTransactions }) => {

  const handleDelete = (id) => {
    const afterDelete = transactions.filter(t => t.id !== id);

    window.localStorage.setItem(
      'money-tracker',
      JSON.stringify(afterDelete)
    );

    setTransactions(afterDelete);
  };

  return (
    <div className="px-5">
      {transactions.map(t => (
        <div key={t.id} className="card bg-base-100 card-md shadow-sm">

          <div className="flex justify-between">

            <div>
              <h1 className="text-xl font-semibold">{t?.title}</h1>

              <p>{t?.category}</p>

              <p>{new Date(t?.date).toLocaleDateString('en-BD')}</p>
            </div>

            <div className="justify-end card-actions">

              <p>{t?.amount}</p>

              <button
                onClick={() => handleDelete(t?.id)}
                className="btn btn-error text-white"
              >
                Delete
              </button>

            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;