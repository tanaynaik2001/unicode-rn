import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import Menu from 'react-native-vector-icons/FontAwesome';
const WeatherForecast = () => {
  const api = {
    key: 'd154b42b9e5990d9bc902e6536d962b1',
    base: 'https://api.openweathermap.org/data/2.5/',
  };

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter the name of city or country"
            value={query}
            onChangeText={(location) => setQuery(location)}
          />
          <View style={styles.btn}>
            <Button title="Submit" onPress={search} color="#282828" />
          </View>
        </View>
        {typeof weather.main != 'undefined' ? (
          <View style={styles.section}>
            <View style={styles.title}>
              <Text style={styles.name}>
                {weather.name},{weather.sys.country}
              </Text>
            </View>
            <View style={styles.weather}>
              <Text style={styles.temp}>{weather.main.temp}&#8451;</Text>
            </View>
            <View style={styles.type}>
              <Text style={styles.condition}>{weather.weather[0].main}</Text>
            </View>
          </View>
        ) : (
          <Text style={styles.ifText}>
            Welcome,here you can get weather of any city or country you want
          </Text>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
WeatherForecast.navigationOptions = (navData) => {
  return {
    headerTitle: 'Weather Forecast',
    headerLeft: (
      <Menu
        name="bars"
        size={23}
        color="#ccc"
        style={{marginLeft: 10}}
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    ),
  };
};
export default WeatherForecast;

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginVertical: 10,
  },
  btn: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  title: {
    marginRight: 180,
    marginVertical: 10,
  },
  name: {
    fontSize: 36,
    color: '#086f91',
  },
  weather: {
    marginVertical: 80,
  },
  temp: {
    fontSize: 37,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  type: {
    marginLeft: '60%',
  },
  condition: {
    fontSize: 30,
    color: '#a83c20',
  },
  section: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ifText: {
    marginVertical: '30%',
    fontSize: 25,
    textAlign: 'center',
  },
});
