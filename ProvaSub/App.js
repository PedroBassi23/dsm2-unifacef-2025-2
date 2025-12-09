import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './src/Inicio';
import CompDia from './src/CompDia';
import CompSemana from './src/CompSemana';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Compromissos do dia" component={CompDia} />
        <Stack.Screen name="Compromissos da semana" component={CompSemana} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
