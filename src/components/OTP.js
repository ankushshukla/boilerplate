import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{backgroundColor: '#ededed'}}>
        <View>
          <Icon
            name="arrow-left"
            color={'black'}
            size={3 * vh}
            style={{
              marginLeft: 7 * vw,
              marginTop: 6 * vh,
              alignSelf: 'flex-start',
            }}
            onPress={() => this.props.navigation.goBack()}
          />

          <View style={{marginTop: 10 * vh}}>
            <Text
              style={{
                fontSize: 3 * vh,
                marginLeft: 15 * vw,
                marginTop: 3 * vh,
              }}>
              PHONE VERIFICATION
            </Text>
            <Text
              style={{
                fontSize: 2 * vh,
                marginLeft: 15.5 * vw,
                marginTop: 1 * vh,
                marginBottom: 8 * vh,
              }}>
              Enter OTP code here
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#f8f8f8',
              alignItems: 'center',
              height: 72 * vh,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: 90 * vw,
                marginTop: -3 * vh,
              }}>
              <View style={{alignItems: 'center'}}>
                <OTPInputView
                  style={{width: '70%', height: 20 * vh}}
                  pinCount={4}
                  // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                  // onCodeChanged = {code => { this.setState({code})}}
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={code => {
                    this.props.navigation.navigate('Home');
                    console.log(`Code is ${code}, you are good to go!`);
                  }}
                />
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#3b3b3b',
                    width: 50 * vw,
                    alignItems: 'center',
                    alignSelf: 'center',
                    padding: 1.6 * vh,
                    borderRadius: 1 * vh,
                    marginTop: 1 * vh,
                    marginBottom: 5 * vh,

                  }}>
                  <Text style={{color: '#fff', fontSize: 2.4 * vh}}>
                    VERIFY NOW
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default OTP;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderStyleBase: {
    width: 30,
  },

  borderStyleHighLighted: {
    borderColor: '#EC6C5E',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 3,
  },

  underlineStyleHighLighted: {
    borderColor: '#EC6C5E',
  },
});
