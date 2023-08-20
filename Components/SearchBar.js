import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
  } from "react-native";
  import TypeMsg from "./TypeMsg";
  
  const SearchBar = ({suggestions, searchText, setFunc, submitFunc}) => {  
    return (
      <View>
        <View style={styles.searchContainer}>
          <TypeMsg
            text={searchText}
            setFunction={(text) => setFunc(text)}
            placeholderText={"Seach your favorite food"}
            icon={"search"}
            submitFunc={submitFunc}
          />
        </View>
        <View style={{borderRadius:13, height:30}} >
          <ScrollView
            style={{flexDirection:'row', width:280}}
            horizontal={true}
            overScrollMode="never"
          >
            {suggestions.map((item, index) => (
                  <View style={{marginHorizontal:3}} key={index}>
                    <TouchableOpacity style={styles.searchItem} onPress={()=>setFunc(item)} >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
          </ScrollView>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {},
    searchContainer: {
      
    },
    labels: {
      flexDirection: "row",
    },
    labelItem: {
      marginHorizontal: 3,
    },
    searchItem:{
      backgroundColor:'#e2e8e0',
      paddingHorizontal:7,
      paddingVertical:3,
      borderRadius:10
    }
  });
  
  export default SearchBar;
  