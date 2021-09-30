import React from 'react';
import deleteDrama from './DeleteDramaCard.jsx';
import incrementDrama from './IncrementDrama.jsx';


const DramaCard = ({
  info
}) => {
  const {
    title, air_date, synopsis, current_episode, total_episodes = [],
  } = info;


  const convertDate = (date) => {
    const dateCopy = date.slice(0, 10)

    const monthOptions = ["January","February","March","April","May","June","July", "August","September","October","November","December"];

     const month = dateCopy[5] + dateCopy[6];

     return monthOptions[month-1] + ' ' + (dateCopy[8] + dateCopy[9]) + ', ' + dateCopy.slice(0, 4);
  }


  return (
    <article>
    <div className="dramaCard">
      <ul className="dramaDetails">
        <li><img src="https://m.media-amazon.com/images/M/MV5BNTgxZmVmYTItOTY1MC00MGQwLTg5NTgtMDliMGMxMWRkODc4XkEyXkFqcGdeQXVyNDU4MDQ0MjM@._V1_.jpg" alt="zico" className="poster"></img></li>
        <li> <h3 className="dramaHeadContainer">{title}</h3></li>
        <li className="dramaDetail" id="airdate">{convertDate(air_date)}</li>
        <li className="dramaDetail" id="synopsis">{synopsis}</li>
        <li className="dramaDetail" id="current">Current Episode: {current_episode}<button type="button" className="incrementBtn" onClick={() => { incrementDrama(title) }}>+</button></li>
        <li className="dramaDetail" id="total">Total Episodes: {total_episodes}</li>

      </ul>

      </div>
      <button type="button" className="deleteBtn" onClick={() => { deleteDrama(title) }}>X</button>
    </article>
  );
};

export default DramaCard;
