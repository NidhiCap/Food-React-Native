import { StyleSheet, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/mealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: 'white',
          sceneContainerStyle:{ backgroundColor: '#3f2f25' },
          headerStyle: { backgroundColor: '#351401' },
          drawerContentStyle: { backgroundColor: '#3f2f25'},
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#351401',
          drawerActiveBackgroundColor: '#e4baa1',
        }}
      >
        <Drawer.Screen 
          name="Categories" 
          component={CategoriesScreen} 
          options={{
            title: 'All Categories',
            drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size}/>
          }}
        />
        <Drawer.Screen name="Favoriters" component={FavoritesScreen}
          options={{
            drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size}/>
          }}
        />
      </Drawer.Navigator>
    );
}

export default function App() {

  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTintColor: 'white',
          contentStyle:{ backgroundColor: '#3f2f25' },
          headerStyle: { backgroundColor: '#351401' },
        }} >
            <Stack.Screen 
              name="Drawer" 
              component={DrawerNavigator}  
              options={{headerShown: false}}
            /> 
            <Stack.Screen 
              name="MealsOverview" 
              component={MealsOverviewScreen}                 
            />     
            <Stack.Screen 
              name="MealDetail" 
              component={MealDetailScreen} 
              options={{
                title: 'About the meal',
              }}
            />               
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
