import React from "react";
import _ from "lodash";
import axios from "axios";
import {
  Text,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Comic from "./Components/Comic/Comic.js";
import apiKey from "./Config/api.js";
import { characters } from "./Config/Constants";
import FilterButton from "./Components/FilterButton/FilterButton";
import styles from "./Style.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearch = _.debounce(this.updateSearch, 500);
    this.updateHeroe = _.debounce(this.updateHeroe, 500);
    this.state = {
      comics: [],
      searchText: "",
      selectedHeroe: null,
      latestText: "",
      latestHeroe: null,
      loading: false,
    };
  }

  onchangeInput = (value) => {
    this.setState({ searchText: value });
    this.updateSearch();
  };

  updateSearch = () => {
    this.getComics();
  };

  onchangeHeroe = (value) => {
    this.setState({ selectedHeroe: value });
    this.updateHeroe();
  };

  updateHeroe = () => {
    this.getComics();
  };

  async getComics() {
    const { searchText, selectedHeroe, comics, latestHeroe, latestText } =
      this.state;
    let newData = false;
    let params = {
      ...apiKey,
      limit: 20,
      offset: comics.length,
    };
    if (searchText !== "") {
      params.titleStartsWith = searchText;
      if (searchText !== latestText) {
        params.offset = 0;
        newData = true;
        this.setState({ loading: true });
      }
    }
    if (selectedHeroe !== null) {
      params.characters = selectedHeroe;
      if (selectedHeroe !== latestHeroe) {
        params.offset = 0;
        newData = true;
        this.setState({ loading: true });
      }
    }
    this.setState({ latestHeroe: selectedHeroe, latestText: searchText });
    await axios
      .get("https://gateway.marvel.com:443/v1/public/comics", {
        params,
      })
      .then((res) => {
        const fetchData = res.data;
        this.setState({
          comics: newData
            ? fetchData.data.results
            : [...comics, ...fetchData.data.results],
          loading: false,
        });
        if (newData && fetchData.length >0) {
          this.flatListRef.scrollToIndex({ animated: true, index: 0 });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    this.getComics();
  }

  render() {
    const { comics, searchText, loading, selectedHeroe } = this.state;
    return (
      <React.Fragment>
        <View style={styles.Header}>
          <TextInput
            style={styles.textInput}
            onChangeText={this.onchangeInput}
            value={searchText}
            placeholder="Search for a comic..."
          />
          <Text style={styles.appTitle}>MARVEL</Text>
        </View>
        <View style={styles.filterButtons}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={characters}
            renderItem={({ item }) => (
              <FilterButton
                item={item}
                onChange={this.onchangeHeroe}
                selectedHeroe={selectedHeroe}
              />
            )}
            keyExtractor={(item, index) => `${item.id.toString()} ${index}`}
          />
        </View>
        <View style={styles.listView}>
          {loading ? (
            <View style={styles.loadingData}>
              <Text>Loading...</Text>
              <ActivityIndicator color="red" size="large" />
            </View>
          ) : (
            <FlatList
              data={comics}
              renderItem={({ item }) => <Comic item={item} />}
              ref={(ref) => {
                this.flatListRef = ref;
              }}
              ListEmptyComponent={() => (
                <View style={styles.loadingData}>
                  <Text>Comics not found</Text>
                </View>
              )}
              keyExtractor={(item, index) => `${item.id.toString()} ${index}`}
              onEndReached={() => {
                this.getComics();
              }}
              onEndReachedThreshold={0.6}
            />
          )}
        </View>
      </React.Fragment>
    );
  }
}
