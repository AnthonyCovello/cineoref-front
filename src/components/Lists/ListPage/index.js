// ? Import modules
import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
import ListMenu from '../ListMenu';
import List from './list';

// const cleanRefs = listOfRefs.filter((data) => data.status === true && data.mature === false);
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const movies = [
  {
    id: 1,
    name: 'Titanic',
  },
  {
    id: 2,
    name: 'Tarzan',
  },
  {
    id: 3,
    name: 'Le fabuleux destins d\'Amélie Poulain',
  },

  {
    id: 4,
    name: 'Avatar',
  },
];

function ListPage() {
  const dataMapping = [];
  letters.forEach((letter) => {
    const datas = movies.filter((data) => data.name.startsWith(letter)).sort();
    if (datas.length > 0) {
      dataMapping[letter] = datas;
    }
  });

  const result = Object.keys(dataMapping).map((key) => [(key), dataMapping[key]]);

  return (
    <div className="ListPage w-1/5 p-8 cursor-context-menu text-[1.25rem] font-bold rounded-3xl">
      <ListMenu />
      <div>
        <h2 className="letters mb-2.5 text-3xl text-center"> </h2>
        <p>titredefilm</p>
        {result.map((letter) => (
          <div key={letter[0]}>
            <span>{letter[0]}</span>
            <ul>
              <List letter={letter[1]} />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(ListPage);
