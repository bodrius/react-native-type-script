import React, { ReactElement } from 'react';
import {Provider} from "react-redux"
import { AddTodo } from "./src/components/AddTodo"
import store from './src/redux/Store';
import { NavBar } from './src/components/NavBar';


const App: React.SFC = (): ReactElement => {
  return (
    <Provider store={store}>
      <NavBar props={"Bogdan"}/>
      <AddTodo/>
      </Provider>
  );
};

export default App;
