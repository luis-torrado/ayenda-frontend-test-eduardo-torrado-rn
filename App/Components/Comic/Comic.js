import React from "react";
import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import styles from "./Style.js";

export default class Comic extends React.Component {
  createAlert = () =>
    Alert.alert("Ups", "This comic will be available soon :)", [
      { text: "OK", onPress: () => {} },
    ]);

  render() {
    const { item } = this.props;
    const hasImage = !item.thumbnail.path.includes("image_not_available");
    return (
      <View style={styles.comicCard}>
        <View style={styles.imageContainer}>
          {hasImage ? (
            <Image
              style={styles.comicImage}
              source={{
                uri:
                  item.thumbnail.path + "/detail." + item.thumbnail.extension,
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          ) : (
            <Text>Image not available</Text>
          )}
        </View>
        <View style={styles.comicDescription}>
          <View style={styles.comicText}>
            <Text>{`id: ${item.id}`}</Text>
            <Text style={styles.comicTitle}>{item.title}</Text>
            <Text>{`${item.pageCount} pages`}</Text>
          </View>
          <View style={styles.comicPrice}>
            <TouchableOpacity
              style={styles.buttonPrice}
              onPress={this.createAlert}
            >
              <Text
                style={styles.buttonPriceText}
              >{`$ ${item.prices[0].price}`}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
