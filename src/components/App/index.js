// == Import npm
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/Main';
import Experiences from 'src/components/Experiences';
import ProfessionnalCareer from 'src/components/ProfessionnalCareer';

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
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
