import React, {Component} from 'react'
// import { Provider, connect } from 'react-redux'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from 'react-native-splash-screen';
import RNBootSplash from "react-native-bootsplash";
import Routes from './config/routes'
 


  
  const Navigator = createStackNavigator(Routes)
  const AppContainer=createAppContainer(Navigator)


class App extends Component {
    

    componentDidMount(){
        RNBootSplash.hide({ duration: 250 });
    }
    render(){
        return (
            <AppContainer/>
        )
    }
}


export default Index = () => {
    return (
            <App/>
    )
}