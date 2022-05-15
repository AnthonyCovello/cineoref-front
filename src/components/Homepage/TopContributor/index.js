// ? Import modules
import React from 'react';
import { useSelector } from 'react-redux';

// ? Import style
import './styles.scss';

// ? Composant
function TopContributor() {
  const contributorsData = useSelector(({ contributors }) => contributors.topContributors);

  return (
    <div className="contributors w-1/5 p-8 cursor-context-menu text-[1.25rem] font-bold rounded-3xl">
      <h2 className="contributors-title mb-2.5 text-3xl text-center">Top contributeurs</h2>
      <ul>
        {contributorsData.map((contributor, index) => (
          <li className="p-1.5" key={contributor.username}>
            <a href="#" className="contributors-links"> {index + 1} - {contributor.username}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(TopContributor);
