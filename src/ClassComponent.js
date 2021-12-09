import React from 'react';
import { Component } from 'react';
import { FlatList, Text, ActivityIndicator, View } from 'react-native';

class MovieApp extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount() {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          isLoading: false,
          dataSource: result.movies
        })
      })
      .catch((e) => console.log(e));
  }

  render() {
    if (this.state.isLoading) {
      return (
        < View >
          <ActivityIndicator size="large" />
        </View >
      )
    } else {
      return (
        <FlatList
          data={this.state.dataSource}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item, index }) => (
            <View>
              <Text>{item.id}{item.title}{item.releaseYear}</Text>
            </View>
          )}
        />
      )
    }
  }
}

export default MovieApp;