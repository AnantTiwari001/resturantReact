import {
    View,
    Text,
    Touchable,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    Button,
    TouchableOpacity
  } from "react-native";
  import TypeMsg from "./TypeMsg";
  import { useState } from "react";
  
  const SearchBar = ({suggestions, searchText, setFunc}) => {
    // const [searchText, setSearchText] = useState(null);
    const trendingNrecent = ["anime0", "anime1", "anime2", "anime3", "anime4"];
    const allAnime = [
      "Attack on Titan",
      "Bleach",
      "Cowboy Bebop",
      "Death Note",
      "Elfen Lied",
      "Fullmetal Alchemist",
      "Gintama",
      "Hunter x Hunter",
      "Inuyasha",
      "JoJo's Bizarre Adventure",
      "K-On!",
      "Love Live! School Idol Project",
      "My Hero Academia",
      "Naruto",
      "One Piece",
      "Psycho-Pass",
      "Quanzhi Gaoshou",
      "Re:Zero − Starting Life in Another World",
      "Sword Art Online",
      "Tokyo Ghoul",
      "Usagi Drop",
      "Violet Evergarden",
      "Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!",
      "xxxHOLiC",
      "Your Lie in April",
      "Zankyou no Terror",
    ];
  
    return (
      <View>
        <View style={styles.searchContainer}>
          <TypeMsg
            text={searchText}
            setFunction={(text) => setFunc(text)}
            placeholderText={"Seach your favorite food"}
            icon={"search"}
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
                    <TouchableOpacity style={styles.searchItem} >
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
  