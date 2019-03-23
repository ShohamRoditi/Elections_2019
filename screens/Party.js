/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Images from '../images'
import styles from '../styles'
import Dialog from 'react-native-dialog'

class Party extends Component {
  constructor (props) {
    super(props)

    this.state = {
      party_name: props.party_name,
      dialogVisible: false
    }
    this.handleVote = this.handleVote.bind(this)
    this.handleOk = this.handleOk.bind(this)
  }

  handleVote () {
    fetch(`https://isr-elections.herokuapp.com/api/parties/vote/${this.state.party_name}`, {
      method: 'POST'
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ dialogVisible: true })
        }
      })
      .catch(err => console.log(err))
  }

  handleOk () {
    this.setState({ dialogVisible: false })
  }

  render () {
    return (
      <View style = {styles.card}>
        <TouchableOpacity onPress={this.handleVote}>
          <Image source={Images[this.props.party_name]} style={{ width: '100%', height: '100%' }} />
          <Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>Vote Confirmed</Dialog.Title>
            <Dialog.Description>
              {`You Have Voted to ${this.props.party_name}`}
            </Dialog.Description>
            <Dialog.Button label="Ok" onPress={this.handleOk}/>
          </Dialog.Container>
        </TouchableOpacity>
        <Text style = {{ textAlign: 'center', fontSize: 18 }}>{this.state.party_name}</Text>
      </View>
    )
  }
}
export default Party
