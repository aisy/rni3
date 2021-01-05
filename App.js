import React, { Component } from 'react';
import { View, text, StyleSheet } from 'react-native';

// import Header dari folder components, Header setelah import akan menjadi nama component
import Header from './src/components/Header'
import Counter from './src/components/Counter'

export default class App extends Component {
  render() {
    return (
      <View>
        {/* Lalu panggil di dalam return dengan menggunakan Tag nama component */}
        <Header title={"Hacktiv8"} />
        <Counter />
      </View>
    );
  }
}