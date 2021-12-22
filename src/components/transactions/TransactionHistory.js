import propTypes from 'prop-types';

import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={s.row}>
            <td className={s.column}>{item.type}</td>
            <td className={s.column}>{item.amount}</td>
            <td className={s.column}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
