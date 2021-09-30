import React from 'react';
import deleteDrama from './DeleteDramaCard.jsx';


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
    <article className="drama dramaCard">
      <div className="dramaHeadContainer">
        <h3 className="dramaTitle">{title}</h3>
      </div>
      <ul className="dramaDetails">
        <li className="dramaDetail">Original Air Date: {convertDate(air_date)}</li>
        <li className="dramaDetail">Plot: {synopsis}</li>
        <li className="dramaDetail">Current Episode: {current_episode}</li>
        <li className="dramaDetail">Total Episodes: {total_episodes}</li>
      </ul>
      <button type="button" className="deletebtn" onClick={() => { deleteDrama(title) }}>Delete</button>
    </article>
  );
};

export default DramaCard;
