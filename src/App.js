import React from 'react';
import './App.css';
import Layout from './containers/layout';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';

export const store = createStore(
  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
