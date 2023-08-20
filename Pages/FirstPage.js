import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Components/Header';
import MenuItem from '../Components/MenuItem';
import { useEffect, useState } from 'react';

const FirstPage = () => {
    const dishesJson = require('../assets/dishes.json')
    const [dishes, setDishes] = useState(dishesJson);
    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState(["Butter Paneer", "Masala Dosa", "Paneer Tikka"])
    const submitFunc = async () => {
        let newValue = dishesJson.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.desc.toLowerCase().includes(searchText.toLowerCase()))
        setDishes(newValue);
    }
    useEffect(() => {
        let newValue = dishesJson.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.desc.toLowerCase().includes(searchText.toLowerCase()))
        const tempArrary = []
        newValue.map((item, index) => tempArrary.push(item.name))
        if (searchText == '') {
            setSuggestions(["Butter Paneer", "Masala Dosa", "Paneer Tikka"])
        } else {
            setSuggestions([...tempArrary]);
        }
    }, [searchText])
    const vegfilter = (type) => {
        if (type == 'all') {
            setDishes(dishesJson);
            return 0
        }
        let newValue = dishesJson.filter(item => item.type == type);
        setDishes(newValue);
    }
    const ratingFilter = (rating) => {
        let newValue = dishesJson.filter(item => item.rating >= rating)
        setDishes(newValue)
    }
    return (
        <LinearGradient
            colors={['#b668f3', '#d2e8f5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <Header filterFunc={vegfilter} ratingFilterFunc={ratingFilter} searchText={searchText} searchFunc={setSearchText} submitFunc={submitFunc} suggestions={suggestions} />

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