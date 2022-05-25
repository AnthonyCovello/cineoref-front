import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function TeamPage() {
  return (
    <div className="teamPage flex flex-start w-4/5 mx-auto py-8 px-8 rounded-md cursor-context-menu tablet:w-11/12 tablet:px-8 phone:py-2 phone:px-1">
      <div className="teamMember flex flex-col w-[25%] m-4 p-4 rounded-md">
        <img className="teamMember-image self-center mb-2 h-[12rem] w-[12rem] rounded-full phone:h-30 phone:w-30" src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg" alt="Photo de profil" />
        <div className="teamMember-bar"><p className="teamMember-bar-info">Anthony Covello</p></div>
        <div className="teamMember-bar"><p className="teamMember-bar-info">Product Owner / Lead Dev Front</p></div>
        <a href="#" className="teamMember-bar">Citation préférée<br /><p className="teamMember-bar-info italic justify-center font-normal">"Milles sabords de couille de pute!"</p></a>
        <ul className="flex pt-2 mt-auto mb-2 justify-around">
          <a className="inline-block h-16 w-16" href="#" rel="noreferrer" target="_blank"><img className=" rounded-full h-16 w-16" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHubLink" /></a>
          <a className="inline-block h-16 w-16" href="#" rel="noreferrer" target="_blank"><img className=" h-16 w-16" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedinLink" /></a>
        </ul>
      </div>
      <div className="teamMember flex flex-col w-[25%] m-4 p-4 rounded-md">
        <img className="teamMember-image self-center mb-2 h-[12rem] w-[12rem] rounded-full phone:h-30 phone:w-30" src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg" alt="Photo de profil" />
        <div className="teamMember-bar"><p className="teamMember-bar-info">Florian Le Cossec</p></div>
        <div className="teamMember-bar"><p className="teamMember-bar-info">Git Master / Référent technique</p></div>
        <a href="#" className="teamMember-bar">Citation préférée<br /><p className="teamMember-bar-info italic justify-center">"Ouais, c'est pas faux!"</p></a>
        <ul className="flex pt-2 mt-auto mb-2 justify-around">
          <a className="inline-block h-16 w-16" href="#" rel="noreferrer" target="_blank"><img className=" rounded-full h-16 w-16" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHubLink" /></a>
          <a className="inline-block h-16 w-16" href="#" rel="noreferrer" target="_blank"><img className=" h-16 w-16" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedinLink" /></a>
        </ul>
      </div>
      <div className="teamMember flex flex-col w-[25%] m-4 p-4 rounded-md">
        <img className="teamMember-image self-center mb-2 h-[12rem] w-[12rem] rounded-full phone:h-30 phone:w-30" src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg" alt="Photo de profil" />
        <div className="teamMember-bar"><p className="teamMember-bar-info">Raphaël Jouffreau</p></div>
        <div className="teamMember-bar"><p className="teamMember-bar-info">Lead Dev Back</p></div>
        <a href="#" className="teamMember-bar">Citation préférée<br /><p className="teamMember-bar-info italic justify-center">"Philippe! Je sais où tu te caches!"</p></a>
        <ul className="flex pt-2 mt-auto mb-2 justify-around">
          <a className="inline-block h-16 w-16" href="#" rel="noreferrer" target="_blank"><img className=" rounded-full h-16 w-16" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHubLink" /></a>
          <a className="inline-block h-16 w-16" href="#" rel="noreferrer" target="_blank"><img className=" h-16 w-16" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedinLink" /></a>
        </ul>
      </div>
      <div className="teamMember flex flex-col w-[25%] m-4 p-4 rounded-md">
        <img className="teamMember-image self-center mb-2 h-[12rem] w-[12rem] rounded-full phone:h-30 phone:w-30" src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg" alt="Photo de profil" />
        <div className="teamMember-bar"><p className="teamMember-bar-info">Vincent de Almeida</p></div>
        <div className="teamMember-bar"><p className="teamMember-bar-info">Scrum Master / Référent technique</p></div>
        <a href="#" className="teamMember-bar">Citation préférée<br /><p className="teamMember-bar-info italic justify-center">"Le gras c'est la vie."</p></a>
        <ul className="flex mt-4 mb-2 justify-around">
          <a className="inline-block h-16 w-16" href="#" rel="noreferrer" target="_blank"><img className=" rounded-full h-16 w-16" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHubLink" /></a>
          <a className="inline-block h-16 w-16" href="#" rel="noreferrer" target="_blank"><img className=" h-16 w-16" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedinLink" /></a>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(TeamPage);
