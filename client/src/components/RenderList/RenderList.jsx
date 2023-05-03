import React from 'react';
import { Text, View } from 'react-native';

const MyComponent = (input) => {
  data = input.data
  style = input.style
  const renderDataElements = () => {
    return data.map((item, index) => {
      return (
        <View key={index}>
          <Text style={style}>({item.class}, {item.confidence})</Text>
        </View>
      );
    });
  };

  return (
    <View style={{marginTop: 15}}>
      <Text style={style}>Alternatives:</Text>
      {renderDataElements()}
    </View>
  );
};

export default MyComponent;