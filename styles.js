/* eslint-disable no-undef */
import { StyleSheet } from 'react-native'

export default (styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  card: {
    height: 180,
    width: '49%',
    marginBottom: 30
  }
}))
