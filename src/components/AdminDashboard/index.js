// ? Import modules
import React from 'react';
import { useSelector } from 'react-redux';
import { changeTabTitle } from '../../utlis';

// ? Import composants
import Sidebar from './Sidebar';
import MainDash from './MainDash';
import PendingProposals from './PendingProposals';
import Users from './Users';

// ? Import styles
import './styles.scss';

// ? Composant
function AdminDashboard() {
  const selected = useSelector(({ admin }) => admin.sidebarSelected);

  changeTabTitle('Administration');

  return (
    <div className="dashboard grid gap-4 h-11/12 w-11/12 mx-auto py-2 overflow-hidden rounded-md cursor-context-menu phone:p-4">
      <Sidebar />
      {selected === 0 && <MainDash />}
      {selected === 1 && <Users />}
      {selected === 2 && <PendingProposals />}
    </div>
  );
}

export default React.memo(AdminDashboard);
