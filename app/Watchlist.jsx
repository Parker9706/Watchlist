import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DramaCard from './DramaCard';

class Watchlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedList: false,
      watchlist: {},
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=f64258c402a8bd4daf4d77c6980e0692&with_genres=18&with_original_language=ko')
      .then(res => res.json())
      .then((res) => {
        return this.setState({
          res,
          fetchedList: true
        });
      })
      .catch(err => console.log('Watchlist.componentDidMount: get watchlist: ERROR: ', err));
  }

  render() {
    if (!this.state.fetchedList) return (
      <div>
        <h2>this shit no work</h2>
        <h1>Loading Watchlist, please wait...💁‍♂️</h1>
      </div>
    );

    const { watchlist } = this.state;

    if (!watchlist) return null;

    // if (!watchlist.length) return (
    //   <div>Sorry, no dramas have been found 😞</div>
    // ); 

    // const dramaElems = watchlist.map((char, i) => {
      return (
        <DramaCard />
      );
    // });

    return (
      <section className="mainSection">
        <header className="pageHeader">
          <img src="https://fontmeme.com/permalink/210930/13b29ff3a42c76acc399b353af7af2d6.png" alt="watchlist-logo" id="header" href="localhost:8080/"></img>
        </header>
        <div className="dramaContainer">
          {dramaElems}
        </div>
      </section>
    );
  }
}

export default Watchlist;
