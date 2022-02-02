/**
 * Dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Components
 */
import {App} from './App';
import { DataProvider } from "./context/DataContext";

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById('root')
);

