import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';

const Header = ({ filterFunc, ratingFilterFunc, searchText, searchFunc, submitFunc, suggestions }) => {
    const vegList = ['all', 'veg', 'non-veg']
    const [filterVisible, setFilterVisible] = useState(false);
    const [vegOption, setVegOption] = useState(0);
    const [rating, setRating] = useState(1)

    useEffect(() => {
        filterFunc(vegList[vegOption])
    }, [vegOption])
    useEffect(()=>{
        ratingFilterFunc(rating)
    },[rating])
    return (
        <View style={styles.container}>
            <View style={{ alignSelf: 'center' }} >
                <Text style={styles.title} >Your Food Place</Text>
                <SearchBar suggestions={suggestions} searchText={searchText} setFunc={searchFunc} submitFunc={submitFunc} />
            </View>
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.btn} onPress={() => setFilterVisible(pre => !pre)}>
                        <Text style={{ verticalAlign: 'middle' }}>Filter</Text>
                    </TouchableOpacity>
                </View>
                {
                    filterVisible && (<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}  >
                            <Text style={{ color: 'white', marginRight: 11 }}>Veg/ Non-veg</Text>
                            <TouchableOpacity style={styles.btn} onPress={() => { vegOption === 2 ? setVegOption(0) : setVegOption(pre => pre + 1); }}>
                                <Text>{vegList[vegOption]}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}  >
                            <Text style={{ color: 'white', marginRight: 11 }}>Rating</Text>
                            <TouchableOpacity style={styles.btn} onPress={() => rating == 5 ? setRating(1) : setRating(pre => pre + 1)} >
                                <Text>{rating}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>)
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: 'rgba(100,10,250,0.6)',
        position: 'relative'
    },
    title: {
        fontSize: 17,
        color: 'white',
        opacity: 0.9,
        marginBottom: 15,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: 'white',
        paddingHorizontal: 7,
        paddingVertical: 5,
        borderRadius: 12,
        marginVertical: 4
    }
})

export default Header;