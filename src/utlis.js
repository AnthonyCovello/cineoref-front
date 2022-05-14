// ? Data fictives
import listOfRefs from './assets/data';

function findRandomRef() {
  return listOfRefs[Math.floor(Math.random() * listOfRefs.length)];
}

export default findRandomRef;
