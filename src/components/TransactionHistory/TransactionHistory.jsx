import TransactionHistoryItems from "./TransactionHistoryItems";
import PropTypes from 'prop-types'; 
import './TransactionHistory.css'

const TransactionHistory = ({ items }) => {
    return (
      <table className="transaction-history">
        <thead>
          <tr className="table">
            <th className="tableName">Type</th>
            <th className="tableName">Amount</th>
            <th className="tableName">Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TransactionHistoryItems
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    );
  };

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired
}