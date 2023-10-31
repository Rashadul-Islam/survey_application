import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Form from './screens/Form';
import Home from './screens/Home';
import {RootParamList} from './utils/navigationtype';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator<RootParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        {/* <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        /> */}
        <Stack.Screen
          name="form"
          options={{headerShown: false}}
          component={Form}
        />
        <Stack.Screen
          name="home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="profile"
          options={{headerShown: false}}
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
