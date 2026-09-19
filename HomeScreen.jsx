import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import AllItems from './AllItems';
import CreateScreen from './CreateScreen';

const initialData = [
  { id: 1, name: 'Wheat', stock: 5, unit: 'kg' },
  { id: 2, name: 'Rice', stock: 12, unit: 'kg' },
  { id: 3, name: 'Sugar', stock: 8, unit: 'kg' },
  { id: 4, name: 'Salt', stock: 15, unit: 'kg' },
  { id: 5, name: 'Cooking Oil', stock: 6, unit: 'litre' },
  { id: 6, name: 'Lentils', stock: 10, unit: 'kg' },
  { id: 7, name: 'Flour', stock: 4, unit: 'kg' },
  { id: 8, name: 'Tea', stock: 7, unit: 'packets' },
  { id: 9, name: 'Coffee', stock: 3, unit: 'packets' },
  { id: 10, name: 'Biscuits', stock: 20, unit: 'packets' },
];

const HomeScreen = () => {
  const [view, setview] = useState(0);

  const [data, setdata] = useState(initialData);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DashBoard</Text>

      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? { backgroundColor: '#72C37AFF' } : null,
          ]}
          onPress={() => setview(0)}
        >
          <Text
            style={[
              styles.btnText,
              view === 0 ? { color: 'white' } : null,
            ]}
          >
            All Items
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 1 ? { backgroundColor: '#72C37AFF' } : null,
          ]}
          onPress={() => setview(1)}
        >
          <Text
            style={[
              styles.btnText,
              view === 1 ? { color: 'white' } : null,
            ]}
          >
            Low Stock
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 2 ? { backgroundColor: '#72C37AFF' } : null,
          ]}
          onPress={() => setview(2)}
        >
          <Text
            style={[
              styles.btnText,
              view === 2 ? { color: 'white' } : null,
            ]}
          >
            Create
          </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data} />}

      {view === 1 && (
        <AllItems
          data={data.filter((item) => item.stock < 20)}
        />
      )}

      {view === 2 && (
        <CreateScreen
          data={data}
          setdata={setdata}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: '4%',
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },

  button: {
    paddingVertical: 3.5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: '#72C37AFF',
  },

  btnText: {
    color: 'green',
    fontSize: 12,
  },
});