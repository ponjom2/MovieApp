import React from 'react';
import { FlatList, Text, ActivityIndicator, View } from 'react-native';
import { useState, useEffect } from 'react';
import style from './Styles';

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
    }, 1000);
  })

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) :
        <FlatList
          data={myArr}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item, index }) => (
            <View style={style.row}>
              <Text style={[style.text, style.left]}>{item.id}</Text>
              <Text style={style.text}>{item.title}</Text>
              <Text style={[style.text, style.right]}>{item.releaseYear}</Text>
            </View>
          )}
        />
      }
    </View>
  )
}

export default FunctionComponent;