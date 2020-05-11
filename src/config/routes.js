import Login from '../components/Login';
import OTP from '../components/OTP';

import { Header } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Routes = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    OTP: {
        screen: OTP,
        navigationOptions: {
            headerShown: false
        }
    }
    
}

export default Routes
