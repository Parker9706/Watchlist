import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DramaCard from './DramaCard';

class Watchlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedList: false,
      watchlist: [],
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then((watchlist) => {
        if (!Array.isArray(watchlist)) watchlist = [];
        return this.setState({
          watchlist,
          fetchedList: true
        });
      })
      .catch(err => console.log('Watchlist.componentDidMount: get watchlist: ERROR: ', err));
  }

  render() {
    if (!this.state.fetchedList) return (
      <div>
        <h1>Loading Watchlist, please wait...💁‍♂️</h1>
      </div>
    );

    const { watchlist } = this.state;

    if (!watchlist) return null;

    if (!watchlist.length) return (
      <div>Sorry, no dramas have been found 😞</div>
    );

    const dramaElems = watchlist.map((char, i) => {
      return (
        <DramaCard
          key={i}
          info={char}
        />
      );
    });

    return (
      <section className="mainSection">
        <header className="pageHeader">
          <img src="https://fontmeme.com/permalink/210930/13b29ff3a42c76acc399b353af7af2d6.png" alt="watchlist-logo" id="header" href="localhost:8080/"></img>
          <Link to={'/create'}>
            <button
              type="button"
              className="addDramaBtn"
            >
              +Program
            </button>
          </Link>
        </header>
        <div className="dramaContainer">
          {dramaElems}
        </div>
      </section>
    );
  }
}

export default Watchlist;
