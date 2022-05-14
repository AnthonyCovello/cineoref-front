// ? Import modules
import React from 'react';

// ? Import style
import './styles.scss';

// ? Données fictives
const contributors = ['J-P l\'agitateur', 'Jacky', 'XxPussyHunter*$M\'Lady$*xX', 'Dark Sasuke', 'AmandineDu38'];

// ? Composant
function TopContributor() {
  return (
    <div className="contributors">
      <h2 className="contributors-title">Top contributeurs</h2>
      <ul>
        {contributors.map((contributor, index) => (
          <li className="contributors-items" key={contributor}>
            <a href="#" className="contributors-links"> {index + 1} - {contributor}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(TopContributor);
