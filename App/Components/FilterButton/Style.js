import { StyleSheet } from "react-native";

export default StyleSheet.create({
  characterButton: {
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    width: 150,
    borderRadius: 10
  },
  characterButtonSelected: {
    backgroundColor: "#7C7C7C",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    width: 150,
    borderRadius: 10
  },
  characterImage:{
    width: "30%",
    height: "90%",
    borderRadius: 50/2,
    overflow: "hidden",
    marginLeft:5 
  },
  characterName:{
    width:"60%",
    fontWeight:"bold",
    fontSize:15,
    color:"#000",
  },
  characterNameSelected:{
    width:"60%",
    fontWeight:"bold",
    fontSize:15,
    color:"#fff",
  }
});
