import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

const Users = () => {
  const firstName_key = 'firstName_key';
  const lastName_key = 'lastName_key';
  const emailId_key = 'emailId_key';
  const number_key = 'number_key';
  const dob_key = 'dob_key';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [number, setNumber] = useState('');
  const [dob, setDob] = useState('');

  const onSubmit = async () => {
    try {
      await AsyncStorage.setItem(firstName_key, firstName);
      await AsyncStorage.setItem(lastName_key, lastName);
      await AsyncStorage.setItem(emailId_key, emailId);
      await AsyncStorage.setItem(number_key, number);
      await AsyncStorage.setItem(dob_key, dob);
      alert('Data successfully saved');
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      const firstNameData = await AsyncStorage.getItem(firstName_key);
      if (firstNameData !== null) {
        setFirstName(firstNameData);
      }
      const lastNameData = await AsyncStorage.getItem(lastName_key);
      if (lastNameData !== null) {
        setLastName(lastNameData);
      }
      const emailIdData = await AsyncStorage.getItem(emailId_key);
      if (emailIdData !== null) {
        setEmailId(emailIdData);
      }
      const mobileNoData = await AsyncStorage.getItem(number_key);
      if (mobileNoData !== null) {
        setNumber(mobileNoData);
      }
      const dobData = await AsyncStorage.getItem(dob_key);
      if (dobData !== null) {
        setDob(dobData);
      }
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert('Storage successfully cleared');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <KeyboardAvoidingView>
      <View style={styles.inputContainer}>
        <View style={styles.fieldContainer}>
          <Text style={styles.title}>First name: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            placeholderTextColor="#888"
            keyboardType="default"
            numberOfLines={1}
            value={firstName}
            onChangeText={(firstNameData) => setFirstName(firstNameData)}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.title}>Last name: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your last name"
            placeholderTextColor="#888"
            value={lastName}
            onChangeText={(lastNameData) => setLastName(lastNameData)}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.title}>Email ID: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email "
            placeholderTextColor="#888"
            value={emailId}
            onChangeText={(emailIdData) => setEmailId(emailIdData)}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.title}>Date Of Birth: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your DOB "
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={dob}
            onChangeText={(dobData) => setDob(dobData)}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.title}>Mobile Number: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number "
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={number}
            onChangeText={(mobileNoData) => setNumber(mobileNoData)}
          />
        </View>

        <View style={styles.btn}>
          <Button color="#282828" title="Submit" onPress={onSubmit} />
          <Button title="Clear" color="#282828" onPress={clearStorage} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

Users.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Info',
    headerLeft: (
      <Icon
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

export default Users;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: '20%',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  fieldContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  input: {
    fontSize: Dimensions.get('window').width >= 380 ? 19 : 13,
    fontFamily: 'OpenSans-Light',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
});
