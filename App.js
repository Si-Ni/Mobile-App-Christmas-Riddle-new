//keytool password = x12345x

import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const items = [
    {id: 0, text: 'Rätsel 1', output: ''},
    {id: 1, text: 'Rätsel 2', output: ''},
    {id: 2, text: 'Rätsel 3', output: ''},
    {id: 3, text: 'Rätsel 4', output: ''},
    {id: 4, text: 'Rätsel 5', output: ''},
  ];

  const checkSolution = (id, input) => {
    for (let i = 0; i < items.length; i++) {
      items[i].output = '';
    }
    switch (id) {
      case 0:
        if (input == '0528') {
          rightInput(id);
        } else {
          wrongInput(id);
        }
        break;
      case 1:
        if (input == '0423') {
          rightInput(id);
        } else {
          wrongInput(id);
        }
        break;
      case 2:
        if (input == '3163') {
          rightInput(id);
        } else {
          wrongInput(id);
        }
        break;
      case 3:
        if (input == '3992') {
          rightInput(id);
        } else {
          wrongInput(id);
        }
        break;
      case 4:
        if (input == '8796') {
          rightInput(id);
        } else {
          wrongInput(id);
        }
        break;
    }
  };

  const rightInput = id => {
    items[id].output = 'Richtig! Glückwunsch du hast das Rätsel gelöst';
  };

  const wrongInput = id => {
    items[id].output = 'Der eingegebene Code ist leider falsch';
  };

  return (
    <View style={styles.container}>
      <Header title="Lenas Weihnachtsrätsel" />
      <ScrollView keyboardDismissMode="none">
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem item={item} checkSolution={checkSolution} />
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
