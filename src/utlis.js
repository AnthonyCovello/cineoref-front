/* eslint-disable no-return-assign */
// ? Import modules
import { useEffect } from 'react';

// ? Data fictives
import listOfRefs from './assets/data';

function findRandomRef() {
  return listOfRefs[Math.floor(Math.random() * listOfRefs.length)];
}

export default findRandomRef;

// ? Titre de l'onglet
export function changeTabTitle(title) {
  useEffect(() => document.title = `CinéO'Ref - ${title}`);
}

// ? Traduction des catégories reçu du back
export function toFrench(category) {
  const categoryToFrench = category;

  switch (categoryToFrench) {
    case 'movie': return 'Film';
    case 'serie': return 'Série';
    case 'anime': return 'Animé';
    case 'cartoon': return 'Dessins animés';
    default:
  }

  return categoryToFrench;
}
