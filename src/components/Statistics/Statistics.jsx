import React from "react";
import PropTypes from 'prop-types';
import './Statistics.css'

const Statistics = ({title,stats}) => {
    return (
        <section className="statistics">
  {
    true && <h2 className="title">{title}</h2>
  }
  <ul className="stat-list">
        {stats.map(({id, label, percentage}) => (
            <li className="item" key={id}>
            <span className="itemLabel">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
    

  </ul>
</section>
    )
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
   
}