// ? Import modules
import React from 'react';
import { changeTabTitle } from '../../utlis';

// ? Import composants

// ? Import styles
import './styles.scss';

// ? Composant
function AdminDashboard() {
  changeTabTitle('Administration');

  return (
    <div className="dashboard grid gap-4 h-11/12 w-11/12 mx-auto overflow-hidden rounded-md cursor-context-menu phone:p-4">
      <h2 className="dashboard-title text-center text-[2rem] font-bold text-porange phone:text-[1.9rem]">Tableau de bord</h2>
    </div>
  );
}

export default React.memo(AdminDashboard);
