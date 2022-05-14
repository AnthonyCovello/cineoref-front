// ? Import modules
import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { changeTabTitle } from '../../utlis';

// ? Import style
import './styles.scss';

// ? Data fictives
import listOfRefs from '../../assets/data';

// ! Refaire la page avec Tailwind ! \\
// ? Composant
function RefPage() {
  changeTabTitle('Citation');

  const fakeRef = listOfRefs[16]; //* données fictives

  return (
    <div className="refContainer">
      <Link className="refContainer-returnButton" to="/" title="Retourner à la page d'accueil">
        <BsFillArrowLeftSquareFill />
      </Link>
      <div className="refContainer-image">
        {/* // Todo: tester une image pour régler le style */}
        <img
          src=""
          alt=""
        />
      </div>
      <h2 className="refContainer-mediaTitle">Titre de l'œuvre</h2>
      <p className="refContainer-data">{fakeRef.title}</p>
      <h2 className="refContainer-category">Média</h2>
      <p className="refContainer-data">{fakeRef.category}</p>
      <h2 className="refContainer-character">Personnage</h2>
      <p className="refContainer-data">{fakeRef.character}</p>
      <h2 className="refContainer-artist">Artiste</h2>
      <p className="refContainer-data">{fakeRef.artist}</p>
      <h2 className="refContainer-ref">Citation</h2>
      <p className="refContainer-data">{fakeRef.ref}</p>
      <div className="user-score">
        <div>
          <h2 className="refContainer-user">Partagée par</h2>
          <Link to="#" className="refContainer-data">{fakeRef.user}</Link>
        </div>
        <div>
          <h2 className="refContainer-score">Note de la communauté</h2>
          {/* // Todo: importer la note moyenne  */}
          <p className="refContainer-data">{}</p>
        </div>
      </div>
      {/* // Todo: utiliser react-icons */}
      <span className="refContainer-cc" title="Copier le texte">cc</span>
      {/* // Todo: faire un système pour signaler une erreur */}
      <a className="signal">Signaler une erreur</a>
    </div>
  );
}

export default React.memo(RefPage);
