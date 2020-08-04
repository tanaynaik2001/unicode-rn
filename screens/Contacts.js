import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  PermissionsAndroid,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Menu from 'react-native-vector-icons/FontAwesome';
import Contactss from 'react-native-contacts';

const Contacts = (props) => {
  const selectedName = (initial, displayName, number) => {
    props.navigation.navigate({
      routeName: 'ContactDetails',
      params: {
        firstLetter: initial,
        name: displayName,
        mobileNumber: number,
      },
    });
  };
  const [contacts, setContacts] = useState([]);
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
    title: 'Contacts',
    message: 'This app would like to view your contacts',
    buttonPositive: 'Please accept bare mortal',
  }).then(() => {
    Contactss.getAll((err, response) => {
      if (err === 'denied') {
        console.warn('Permission to access contacts got denied');
      } else {
        //console.log(response);
        setContacts(response);
      }
    });
  });

  return (
    <View>
      <FlatList
        data={contacts.sort((a, b) =>
          a.displayName.localeCompare(b.displayName),
        )}
        keyExtractor={(itemData) => itemData.rawContactId}
        renderItem={(itemData) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                selectedName(
                  itemData.item.displayName[0],
                  itemData.item.displayName,
                  itemData.item.phoneNumbers[0].number,
                );
              }}
              style={styles.nameContainer}>
              <Text style={styles.name}>{itemData.item.displayName}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
Contacts.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Contacts',
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
export default Contacts;

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,

    marginVertical: 7,
  },
});
