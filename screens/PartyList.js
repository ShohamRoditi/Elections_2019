/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Party from './Party'
import { View } from 'react-native'
import styles from '../styles'

class PartyList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      parties: []
    }

    this.eachParty = this.eachParty.bind(this)
  }

  componentDidMount () {
    const url = 'https://isr-elections.herokuapp.com/api/parties'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        data.parties.map(json => {
          this.setState(prevState => ({
            parties: [
              ...prevState.parties, {
                id: json.id
              }]
          }))
          return null
        })
      })
  }

  eachParty (party, i) {
    return (<Party key={ `party${i}` } party_name={ party.id } ></Party>)
  }

  render () {
    return (
      <View style={styles.list} className = "PartyList">
        { this.state.parties.map(this.eachParty) }
      </View>
    )
  }
}
export default PartyList
