import React from 'react';
import MainApp from "./MainApp";
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const initialState = {};
const store = configureStore(initialState);

function App() {
  return (
    <Provider store={store}>
        <MainApp />
    </Provider>
  );
}

export default App