// ? Import modules
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProposalCard from './ProposalCard';

// ? Import styles
import './styles.scss';

// ? Composant
function PendingProposals() {
  const [proposalList, setProposalList] = useState([]);

  useEffect(() => {
    axios.get('https://cinoref-api.herokuapp.com/admin/dashboard')
      .then((res) => {
        setProposalList(res.data.request);
      });
  }, []);
  console.log(proposalList);
  return (
    <div className="pendingProposals pr-4">
      <h2 className="pendingProposals-title text-center text-[2rem] font-bold text-porange phone:text-[1.9rem]">Propositions en attente</h2>
      <ol className="pendingProposals-list mt-4 desk:max-h-[32rem] overflow-y-auto scrollbar-hide tablet:max-h-[25rem]">
        {proposalList.map((item) => (
          <li key={item.id} className="pendingProposals-list-item">
            <ProposalCard
              refId={item.id}
              citation={item.ref}
              show={item.show}
              character={item.character}
              artist={item.artist}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default React.memo(PendingProposals);
