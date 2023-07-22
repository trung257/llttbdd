import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function Data(props) {
  const { item, navigation, index } = props;
  const goToDetail = () => {
    if (navigation) {
      navigation.navigate('PhoneDetailScreen', {
        item: item,
      });
    }
  };
  return (
    <TouchableOpacity
      style={{ ...styles.container, marginLeft: index == 0 ? 12 : 22 }}
      onPress={goToDetail}
    >
      <Image style={styles.imageStyle} source={{ uri: item?.image }} />
      <View style={styles.infoContainer}>
        <Text
          numberOfLines={1}
          style={{
            color: '#602B9A',
            fontWeight: 'bold',
            marginVertical: 8,
          }}
        >
          {item?.name}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: '#000', fontWeight: 'bold', flex: 1 }}>
            {item?.price} VND
          </Text>
          <View
            style={{
              padding: 2,
              backgroundColor: '#602B9A',
              borderRadius: 8,
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: '#ffffff',
              }}
              source={require('../../assets/Basket1.png')}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Data;

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 200,
    borderRadius: 14,
    resizeMode: 'contain',
  },
  container: {
    width: 360,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginLeft: 12,
    flex: 1,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  infoContainer: {
    paddingHorizontal: 12,
    marginBottom: 12,
  },
});
