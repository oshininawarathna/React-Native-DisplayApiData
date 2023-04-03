import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import CardItems from './CardItems';
const Cards = () => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(
        'https://finalspaceapi.com/api/v0/character?',
      );
      const Data = await response.json();
      setItems(Data);
      setIsLoading(false);
      console.log(Data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainView}>
          <View>
            <Text style={styles.mainText}>Final Space Cast</Text>
            <CardItems items={items} isLoading={isLoading} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainView: {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  mainText: {
    margin: 50,
    marginTop: 130,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
export default Cards;
