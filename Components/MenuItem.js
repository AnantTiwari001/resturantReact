import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuItem = ({ dish }) => {
    const navigation= useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('second-page',dish)} >
            <View style={{flex:1}} >
                <Text style={styles.title} >{dish.name}</Text>
                <Text style={styles.description} >{dish.desc}</Text>
            </View>
            <Image source={{uri:dish.uri}} style={styles.image}  />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 230,
        backgroundColor: 'tomato',
        borderRadius: 25,
        padding: 20,
        flexDirection:'row',
        marginBottom:17
    },
    title:{
        color:'#ffeeee',
        fontSize:18,
        marginBottom:7
    },
    description:{
        color:'#ffe0e0',
        fontSize:13
    },
    image:{
        flex:1,
        borderRadius:15
    }
})

export default MenuItem;