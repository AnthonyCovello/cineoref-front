// ? Data fictives
import listOfRefs from './assets/data';

// const cleanRefs = listOfRefs.filter((data) => data.status === true && data.mature === false);

function findRandomRef() {
  // const randomId = (() => Math.floor(Math.random() * listOfRefs.length));

  return listOfRefs[Math.floor(Math.random() * listOfRefs.length)];
}

export default findRandomRef;
