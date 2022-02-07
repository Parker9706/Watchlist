import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


import DramaCard from './DramaCard';

class MostPopular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedList: false,
      watchlist: {},
      lang: "name"
    };
  }


  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=f64258c402a8bd4daf4d77c6980e0692&with_genres=18&with_original_language=ko')
      .then(res => res.json())
      .then((res) => {
        return this.setState({
          watchlist: res,
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

  const temp = watchlist.results;
    const dramaElems = temp.map((details, i) => {
      console.log('hi')
      return (
        <DramaCard key={i} info={details} lang={this.state.lang} />
      );
    });

    return (
      <section className="mainSection">
        <Button id="korean-lang" onClick={() => {
          this.setState({ lang: "original_name" })
        }}>한국어</Button>
        <Button id="english-lang" onClick={() => {
          this.setState({ lang: "name" })
        }}>English</Button>
        <header className="pageHeader">
          <h2 id="main-title">MOST POPULAR</h2>
        </header>
        <div className="dramaContainer">
          {dramaElems}
        </div>
        <header className="rankHeader">
          <h2 id="main-title">TOP RANKED</h2>
        </header>
      </section>
    );
  }
}

export default MostPopular;
