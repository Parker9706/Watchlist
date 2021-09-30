import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// import Watchlist from './/Watchlist.jsx';
// import DramaCard from './/DramaCard.jsx';  //these two might not be needed here

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);












//All from a tutorial
// class App extends React.Component{
//     render(){
//         return(
//             <Watchlist />,
//             <div>Hello Worlds</div>
//         )
//     }
// }

// ReactDOM.render(<App />, document.getElementById('app'))