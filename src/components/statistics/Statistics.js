import propTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(item => (
          <li className={s.statItem} key={item.id}>
            <span className={s.label}>{item.label} </span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
