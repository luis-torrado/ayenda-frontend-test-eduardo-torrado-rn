import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import styles from "./Style.js";
export default class FilterButton extends React.Component {
  render() {
    const { item, onChange, selectedHeroe } = this.props;
    return (
      <TouchableOpacity
        style={
          selectedHeroe == item.id
            ? styles.characterButtonSelected
            : styles.characterButton
        }
        onPress={() => {
          onChange(item.id);
        }}
      >
        <Image
          style={styles.characterImage}
          source={{
            uri: item.thumbnail.path + "/detail." + item.thumbnail.extension,
          }}
          resizeMode="contain"
        />
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          style={
            selectedHeroe == item.id
              ? styles.characterNameSelected
              : styles.characterName
          }
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }
}
