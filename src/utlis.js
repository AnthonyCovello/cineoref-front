/* eslint-disable no-return-assign */
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
