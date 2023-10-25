import { StyleSheet, View, Text, Image, ScrollView, Button} from 'react-native';
import { MEALS } from '../data/dummy-data';
import {useLayoutEffect} from 'react';;

import MealDetails from '../components/MealDetails';
import Subtitle from '../components/Subtitle';
import List from '../components/List';
import IconButton from '../components/IconButton';

function MealDetailScreen({route, navigation}) {
    const mealId = route.params.mealId;

    const selectMeal= MEALS.find((meal)=>meal.id === mealId);
   function headerButtenPressHandler() {
    console.log('Pressed    ..');
   }
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerRight: () =>{
                //return <Button title='tap m' onPress={headerButtenPressHandler}  />
                return <IconButton icon='star' color='white' onPress={headerButtenPressHandler}/>;
            }
        })
    },[navigation, headerButtenPressHandler])

    return (
        <ScrollView style={ styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectMeal.imageUrl}}/>
            <Text style={styles.title}>{selectMeal.title}</Text>
            <MealDetails 
                duration={selectMeal.duration} 
                affordability={selectMeal.affordability}
                complexity= {selectMeal.complexity} 
                textStyle={selectMeal.detailText}
            />
            <View style={styles.listOutterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectMeal.steps}/>   
                </View>  
            </View>                    
        </ScrollView>

    );
}

export default MealDetailScreen;

const styles= StyleSheet.create({
    rootContainer:  {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        margin: 0,
    },
    detailText: {
        color: 'white',
    },
    listOutterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },

});