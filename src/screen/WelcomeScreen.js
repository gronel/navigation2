import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <Button title="Sign In" style={{margin:10}} onPress={()=> this.props.navigation.navigate('SignIn')}></Button>
           <Button title="Sign Up" style={{margin:10}} onPress={()=> this.props.navigation.navigate('SignIn')}></Button>
      </View>
    );
  }
}

export default WelcomeScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
