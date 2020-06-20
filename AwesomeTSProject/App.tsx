import React, { ReactElement } from 'react';
import {Provider} from "react-redux"
import { AddTodo } from "./src/AddTodo"
import store from './src/Store';
import { NavBar } from './src/NavBar';


const App: React.SFC = (): ReactElement => {
  return (
    <Provider store={store}>
      <NavBar props={"Bogdan"}/>
      <AddTodo/>
      </Provider>
  );
};

export default App;
