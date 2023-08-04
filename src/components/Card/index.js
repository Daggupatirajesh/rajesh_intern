import React from 'react';

const Card = ({ card_title, data, data_type, data_value, button, button_name, link, link_name, redirect, note }) => {
  return (
    <div className="card">
      <h3>{card_title}</h3>
      {data && (
        <p>
          {data_type === 'number'
            ? `Value: ${data_value}`
            : data_type === 'text'
            ? data_value
            : data_value}
        </p>
      )}
      {button && (
        <button onClick={() =>(redirect)}>
          {button_name}
        </button>
      )}
      {link && (
        <a href={redirect} className="card-link">
          {link_name}
        </a>
      )}
      {note && <p>{note}</p>}
    </div>
  );
};

export default Card;
