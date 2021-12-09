import React from 'react';
import { FlatList, Text, ActivityIndicator, View } from 'react-native';
import { useState, useEffect } from 'react';

function FunctionComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [myArr, updateMyArr] = useState([]);

  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((result) => {
        updateMyArr(result.movies);
      })
      .catch((e) => console.log(e));
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) :
        <FlatList
          data={myArr}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item, index }) => (
            <View>
              <Text>{item.id}{item.title}{item.releaseYear}</Text>
            </View>
          )}
        />
      }
    </View>
  )
}

export default FunctionComponent;