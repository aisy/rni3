import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {

    const { title } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    padding: 20
  },
  title: {
    color: "white",
    fontSize: 20
  }
})

export default Header