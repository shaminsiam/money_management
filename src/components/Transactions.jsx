const Transactions = ({ transactions }) => {
  return (
    <div>
      {transactions.map(t => (
        <div class="card  bg-base-100 card-md shadow-sm">
          <div class="card-body">
            <h1>{t?.title}</h1>
            <div class="justify-end card-actions">
              <button class="btn btn-error">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
