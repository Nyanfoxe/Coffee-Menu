import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const appTitle = "My Cafe Menu"; 

  const [consoleLog, setConsoleLog] = useState("— tap a button to see output");

  const menuData = [
    { id: '1', name: 'Americano', category: 'Hot Drinks' },
    { id: '2', name: 'Latte', category: 'Hot Drinks' },
    { id: '3', name: 'Cappuccino', category: 'Hot Drinks' }, 
    { id: '4', name: 'Cheesecake', category: 'Desserts' },
    { id: '5', name: 'Brownie', category: 'Desserts' },
    { id: '6', name: 'Croissant', category: 'Pastries' },    
    { id: '7', name: 'Muffin', category: 'Pastries' },        
  ];

  const handleViewItem = (itemName) => {
    setConsoleLog(`Selected: ${itemName}`);
    console.log(`User clicked view for: ${itemName}`);
  };

  const renderMenuItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.categoryText}>{item.category}</Text>
      <Text style={styles.itemNameText}>{item.name}</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handleViewItem(item.name)}
      >
        <Text style={styles.buttonText}>View Item</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.phoneWrapper}>
        <Text style={styles.appHeader}>{appTitle}</Text>
        
        <FlatList
          data={menuData}
          renderItem={renderMenuItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
        />

        <View style={styles.consoleContainer}>
          <Text style={styles.consoleHeader}>console.log output</Text>
          <Text style={styles.consoleText}>{consoleLog}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneWrapper: {
    width: '90%',
    maxWidth: 380,
    height: '90%',
    backgroundColor: '#121212',
    borderRadius: 30,
    borderWidth: 6,
    borderColor: '#eaeaea',
    padding: 20,
    justifyContent: 'space-between',
  },
  appHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    marginTop: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    marginVertical: 10,
  },
  categoryText: {
    fontSize: 12,
    color: '#8e8e93',
    marginBottom: 2,
  },
  itemNameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#2c2c2e',
    borderWidth: 1,
    borderColor: '#48484a',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 13,
  },
  separator: {
    height: 1,
    backgroundColor: '#3a3a3c',
    marginVertical: 10,
  },
  consoleContainer: {
    backgroundColor: '#000000',
    borderRadius: 8,
    padding: 10,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#2c2c2e',
  },
  consoleHeader: {
    fontSize: 11,
    color: '#4cd964',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  consoleText: {
    fontSize: 12,
    color: '#4cd964',
    fontFamily: 'Platform' === 'ios' ? 'Courier' : 'monospace',
  },
});
