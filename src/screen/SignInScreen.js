import React, { Component } from "react";
import { View, Text, Button,AsyncStorage,StyleSheet } from "react-native";

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

signIn = async() => {
    await AsyncStorage.setItem('userToke','ronel')

    this.props.navigation.navigate('App')
}

  render() {
    return (
      <View style={styles.container}>
        <Button title="Complete Sign In" onPress={this.signIn} />
      </View>
    );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
