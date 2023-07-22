import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StatusBar, Text, View, Image, SafeAreaView } from 'react-native';
import PhoneItem from '../../components/PhoneItem';
import data from '../../data/phone.json';
import data1 from '../../data/data.json';
import styles from './styles';
import Data from '../../components/data';
import Carousel from '../../components/Carousel';
import { dummyData } from '../../data/data';

export default function HomeScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const renderItem = ({ item, index }) => {
    return <PhoneItem item={item} index={index} navigation={navigation} />;
  };
  const renderitem = ({item, index}) => {
    return <Data item={item} index={index} navigation={navigation} />;
  }
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem('curUser');
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#C79BF8',
    }}
      >
      <View>
        <ScrollView
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 12,
            marginTop: StatusBar.currentHeight + 10,
            backgroundColor: '#C79BF8',
          }}
        >
          <View style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            backgroundColor: "#C79BF8",
          }}>
            <Image style={{
              height: 80,
              width: 100,
              resizeMode: ""
            }}
            source={require('../../../assets/THPHONE_reverse.png')}
          />
            <Text style={{ 
              marginTop: 20, 
              fontSize: 20, 
              color: "#ffffff" }}>
                {`Chào, ${user && user.name
          }!`}
            </Text>
          </View>
          
          <View>
            <Carousel data = {dummyData}/>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.title}>Điện Thoại HOT</Text>
            <FlatList 
              data={data}
              horizontal
              showsHorizontalScrollIndicator={true}
              keyExtractor={(item, index) => item + index}
              renderItem={renderItem}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.title}>Có thể bạn sẽ thích</Text>
            <FlatList
              data={data1}
              vertical
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => item + index}
              renderItem={renderitem}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
