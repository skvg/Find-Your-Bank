import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import AllBanksPage from './pages/AllBanksPage';
import BankDetailPage from './pages/BankDetailsPage';
import Header from './components/header/header';
import Favorites from './pages/FavouritesPage';

import './app.css'

function App() {
  return (
    <div className='root-div'>
      <Header />
      <Switch>
      <Route path="/all-banks">
        <AllBanksPage />
      </Route>
      <Route path="/bank-details/:ifscCode">
        <BankDetailPage />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
      <Route>
        <Redirect to="/all-banks" />
      </Route>
    </Switch>
    </div>
  )
}

export default App;