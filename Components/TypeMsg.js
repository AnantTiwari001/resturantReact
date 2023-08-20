import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
  } from "react-native";
  import { FontAwesome5 } from "@expo/vector-icons";
  
  const TypeMsg = ({ text, setFunction, placeholderText, icon, submitFunc, iconPress }) => {
    return (
      <View style={[styles.container]}>
        <TouchableOpacity style={[ {height:25}, {justifyContent:'center', alignItems:'center'}]} onPress={iconPress} >
          <FontAwesome5 name={icon} size={20} color={"gray"}/>
        </TouchableOpacity>
        <TextInput
          style={[{flex:1,height:25, fontSize:17,paddingLeft:15}]}
          onChangeText={(text) => setFunction(text)}
          value={text}
          placeholder={placeholderText}
          placeholderTextColor="rgba(0,0,0,0.5)"
          underlineColorAndroid="transparent"
          onSubmitEditing={()=>{(text !='' && submitFunc())}}
          blurOnSubmit={false}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      height: 45,
      padding: 15,
      borderRadius: 25,
      backgroundColor: "#f7f7f7",
      marginBottom:10,
      marginHorizontal:10,
      marginTop: 8,
    },
  });
  
  export default TypeMsg;
  