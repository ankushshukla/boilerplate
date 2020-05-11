import React,{Component} from 'react';
import { ScrollView, View, Text, Image, TextInput, TouchableOpacity,Dimensions,KeyboardAvoidingView,StyleSheet} from 'react-native';

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;


class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {};
    }
    render(){
        return (
            <View style={{backgroundColor:'#ededed'}}>
              <View>
                <Image source={require('../images/logos.png')} 
                  style={{alignSelf:"center",margin:9*vh}}
                />
                <View style={{backgroundColor:"#f8f8f8",alignItems:"center"}}>
                  <View style={{backgroundColor:"#c2c2c2",width:90*vw,marginTop:-10*vh}}>
                      <Text style={{fontSize:3*vh,paddingLeft:4*vh,marginTop:1*vh}}>SIGN IN</Text>
                      <Text style={{fontSize:1.8*vh,paddingLeft:4.5*vh,paddingTop:1*vh,paddingBottom:3*vh}}>Sign in with your phone number</Text>
                      <View style={{alignItems:"center"}}> 
                        <TextInput 
                          placeholder="Email/Phone"
                          style={{backgroundColor:"#ededed",padding:1.5*vh,width:75*vw}}
                        />
                        <TextInput 
                          placeholder="Email/Phone"
                          style={{backgroundColor:"#ededed",padding:1.5*vh,width:75*vw,marginTop:2*vh}}
                        />
                      </View>
                      <View>
                        <TouchableOpacity style={{alignItems:"flex-end"}}>
                          <Text style={{paddingRight:8*vw,paddingTop:1*vh}}>Retrive Your Account</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                          onPress={()=>{
                            this.props.navigation.navigate("OTP")
                          }}
                          style={{backgroundColor:'#3b3b3b',width:50*vw,alignItems:"center",alignSelf:"center",padding:1.6*vh,borderRadius:1*vh,margin:5*vh}}>
                          <Text style={{color:'#fff',fontSize:2.4*vh}}>NEXT</Text>
                        </TouchableOpacity>
                      </View>
                  </View>
                  <View style={{padding:5*vh,paddingLeft:2*vh}}>
                    <Text style={{textAlign:"center",marginTop:4*vh,marginBottom:3.8*vh}}>By Clicking You agree to our Term and Conditions. {'\u00A9'} Copyright2019 - 2019</Text>
                  </View>
                </View>
              </View>
            </View>
        );
    }
}

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
