import React from 'react';
import { StyleSheet, AppRegistry, Text, View, Image, Button, TextInput, Alert } from 'react-native';

export default class App extends React.Component {

  onPressLearnMore = () => {
    console.log("Press it");
    Alert.alert("Thank you for pressing me");
  };
  state = {
    searchValue: "",
    repos: []
  };

  handleSearch = () => {
    const value = this.state.searchValue;
    //Alert.alert(this.state.searchValue);
    return fetch(`https://api.github.com/users/${value}/repos`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          repos: responseJson
        })
          .catch((error) => {
            console.error(error);
          });
      })
  };
  render() {
    return (
      <View style={styles.container}>
        <View >
          <Text> React Native Project</Text>
        </View>

        <Image
          style={{ width: 66, height: 58 }}
          source={{ uri: 'https://raw.githubusercontent.com/Michael-Antczak/ScotlandJS-React-Native-Workshop/master/media/heart.jpg' }}
        />
        <Text> Code Your Future</Text>
        <Button
          onPress={this.onPressLearnMore}
          title="Press me"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View>
          <TextInput
            onChangeText={text => this.setState({ searchValue: text })}
            style={styles.textbox} />
        </View>
        <View>
          <Button onPress={this.handleSearch} title="Search" />
        </View>
        <View style={s2.box}>
          <View style={s2.red}>
            <Text> 1</Text>
          </View>
          <View style={s2.white}>
            <Text> 2</Text>
          </View>
          <View style={s2.black}>
            <Text style={{ color: 'white' }}> 3</Text>
          </View>
        </View>
        <View >
          {this.state.repos.map((repo) => {
            return <Text>{repo.name} </Text>
          })}
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textbox: {
    width: 150,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
  }
});
const s2 = StyleSheet.create({
  box: {
    width: 250,
    height: 150,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: "row"

  },
  red: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',

  },

  white: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,

  },

  black: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    //color: 'white'
  }
});

