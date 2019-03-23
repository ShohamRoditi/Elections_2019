import { createAppContainer, createStackNavigator } from 'react-navigation'
import TopFiveElections from './screens/TopFiveElections'
import Home from './screens/Home'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  TopFiveElections: { screen: TopFiveElections }
})

const App = createAppContainer(AppNavigator)

export default App
