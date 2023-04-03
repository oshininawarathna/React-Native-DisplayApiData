import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

const CardItems = ({items, isLoading}) => {
  return (
    <View>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
          <FlatList
            data={items}
            renderItem={({item}) => {
              return (
                <View style={styles.cardView}>
                  <View style={styles.itemView}>
                    <View>
                      <Image
                        style={styles.imageView}
                        resizeMode="cover"
                        source={{uri: item.img_url}}
                      />
                    </View>
                    <View style={styles.itemTextView}>
                      <Text>Name : {item.name}</Text>
                      <Text>Gender : {item.gender}</Text>
                      <Text> Status : {item.status}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 100,
  },
  cardView: {
    justifyContent: 'space-between',
    width: 250,
    backgroundColor: '#546f',
    borderRadius: 7,
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 20,
  },
  itemView: {
    margin: 50,
    alignItems: 'center',
    alignContent: 'center',
  },
  itemTextView: {
    margin: 20,
    alignItems: 'center',
    alignContent: 'center',

    backgroundColor: 'white',
    height: 80,
    width: 200,
  },
  imageView: {
    alignItems: 'center',
    alignContent: 'center',
    width: 200,
    height: 200,
  },
});
export default CardItems;
