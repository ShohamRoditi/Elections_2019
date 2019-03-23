import React, { Component } from 'react';
import { View, Button, ScrollView } from 'react-native';
import PartyList from './PartyList';

export class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'בחירות ישראל 2019',

    headerStyle: {
      backgroundColor: '#000000'
    },

    headerTitleStyle: {
      fontSize: 25,
      left: 75,
      color: '#52B9EB'
    },

    headerRight: <Button onPress={() => navigation.navigate('TopFiveElections')} title="Status" />
  })

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <PartyList key={1} />
      </ScrollView>
    </View>
    )
  }
}
export default Home