/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import Images from '../images'

export class TopFiveElections extends Component {
  constructor(props) {
    super(props)
    this.totalVotes = 0

    this.state = {
      allParties: [],
      topParties: []
    }
    this.eachParty = this.eachParty.bind(this)
  }

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

    headerRight: <Button onPress={() => navigation.navigate('Home')} title="Vote" />,
    headerLeft: null
  })

  componentDidMount() {
    const url = 'https://isr-elections.herokuapp.com/api/parties/poll-status'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.state.allParties = Object.entries(data)
        this.state.allParties.sort((a, b) => {
          return b[1].currentVotes - a[1].currentVotes
        })
        this.state.allParties.forEach(element => {
          this.totalVotes += element[1].currentVotes
        })
        for (let i = 0; i < 5; ++i) {
          this.setState(prevState => ({
            topParties: [...prevState.topParties, this.state.allParties.shift()]
          }))
        }
      })
  }

  eachParty(party, i) {
    const party_name = party[0]
    const percentage = (party[1].currentVotes / this.totalVotes) * 100
    return (
      <View key={`party${i}`} style={{ top: 10 }}>
        <Image source={Images[party_name]} style={{ width: 80, height: 75, left: 30 }} />
        <View style={{ left: 100, bottom: 60, marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{party_name}</Text>
          <Text style={{ fontSize: 16 }}>{`${Math.round(percentage * 100) / 100}%`}</Text>
        </View>
      </View>
    )
  }

  render() {
    return <View>{this.state.topParties.map(this.eachParty)}</View>
  }
}
export default TopFiveElections
