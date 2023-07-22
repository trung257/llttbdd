import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import PhoneItemHorizontal from "../../components/PhoneItemHorizontal";
import MainInput from "../../components/MainInput";
import PhoneData from "../../data/phone.json";
export default function SearchScreen({ navigation }) {
  const [textSearch, settextSearch] = useState("");
  const renderResult = () => {
    const data = PhoneData.filter((value) =>
      value.name.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())
    );
    const renderItem = ({ item, index }) => (
      <PhoneItemHorizontal item={item} navigation={navigation} />
    );
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10, color: "#602B9A" }}>
          KẾT QUẢ
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: StatusBar.currentHeight + 20,
        paddingHorizontal: 12,
      }}
    >
      <MainInput
        value={textSearch}
        onChangeText={settextSearch}
        placeholder={"Nhập để tìm kiếm..."}
        title={"TÌM KIẾM"}
        style={{}}
      />
      {textSearch.trim().length > 0 ? (
        renderResult()
      ) : (
        <>
          <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10, color: "#602B9A" }}>
            GỢI Ý CHO BẠN
          </Text>
        </>
      )}
    </View>
  );
}
