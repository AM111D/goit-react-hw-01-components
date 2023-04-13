import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistoryItems = ({ id, type, amount, currency }) => {
  return (
    <tr key={id} id={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItems;

TransactionHistoryItems.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
