import React from 'react';
import Banner from '../Banner';
import Section from '../Section';

const Dashboard = (props) => {
  const { banner, section, card } = props; // Use the imported JSON data

  return (
    <div className="dashboard">
      {/* Banner Slider */}
      <div className="banner-slider">
        {banner.map((item) => (
          <Banner key={item.id} {...item} />
        ))}
      </div>

      {/* Sections */}
      {section.map((secItem) => {
        const cardsInSection = card.filter((cardItem) => cardItem.parent_sec_no === secItem.sec_no);
        return <Section key={secItem.id} title={secItem.title} cards={cardsInSection} />;
      })}
    </div>
  );
};

export default Dashboard;
