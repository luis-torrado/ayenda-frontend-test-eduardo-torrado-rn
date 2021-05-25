import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  comicCard: {
    margin: 15,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 3,
  },
  imageContainer: {
    height: 250,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7C7C7C",
  },
  comicImage: { height: "90%", width: "100%" },
  comicDescription: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  comicText: { width: "70%" },
  comicTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
    marginTop: 10,
  },
  comicPrice: { width: "30%", display: "flex", justifyContent: "flex-end", marginBottom:15 },
  buttonPrice: {
    backgroundColor: "red",
    width: "80%",
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  buttonPriceText: { color: "white" },
});
