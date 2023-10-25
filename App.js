import { StyleSheet, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/mealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTintColor: 'white',
          contentStyle:{ backgroundColor: '#3f2f25' },
          headerStyle: { backgroundColor: '#351401' },
        }} >
            <Stack.Screen name="MealsCategories" component={CategoriesScreen}  /> 
            <Stack.Screen 
              name="MealsOverview" 
              component={MealsOverviewScreen} 
              options={{
                title: 'All Categories',
              }}    
            />     
            <Stack.Screen 
              name="MealDetail" 
              component={MealDetailScreen} 
            />               
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
