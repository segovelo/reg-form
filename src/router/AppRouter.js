import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstStep from '../components/FirstStep';
import Header from '../components/Header';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
      <Route
        render={(props) => (
                  <FirstStep {...props} 
                  user={user} 
                  updateUser={updateUser} />
                )}
        path="/"
        exact={true}
/>
        <Route component={SecondStep} path="/second" />
        <Route component={ThirdStep} path="/third" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;