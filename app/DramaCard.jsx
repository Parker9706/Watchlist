import React from 'react';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';



const DramaCard = ({
  info,
  lang
}) => {

  // https://image.tmdb.org/t/p/w500/fFT0IgqtCOks4munDTxQwkvNJkd.jpg



  const generatePosterImage = (imgUrl) => {
    return 'https://image.tmdb.org/t/p/'.concat('w500').concat(imgUrl);
  } 
  

  // const refreshPage = () => {
  //   window.location.reload(false)
  // }

  console.log(info)

  return (
    <article>
    <div className="dramaCard">
      <ul className="dramaDetails">
        <li><img src={generatePosterImage(info.backdrop_path)} alt="poster" className="poster"></img></li>
        <li> <h3 className="dramaHeadContainer">{info[lang]}</h3></li>
        <li><Rating 
        precision={0.5}
        readOnly
        max={10}
        value={info.vote_average}
        icon={<FavoriteIcon style={{ color: "#ff3d47", textAlign: "left", fontSize: "10px" }}fontSize="1px" color="red" />}
        emptyIcon={<FavoriteIcon style={{ textAlign: "left", fontSize: "10px" }} />} 
        /><p>{(info.vote_average) * 10}%</p></li>
        {/* <li className="dramaDetail" id="airdate">date</li>
        <li className="dramaDetail" id="synopsis">why</li>
        <li className="dramaDetail" id="total">Total Episodes</li> */}

      </ul>

      </div>
    </article>
  );
};

export default DramaCard;
