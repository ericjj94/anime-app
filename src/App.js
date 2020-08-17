import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import AnimeList from './components/AnimeList/AnimeList';
import AnimePage from './components/AnimePage/AnimePage.js';

const App= () => {
    return (
      <Router>
        <Switch>
          <Route path='/anime/:id' component={AnimePage} />
          <Route exact path="/" component={AnimeList} />
        </Switch>
      </Router>
    );

} 
export default App;