// ? Import modules
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// ? Import style
import './styles.scss';

// ? Composant
function PhoneTopContributor() {
  const contributorsData = useSelector(({ contributors }) => contributors.topContributors);

  return (
    <div className="contributors-phone top-26 left-16 max-w-[60%] p-3 font-bold rounded-md absolute max-h-min truncate">
      <h2 className="contributors-title mb-2.5 text-[1.1rem] text-center">Top contributeurs</h2>
      <ul>
        {contributorsData.map((contributor, index) => (
          <li className="p-1.5" key={contributor.username}>
            <Link to={`/user/${contributor.id}/profile`} className="contributors-links"> {index + 1} - {contributor.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(PhoneTopContributor);
