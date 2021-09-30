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

  const refreshPage = () => {
    window.location.reload(false)
  }


  const generatePoster = (title) => {
    const titleCopy = title.toLowerCase();
    const obj = {
      "record of youth": "https://m.media-amazon.com/images/M/MV5BNTgxZmVmYTItOTY1MC00MGQwLTg5NTgtMDliMGMxMWRkODc4XkEyXkFqcGdeQXVyNDU4MDQ0MjM@._V1_.jpg",
      "nevertheless": "https://upload.wikimedia.org/wikipedia/en/5/56/Nevertheless_%28TV_series%29.jpg",
      "crash landing on you": "https://m.media-amazon.com/images/M/MV5BMzRiZWUyN2YtNDI4YS00NTg2LTg0OTgtMGI2ZjU4ODQ4Yjk3XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg",
      "vincenzo": "https://0.soompi.io/wp-content/uploads/2021/01/21153037/vincenzo-song-joong-ki.jpg",
      "love alarm": "https://m.media-amazon.com/images/M/MV5BYzc0N2VmYjQtY2Y0Mi00NzBhLTk3YjctNDI4MTU2YWJkYWFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      "start-up": "https://0.soompi.io/wp-content/uploads/2020/09/01225007/Start-Up1.jpg",
      "run on": "https://0.soompi.io/wp-content/uploads/2020/10/27195644/im-siwan-run-on.jpg",
      "itaewon class": "https://m.media-amazon.com/images/M/MV5BODY1NWE2OTctOTU5MC00NTlmLWI2MzktMmYzMTUzYjk4YjEzXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
      "its okay to not be okay": "https://0.soompi.io/wp-content/uploads/2020/06/01205515/kim-soo-hyun-seo-ye-ji-.jpeg",
      "strong woman do bong soon": "https://m.media-amazon.com/images/M/MV5BZWUyYmMyMjktMmFjNC00ZGFiLThjODYtNjQ1MzQyODhmZmVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      "hospital playlist": "https://0.soompi.io/wp-content/uploads/2020/02/18180122/hospital-playlist11.jpeg",
      "hi bye, mama!": "https://0.soompi.io/wp-content/uploads/2020/01/16154448/hi-bye-mama-poster-2.jpg",
      "whats wrong with secretary kim?": "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/What%27s_Wrong_with_Secretary_Kim.jpg/250px-What%27s_Wrong_with_Secretary_Kim.jpg",
      "young lady and gentleman": "https://photos.hancinema.net/photos/photo1367305.jpg",
      "my first first love": "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/My_First_First_Love_%282019_poster%29.jpg/250px-My_First_First_Love_%282019_poster%29.jpg",
      "a piece of your mind": "https://1739752386.rsc.cdn77.org/data/images/full/231999/a-piece-of-your-mind.jpg",
      "so not worth it": "https://m.media-amazon.com/images/M/MV5BYWNkNjBhMTAtZjlhMC00OTVjLWJlNmQtZjAxNjIwNzkwNjYwXkEyXkFqcGdeQXVyNDYzNDg2MTM@._V1_.jpg",
      "suspicious partner": "https://www.themoviedb.org/t/p/w500/e5ytMZlkGlVWtxSoLypobMaqZEO.jpg",
    }
    for (let key in obj) {
      if (key === titleCopy) return obj[key];
    }
    console.log('ERROR; No valid programming poster was found');
  }

  return (
    <article>
    <div className="dramaCard">
      <ul className="dramaDetails">
        <li><img src={generatePoster(title)} alt="poster" className="poster"></img></li>
        <li> <h3 className="dramaHeadContainer">{title}</h3></li>
        <li className="dramaDetail" id="airdate">{convertDate(air_date)}</li>
        <li className="dramaDetail" id="synopsis">{synopsis}</li>
        <li className="dramaDetail" id="current">Current Episode: {current_episode}<button type="button" className="incrementBtn" onClick={() => { incrementDrama(title), refreshPage() }}>+</button></li>
        <li className="dramaDetail" id="total">Total Episodes: {total_episodes}</li>

      </ul>

      </div>
      <button type="button" className="deleteBtn" onClick={() => { deleteDrama(title), refreshPage() }}>X</button>
    </article>
  );
};

export default DramaCard;
