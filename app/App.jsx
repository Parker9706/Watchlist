import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MostPopular from './MostPopular.jsx';

import './/styles.css';

const App = props => {
  return (
    <div className="router">
      <main>
        <h2 id="main-header">🇰🇷 KOREAN DRAMAS</h2>
        <Switch>
          <Route
            exact
            path="/"
            component={MostPopular}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;