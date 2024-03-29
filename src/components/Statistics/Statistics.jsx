import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(statItem => (
          <li
            className={css.item}
            key={statItem.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{statItem.label}</span>
            <span className={css.percentage}>{statItem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};