import PropTypes from 'prop-types'; 

const TransactionHistoryItems = ({id,type,amount,currency}) => {
    return (
        <tr key={id} className='tableСolumn'>
        <td className='tableCell'>{type}</td>
        <td className='tableCell'>{amount}</td>
        <td className='tableCell'>{currency}</td>
      </tr>
    )
}

export default TransactionHistoryItems;

TransactionHistoryItems.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}