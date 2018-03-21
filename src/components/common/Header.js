// import a library to help create a component

import React from 'react';
import { Text, View } from 'react-native';

// create a component

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
      <View style={viewStyle}>
        <Text style={textStyle}> {props.headerText} </Text>
      </View>
    );
  };

const styles = {
  viewStyle: {
    backgroundColor: '#3462ad',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 23,
    color: '#fff'
  }
};
// make the component available to other parts of app

export { Header };
