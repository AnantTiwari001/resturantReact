import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Components/Header';
import MenuItem from '../Components/MenuItem';
import { useEffect, useState } from 'react';

const FirstPage = () => {
    const dishesJson= require('../assets/dishes.json')
    const[dishes, setDishes]= useState(dishesJson)
    useEffect(()=>{
        console.log('first Page');
        console.log(dishes[0].uid, dishes[0].desc);
    },[])
    const vegfilter=(type)=>{
        console.log('veg rocks anyway!');
        if(type=='all'){
            setDishes(dishesJson);
            return 0
        }
        let newValue= dishesJson.filter(item=>item.type==type);
        setDishes(newValue);
    }
    const ratingFilter=(rating)=>{
        console.log('rating', rating);
        let newValue= dishesJson.filter(item=> item.rating>= rating)
        console.log(newValue.length)
        setDishes(newValue)
    }
    return (
        <LinearGradient
            colors={['#b668f3', '#d2e8f5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <Header filterFunc={vegfilter} ratingFilterFunc={ratingFilter} />
            {/* <Button title='filter veg' onPress={()=>vegfilter('non-veg')} /> */}

            <ScrollView style={styles.itemsContainer} >
                {dishes.map((item, index) => (
                    <MenuItem key={index} dish={item} />
                ))}
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemsContainer: {
        padding: 20
    }
})

export default FirstPage;