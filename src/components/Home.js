import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Share,
  Animated,
  FlatList,
  ImageBackground
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";


const {width, height} = Dimensions.get('window');
const theme = {
    sizes : {
        base: 16,
        font: 14,
        padding: 36,
        margin: 25,
        title: 24,
        radius: 12,
      },
      colors : {
        black: '#000',
        white: '#FFF',
        gray: '#DCE0E9',
        caption: '#BCCCD4',
        active: '#007BFA',
      }
}

class Home extends Component {
  static navigationOptions = {
    title: 'Emergency',
    headerStyle: {
      backgroundColor: '#0652d4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Muli-Medium',
    },
  };
  constructor(props) {
    super(props);
    this.state={
        options: [
            {
                _id: 1,
                name: "AMBULANCE",
                img: require("../images/car.png"),
            },
            {
              _id: 2,
              name: "HOSPITAL",
              img: require("../images/hospital.png"),
            },
            {
              _id: 3,
              name: "PHARMACY",
              img: require("../images/drug.png"),
          },
            {
                _id: 4,
                name: "PARAMEDICS",
                img: require("../images/doctor.png"),
            },
            {
                _id: 5,
                name: "DIAGONSTICS",
                img: require("../images/stethoscope.png"),
            },
            {
                _id: 6,
                name: "BLOOD BANK",
                img: require("../images/blood-donation.png"),
            },
            
        ]
    }
  }
  
    
  
  componentDidMount(){
    LocationServicesDialogBox.checkLocationServicesIsEnabled({
      message: "<h2>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
      ok: "YES",
      cancel: "NO",
      enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
      showDialog: true, // false => Opens the Location access page directly
      openLocationServices: true, // false => Directly catch method is called if location services are turned off
      preventOutSideTouch: false, //true => To prevent the location services popup from closing when it is clicked outside
      preventBackClick: false, //true => To prevent the location services popup from closing when it is clicked back button
      providerListener: true // true ==> Trigger "locationProviderStatusChange" listener when the location state changes
    }).then(function(success) {
      // success => {alreadyEnabled: true, enabled: true, status: "enabled"} 
         if(success.enabled==true){
          Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
         }
        }
    ).catch((error) => {
      console.log(error.message);
    });
  }
  renderOptions = () => {
    return (
            <FlatList
                horizontal={false}
                numColumns={2}
                pagingEnabled
                scrollEnabled
                showsVerticalScrollIndicator={false}
                style={[ styles.shadow], { overflow: 'visible', marginTop: height*0.10 }}
                data={this.state.options}
                keyExtractor={(item, index) => `${item._id}`}
                renderItem={({ item, index }) =>{
                    return(
                    <TouchableOpacity
                      onPress={()=>{
                        if(item.name=='AMBULANCE'){
                          this.props.navigation.navigate('BookingMap') 
                        }
                        else if(item.name=='PARAMEDICS'){
                          this.props.navigation.navigate('Parademics') 
                        }
                        else if(item.name=='HOSPITAL'){
                          this.props.navigation.navigate('DoctorDetails') 
                        }
                        else if(item.name=='PHARMACY'){
                          this.props.navigation.navigate('OrderMedicine') 
                        }
                        else if(item.name=='DIAGONSTICS'){
                          this.props.navigation.navigate('Diagnostic') 
                        }else{
                          console.log("Wait fot Design")
                        }
                        
                      }}
                    >
                        <View style={[
                            styles.flex, styles.column, styles.recommendation, 
                            { 
                            marginLeft: height*0.02
                            }
                        ]}>
                            <View style={[styles.flex1, { justifyContent: 'center', alignItems:"center"  }]}>
                                <Image 
                                key={item.img}
                                source={ item.img}
                                // uri=
                                style={{height: height*0.05, width: height*0.05, alignSelf: "center"}}
                                />
                                <Text style={{fontFamily: "Muli-Bold", fontSize: height*0.02}}>
                                    {item.name}
                                </Text>
                            </View>   
                        </View>
                    </TouchableOpacity>
                    )
                }}
            />
        
    );
  }

  render() {
    return (
      <ImageBackground
        source={require('../images/background.jpg')}
        style={styles.imageBackground}>
        <View>
          <ScrollView style={{alignSelf: "center", height: height}}>
            <View>
            <View
            style={{alignSelf: "center", marginTop: height*0.1}}
            >
                <Image 
                    source={require('../images/ambulance2.png')}
                    style={{height: height*0.09, width: height*0.09, alignSelf: "center"}}
                />
                <Text style={{fontSize: height*0.035,fontFamily: "Muli-Bold", color: 'white'}}>
                    HANUMAN
                </Text>
            </View>
            
            {this.renderOptions()}
            </View> 
            
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    imageBackground: {
        width: width,
        height: height,
        flex: 1,
        // marginTop: Constants.statusBarHeight,
        justifyContent: "space-between"
      },
 
  icon: {
    width: 24,
    height: 24,
  },
  flex: {
    flex: 1/2,
  },
  flex1: {
    flex: 1,
  },
  recommendation: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    backgroundColor: theme.colors.white,
    height: height*0.15,
    overflow: 'hidden',
    borderRadius: theme.sizes.radius,
    marginVertical: height*0.008,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  column: {
    flexDirection: 'column'
  },
});

export default Home;
