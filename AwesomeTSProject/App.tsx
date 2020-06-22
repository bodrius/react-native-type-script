import React, { ReactElement } from 'react';
import { Provider } from "react-redux"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { AddTodo } from "./src/components/AddTodo"
import store from './src/redux/Store';
import { AsyncAddTodo } from "./src/components/AsyncAddTodo"


const Tab = createBottomTabNavigator();

const App: React.SFC = (): ReactElement => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HOME" component={AddTodo} />
          <Tab.Screen name="AsyncHome" component={AsyncAddTodo} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
