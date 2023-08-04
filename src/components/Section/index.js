import React, { useState } from 'react';
import Card from '../Card';

const Section = ({ title, cards }) => {
  const [showAllCards, setShowAllCards] = useState(false);

  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="cards">
        {cards
          .slice(0, showAllCards ? undefined : 3)
          .map((cardItem) => (
            <Card key={cardItem.id} {...cardItem} />
          ))}
      </div>
      {!showAllCards && (
        <button className='' onClick={() => setShowAllCards(true)}>See More</button>
      )}
    </div>
  );
};

export default Section;

