import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Counter extends Component {

  constructor (props) {
    super(props);
    // set state value dengan nilai = 0
    this.state = {
      value: 0
    }
  }

  render() {
    // fungsi untuk melakukan increment
    const increment = () => {
      this.setState({
        value: this.state.value + 1
      })
    }
    // fungsi untuk melakukan decrement
    const decrement = () => {
      this.setState({
        value: this.state.value - 1
      })
    }

    return (
      <View>
        {/* menampilkan nilai dari state */}
        <Text> {this.state.value} </Text>
        {/* button untuk increment dan decrement */}
        <Button onPress={increment} title={"+"} />
        <Button onPress={decrement} title={"-"} />
      </View>
    )
  }
}