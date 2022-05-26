/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function TeamPage() {
  return (
    <div className="teamPage flex justify-between w-4/5 mx-auto py-8 px-6 rounded-md cursor-context-menu tablet:w-11/12 tablet:px-8 phone:py-2 phone:px-1">
      <div className="teamMember flex flex-col w-[23%] py-4 px-2 rounded-md">
        <img className="teamMember-image self-center mb-2 h-[12rem] w-[12rem] rounded-full phone:h-30 phone:w-30" src="https://64.media.tumblr.com/401bc868ad3c189c07368853efc5e626/tumblr_p939u5ISYx1x61oego5_400.png" alt="Photo de profil" />
        <div className="teamMember-bar"><p className="teamMember-bar-info">Anthony Covello</p></div>
        <div className="teamMember-bar"><p className="teamMember-bar-info">Product Owner / Lead Dev Front</p></div>
        <Link to="/ref/130" className="teamMember-bar">Citation préférée<br /><p className="teamMember-bar-info italic justify-center font-normal">"Milles sabords de couille de pute!"</p></Link>
        <ul className="flex mt-auto mb-2 justify-around">
          <a className="inline-block h-16 w-16" href="https://www.github.com/AnthonyCovello" rel="noreferrer" target="_blank"><img className=" rounded-full h-16 w-16" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHubLink" /></a>
          <a className="inline-block h-16 w-16" href="https://www.linkedin.com/in/anthony-covello-aa5a9023b" rel="noreferrer" target="_blank"><img className=" h-16 w-16" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedinLink" /></a>
        </ul>
      </div>
      <div className="teamMember flex flex-col w-[23%] py-4 px-2 rounded-md">
        <img className="teamMember-image self-center mb-2 h-[12rem] w-[12rem] rounded-full phone:h-30 phone:w-30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oG2rBbnbfdD7oqxNDGd9viF77dzIEnNGWA&usqp=CAU" alt="Photo de profil" />
        <div className="teamMember-bar"><p className="teamMember-bar-info">Florian Le Cossec</p></div>
        <div className="teamMember-bar"><p className="teamMember-bar-info">Git Master / Référent technique</p></div>
        <Link to="/ref/69" className="teamMember-bar">Citation préférée<br /><p className="teamMember-bar-info italic justify-center">"C'est pas faux!"</p></Link>
        <ul className="flex mt-auto mb-2 justify-around">
          <a className="inline-block h-16 w-16" href="https://www.github.com/Florian-LeCossec" rel="noreferrer" target="_blank"><img className=" rounded-full h-16 w-16" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHubLink" /></a>
          <a className="inline-block h-16 w-16" href="https://www.linkedin.com/in/florian-le-cossec-105747206" rel="noreferrer" target="_blank"><img className=" h-16 w-16" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedinLink" /></a>
        </ul>
      </div>
      <div className="teamMember flex flex-col w-[23%] py-4 px-2 rounded-md">
        <img className="teamMember-image self-center mb-2 h-[12rem] w-[12rem] rounded-full phone:h-30 phone:w-30" src="https://cdn.discordapp.com/attachments/269211667626196992/979416854395248700/unknown.png" alt="Photo de profil" />
        <div className="teamMember-bar"><p className="teamMember-bar-info">Raphaël Jouffreau</p></div>
        <div className="teamMember-bar"><p className="teamMember-bar-info">Lead Dev Back</p></div>
        <Link to="/ref/55" className="teamMember-bar">Citation préférée<br /><p className="teamMember-bar-info italic justify-center">"Philippe! Je sais où tu te caches!"</p></Link>
        <ul className="flex mt-auto mb-2 justify-around">
          <a className="inline-block h-16 w-16" href="https://www.github.com/Raphael-Jouffreau" rel="noreferrer" target="_blank"><img className=" rounded-full h-16 w-16" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHubLink" /></a>
          <a className="inline-block h-16 w-16" href="https://www.linkedin.com/in/raphael-jouffreau-40bba5238" rel="noreferrer" target="_blank"><img className=" h-16 w-16" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedinLink" /></a>
        </ul>
      </div>
      <div className="teamMember flex flex-col w-[23%] py-4 px-2 rounded-md">
        <img className="teamMember-image self-center mb-2 h-[12rem] w-[12rem] rounded-full phone:h-30 phone:w-30" src="https://i1.sndcdn.com/artworks-000072676088-dpwpx6-t500x500.jpg" alt="Photo de profil" />
        <div className="teamMember-bar"><p className="teamMember-bar-info">Vincent de Almeida</p></div>
        <div className="teamMember-bar"><p className="teamMember-bar-info">Scrum Master / Référent technique</p></div>
        <Link to="/ref/136" className="teamMember-bar">Citation préférée<br /><p className="teamMember-bar-info italic justify-center">"Le gras c'est la vie."</p></Link>
        <ul className="flex mt-auto mb-2 justify-around">
          <a className="inline-block h-16 w-16" href="https://www.github.com/Vincent-de-Almeida" rel="noreferrer" target="_blank"><img className=" rounded-full h-16 w-16" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHubLink" /></a>
          <a className="inline-block h-16 w-16" href="https://www.linkedin.com/in/vincent-de-almeida-76465a48" rel="noreferrer" target="_blank"><img className=" h-16 w-16" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedinLink" /></a>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(TeamPage);
