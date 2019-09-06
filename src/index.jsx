import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import carsReducer from './reducers/cars_reducer';

import '../assets/stylesheets/application.scss';

import garageIndex from './containers/garage_index';
import CarForm from './containers/car_form';
import CarShow from './containers/car_show'


const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
  // key: reducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

const garageName = 'my-garage';

const initialState = {
  garage: garageName,
  cars: [
    // { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
    // { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
    // { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
    // { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
  ]
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="appContainer">
        <Switch>
          <Route path="/" exact component={garageIndex} />
          <Route path="/cars/new" exact component={CarForm} />
          <Route path="/cars/:id" exact component={CarShow}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
