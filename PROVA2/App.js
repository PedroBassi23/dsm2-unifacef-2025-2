import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './src/Inicio';
import MeusCompromissos from './src/MeusCompromissos';
import CompromissosEquipe from './src/CompromissosEquipe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="MeusCompromissos" component={MeusCompromissos} />
        <Stack.Screen name="CompromissosEquipe" component={CompromissosEquipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
