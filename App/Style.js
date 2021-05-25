import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  Header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: Dimensions.get("window").height * 0.07,
    backgroundColor: "red",
    justifyContent: "space-around",
    alignItems: "center",
  },
  filterButtons: {
    width: "100%",
    height: Dimensions.get("window").height * 0.09,
  },
  textInput: {
    width: "60%",
    backgroundColor: "#ffff",
    color: "#000",
    borderRadius: 8,
    padding: 2,
    paddingLeft: 8,
  },
  appTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffff",
  },
  listView: { height: Dimensions.get("window").height * 0.84 },
  loadingData: {
    height: Dimensions.get("window").height * 0.84,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
