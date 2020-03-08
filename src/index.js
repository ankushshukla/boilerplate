import React, {Component} from 'react'
// import { Provider, connect } from 'react-redux'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Routes from './config/routes'
 


  
  const Navigator = createStackNavigator(Routes)
  const AppContainer=createAppContainer(Navigator)

// const navReducer = (state, action) => {
//     const newState = Navigator.router.getStateForAction(action, state)
//     return newState || state
// }

class App extends Component {
    
    render(){
        return (
            <AppContainer
                // navigation={addNavigationHelpers({
                //     dispatch: this.props.dispatch,
                //     state: this.props.nav
                // })}
            />
        )
    }
}

// const store = getStore(navReducer);
// const AppIndex = connect( state => ({ nav: state.nav }) )(App)

export default Index = () => {
    return (
        // <Provider>
            <App/>
        // </Provider>
    )
}