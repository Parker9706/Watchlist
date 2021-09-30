import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';



const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};

const CreateDramaCard = props => {
  const [ title, titleOnChange ] = useInput('');
  const [ air_date, dateOnChange ] = useInput('');
  const [ synopsis, synopsisOnChange ] = useInput('');
  const [ current_episode, currentepisodeOnChange ] = useInput('');
  const [ total_episodes, totalEpisodesOnChange ] = useInput('');
  const [ titleError, setTitleError ] = useState(null);
  const saveDrama = () => {
    // check if title is empty
    if (title === '') {
      setTitleError('required');
    }
      const body = {
        title,
        air_date,
        synopsis,
        current_episode,
        total_episodes
      };
      fetch('/api/dramacard', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then((data) => {
          console.log('Look here: ', data);
        })
        .then(() => {
          props.history.push('/');
        })
        .catch(err => console.log('CreateDramaCard fetch /api/dramaCard ERROR: ', err));
    }


  // useEffect to clear titleError when `title` is changed
  useEffect(()=>{
    setTitleError(null);
  }, [title]);

  return (

    <section className="mainSection createDramaContainer">
    <img src="https://fontmeme.com/permalink/210930/13b29ff3a42c76acc399b353af7af2d6.png" alt="watchlist-logo" id="header" href="localhost:8080/"></img>
      <header className="pageHeader">
        <h2>Add A Drama</h2>
        <Link to="/" className="backLink">
          <button type="button" className="backBtn">
              Back to your watchlist
          </button>
        </Link>
      </header>
      <article>
        <h3>Enter details for the drama</h3>
        <div className="createDramaFields">
          <label htmlFor="title">Title: </label>
          <input name="title" placeholder="Crash Landing On You" value={title} onChange={titleOnChange} />
          {titleError ? (<span className="errorMsg">{titleError}</span>) : null}
        </div>
        <div className="createDramaFields">
          <label htmlFor="airdate">Air Date: </label>
          <input name="airdate" placeholder="YYYY-MM-DD" value={air_date} onChange={dateOnChange} />
        </div>
        <div className="createDramaFields">
          <label htmlFor="synopsis">Synopsis: </label>
          <input name="synopsis" placeholder="Type up a brief summary" value={synopsis} onChange={synopsisOnChange} />
        </div>
        <div className="createDramaFields">
          <label htmlFor="currentEpisode">Current Episode: </label>
          <input name="currentEpisode" placeholder="1" value={current_episode} onChange={currentepisodeOnChange} />
        </div>
        <div className="createDramaFields">
          <label htmlFor="totalEpisodes">Total Episodes: </label>
          <input name="totalEpisodes" placeholder="100" value={total_episodes} onChange={totalEpisodesOnChange} />
        </div>
        <div className="createCharButtonContainer">
          <Link to="/" className="backLink">
            <button type="button" className="cancelBtn">
              Cancel
            </button>
          </Link>
          <button type="button" className="saveBtn" onClick={saveDrama}>Save</button>
        </div>
      </article>
    </section>
  );
};

export default withRouter(CreateDramaCard);