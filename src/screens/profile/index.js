import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image, SafeAreaView } from "react-native";
import MainButton from "../../components/MainButton";

export default function ProfileScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem("curUser");
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  const logOut = async () => {
    await AsyncStorage.removeItem("curUser");
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  };
  useEffect(() => {
    getUserData(user);
  }, []);
  return (
    <SafeAreaView
       style={{
        flex: 1,
        backgroundColor: "white",
      }}>
        <View style={{width: "100%"}}>
          <Image
            source = {{ uri: "https://images.pexels.com/photos/301391/pexels-photo-301391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
            resizeMode = 'cover'
            style={{
              height: 228,
              width: "100%"
            }}
          />
        </View>
        
        <View style={{ flex: 1, alignItems: "center"}}>   
              <Image
                source = {{ uri: "https://i.pravatar.cc/300" }}
                resizeMode = 'contain'
                style={{
                  height: 155,
                  width: 155,
                  borderRadius: 999,
                  borderColor: 'black',
                  borderWidth: 2,
                  marginTop: -90,
                }}
              />
        </View>
        <View style={{
          flexDirection:"column",
          marginBottom:215,
          marginLeft: 20
        }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 10
            }}
          >
            Thông tin người dùng:
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "normal",
              marginTop: 10
            }}
          >
            UserName : {user && user.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "normal",
              marginTop: 10
            }}
          >
            Password: {user && user.password}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "normal",
              marginTop: 10
            }}
          >
            Email :  {user && user.email}
          </Text>
        </View>
        <View style={{alignItems: "center", justifyContent: "center"}}>
          <MainButton
            onPress={logOut}
            style={{backgroundColor: "#602B9A", marginBottom: 30, width: 200 }}
            title={"Đăng Xuất"}
          />
        </View>
    </SafeAreaView>
    //<View
    //   style={{
    //     backgroundColor: "#fff",
    //     flex: 1,
    //     width: "100%",
    //     paddingTop: StatusBar.currentHeight + 30,
    //     paddingHorizontal: 12,
    //   }}
    // >
    //   <View style={{ flex: 1, alignItems: "center" }}>
    //     {/* ảnh autu khi đăng nhập của từng user */}
    //     <Image
    //       style={{
    //         height: 120,
    //         width: 120,
    //         borderRadius: 100,
    //         marginTop: 100,
    //       }}
    //       source={{ uri: "https://i.pravatar.cc/300" }}
    //     />
      
    // </View>
  );
}
