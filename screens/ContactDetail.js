import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ContactDetail = (props) => {
  const mobileNumber = props.navigation.getParam('mobileNumber');
  const name = props.navigation.getParam('name');
  const firstLetter = props.navigation.getParam('firstLetter');
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.initial}>{firstLetter}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.number}>{mobileNumber}</Text>
    </View>
  );
};

ContactDetail.navigationOptions = {
  headerTitle: 'Contact Details',
};
export default ContactDetail;

const styles = StyleSheet.create({
  detailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 20,
    marginVertical: 10,
  },
  initial: {
    fontSize: 20,
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    fontWeight: 'bold',
    color: '#f2f2f2',
  },
});
