import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const ListItem = ({item, checkSolution}) => {
  const [code, setCode] = useState('');

  const onChange = textValue => setCode(textValue);

  return (
    <View style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <View style={styles.outputView}>
          <TextInput
            placeholder="0000"
            placeholderTextColor="#aaa"
            style={styles.input}
            onChangeText={onChange}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              checkSolution(item.id, code);
              onChange();
            }}>
            <Icon name="flag-checkered" size={20} style={{marginRight: 10}} />
            <Text style={styles.btnText}>Code für {item.text} prüfen</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.outputText}>{item.output}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f6f6f6',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  listItemView: {
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 22,
    color: '#2f2f2f',
  },
  outputView: {
    alignItems: 'center',
    textAlign: 'center',
  },
  outputText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#3f3f3f',
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#aaa',
    height: 40,
    width: 100,
    textAlign: 'center',
    padding: 0,
    fontSize: 16,
    marginBottom: 10,
    color: '#3f3f3f',
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
    marginBottom: 10,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ListItem;
