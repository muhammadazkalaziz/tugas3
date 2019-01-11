import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Note extends React.Component {
  render() {
    return (
      //Use a key to keep track of each note
      <View key={this.props.keyval} >

      <Text >Nama : {this.props.val.Nama}</Text>
      <Text>Alamat: {this.props.val.Alamat}</Text>
      <Text>alat: {this.props.val.alat}</Text>
      <Text>Jumlah Hari: {this.props.val.Hari}</Text>
      <Text>Harga: {this.props.val.jumlah}{"\n"}</Text>
      
      </View>
    );
  }
}
