// ? Import modules
import React from 'react';

// ? Import styles
import './styles.scss';

// ? Composant
function PendingProposals() {
  return (
    <div className="pendingProposals">
      <h2 className="pendingProposals-title text-center text-[2rem] font-bold text-porange phone:text-[1.9rem]">Propositions en attente</h2>
    </div>
  );
}

export default React.memo(PendingProposals);
