import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native'
import { useEffect, useState } from "react";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import MenuItem from "../Components/MenuItem";



const SecondPage = () => {
    const navigation = useNavigation()
    const route = useRoute();
    const [quantity, setQuantity] = useState(1);
    const dishesJson = require('../assets/dishes.json')
    const [dishes, setDishes] = useState(dishesJson);
    const submitFunc = async(dishName) => {
        let newValue= dishesJson.filter(item=>item.name.toLowerCase().includes(dishName.toLowerCase())|| item.desc.toLowerCase().includes(dishName.toLowerCase()))
        setDishes(newValue);
    }
    useEffect(() => {
        submitFunc(route.params.ingredients[0]);
    }, [])
    return (
        <ScrollView style={{ flex: 1 }} >
            <Image source={{ uri: route.params.uri }} style={styles.image} />
            <View style={styles.aboutDish} >
                <Text style={styles.title} >{route.params.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25 }} >
                    <View style={{ flexDirection: 'row' }} >
                        <TouchableOpacity><AntDesign name="plus" size={24} color={'black'} onPress={() => setQuantity(pre => pre + 1)} /></TouchableOpacity>
                        <Text style={{ paddingHorizontal: 10, verticalAlign: 'middle', marginHorizontal: 7, fontSize: 16, alignItems: 'center' }} >{quantity}</Text>
                        <TouchableOpacity onPress={() => setQuantity(pre => pre > 1 && pre - 1)} ><AntDesign name="minus" size={24} color={'black'} /></TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 18 }} >Rs {quantity * route.params.price}</Text>
                </View>
                <View style={{ marginVertical: 15 }} >
                    <Text style={styles.subTitle} >Description</Text>
                    <Text style={{ opacity: 0.8 }} >{route.params.desc}</Text>
                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: 'purple', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 7 }} >
                        <Text style={{ fontSize: 16, color: 'white', verticalAlign: 'middle' }} >{route.params.type}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 12 }} >
                    <Text style={styles.subTitle}>Rating</Text>
                    <View style={{ flexDirection: 'row' }} >
                        {Array.from(Array(route.params.rating)).map((item, index) => (
                            <AntDesign name="star" size={24} color={'tomato'} key={index} />
                        ))}
                        {Array.from(Array(5 - route.params.rating)).map((item, index) => (
                            <AntDesign name="staro" size={24} color={'gray'} key={index} />
                        ))}
                    </View>
                </View>
                <View>
                    <Text style={styles.subTitle}>Ingredients</Text>
                    {route.params.ingredients.map((item, index) => (
                        <Text key={index} style={{ marginBottom: 3 }} >◙ {`${item}`}</Text>
                    ))}
                </View>
                <View style={{ marginVertical: 10 }} >
                    <Text style={styles.subTitle} >Reviews</Text>
                    {route.params.review.map((item, index) => (

                        <View key={index} style={{ marginVertical: 7 }} >
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image style={{ width: 60, aspectRatio: 1, borderRadius: 30 }} source={{ uri: item.profilePic }} />
                                <View style={{ marginHorizontal: 7 }}>
                                    <Text>{item.name}</Text>
                                    <Text style={{ opacity: 0.6, fontSize: 12 }} >{item.time}</Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 60 }} >
                                <Text>{item.review}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
            <View style={{backgroundColor:'white', paddingHorizontal:15}} >
                <Text style={{fontSize:18, color:'tomato'}}>Similar Product</Text>
                {dishes.map((item, index) => (
                    <MenuItem key={index} dish={item} />
                ))}
            </View>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()} >
                <Ionicons name="chevron-back" size={40} color="blue" />
            </TouchableOpacity>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backBtn: {
        position: 'absolute',
        top: 20,
        left: 3
    },
    aboutDish: {
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        // height: 600,
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: 300,
        zIndex: -5,
        transform: [{ scale: 1.2 }, { translateY: 20 }]
    },
    title: {
        fontSize: 21,
        textAlign: 'left',
        fontWeight: '400',
        marginBottom: 17
    },
    subTitle: {
        color: '#ffa000',
        fontSize: 18,
        marginBottom: 7
    }
})
export default SecondPage;