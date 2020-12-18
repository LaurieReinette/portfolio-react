// == Import npm
import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/Main';
import Experiences from 'src/components/Experiences';
import ProfessionnalCareer from 'src/components/ProfessionnalCareer';
import Productions from 'src/components/Productions';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/experiences" component={Experiences} />
      <Route exact path="/professionnal-career" component={ProfessionnalCareer} />
      <Route exact path="/productions" component={Productions} />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
