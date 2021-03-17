import * as React from 'react';
import {LinearGradient} from "expo-linear-gradient";
import { Component } from "react";
import {Animated, Dimensions, Easing, Image, View, Text, TextInput, CheckBox, TouchableOpacity} from "react-native";
import {styles} from "./styles/style";

const {height, width} = Dimensions.get("screen");

export default class Register extends Component {
state = {
  screenAnimation: new Animated.Value(height),
  inputAnimation: new Animated.Value(0),
};

AnimateContainer = () => {
  Animated.timing(this.state.screenAnimation, {
    toValue: height / 3,
    duration: 1500,
    easing: Easing.elastic(1.3),
    //useNativeDriver: false,
  }).start();
};

AnimateInput = () => {
  Animated.timing(this.state.inputAnimation, {
    toValue: -height / 5,
    duration: 800,
  }).start();
};

reverseAnimateInput = () => {
  Animated.timing(this.state.inputAnimation, {
    toValue: 0,
    duration: 800,
  }).start();
};

componentDidMount() {
  this.AnimateContainer();
}
Animatedcontainer = {
  height: this.state.screenAnimation,
};
AnimatedInput = {
  transform: [
    {
      translateY: this.state.inputAnimation,
    },
  ],
};
  render() {
    return (
      <Animated.View  style = {[styles.container, this.Animatedcontainer]} >
          <LinearGradient 
          style={[styles.centerAlign, {height: "100%"}]} 
          colors={["#5ab568", "#5ab568"]} >
              <Image 
                source = {require("./assets/images/logo.png")}
                style = {styles.logo}>
              </Image>
              </LinearGradient>
              <View 
                style={[styles.centerAlign, 
                  {
                    marginTop: 2, 
                    backgroundColor: "rgba(200, 200,200, 0.9)",
                    height: height,
                  },
                ]}>
                <Animated.View style={[styles.inputContainer, this.AnimatedInput]}>
                  <Text style={{fontSize: 20, fontWeight: "bold", textAlign:"center"}}>
                    SIGN IN
                  </Text>
                  <View style={{marginTop: 30, marginBottom: 10}}>
                    <TextInput 
                      onBlur={() => this.reverseAnimateInput()}
                      onFocus={() => this.AnimateInput()} 
                      placeholder="username" 
                      style={styles.input}/>
                    <TextInput 
                      secureTextEntry={true}
                      placeholder="password" 
                      style={styles.input}/>

                  </View>
                  <View style={{ flexDirection: "row"}} >
                    <View style={{
                          flex: 0.5,
                          flexDirection: "row",
                          alignItems: "flex-start",
                        }}>
                      <CheckBox
                        style={{width: 20, height:20, borderColor: "#aaa"}}
                      />
                      <Text style={{ marginLeft: 8}}>Remember Password</Text>
                    </View>
                    <View style={{
                          flex: 0.5,
                          alignItems: "flex-end",
                        }}>
                      <TouchableOpacity>
                        <Text style={{color: "#5ab568"}}>Forgot Password</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style= {{alignItems: "center", marginTop: 20}}>
                    <TouchableOpacity>
                      <LinearGradient 
                        style={{ width: width / 1.25, padding: 15, borderRadius: 20}} 
                        colors={["#5ab568", "#5ab568"]}>
                        <Text 
                          style={{color: "#fff", 
                          textAlign: "center", 
                          fontWeight: "bold", 
                          fontSize: 16}}>Sign In</Text>
                      </LinearGradient> 
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      alignItems: "stretch",
                      marginVertical: 20,
                      flexDirection: "row",
                    }}  
                  >
                    <Text style={{marginLeft: 50, color: "#888"}}>Still Not Connected?</Text>
                    <TouchableOpacity  style={{marginLeft: 10}}>
                      <Text style={{color: "#5ab568"}}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                </Animated.View>
              </View>
              
          
      </Animated.View>
      
    );
  }
}