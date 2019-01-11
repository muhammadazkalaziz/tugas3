import React, { Component } from 'react';
import RadioButton from 'radio-button-react-native';
import { AppRegistry, StyleSheet, Button, Text, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import Note from './crack';
export default class HitungLuasSegitiga extends Component {
  constructor(props){
    super(props)
    this.state = {
      nama:'',
      alamat:'',
      jumlah:0,
      hari: 0,
      alat:0,
      alat1:0,
      value: '',
      value1:0,
      Tenda:60000,
      Carrier:25000,
      Matras:7000,
      Kompor:10000,
      Sepatu:15000,
      Jaket:15000,
      text: '',
      noteArray: [],
      noteText: '',
      noteText1:''
    }
    this.onSelect = this.onSelect.bind(this)
  }
  
   onSelect(value1){
     
        this.setState({
        text: `value1: ${value1}`
        })
    }
  
  handleOnPress(value){
    this.setState({value:value})
}
  
  addNote(){
    if (this.state.value  === 'Tenda') {
         this.state.noteArray.push({
                'Nama': this.state.nama,
                'Alamat': this.state.alamat,
                'alat' : this.state.value,
                'Hari'  : this.state.hari,
                'jumlah': (this.state.Tenda*this.state.hari)})}
        
        else if (this.state.value  === 'Carrier') {
           this.state.noteArray.push({
                'Nama': this.state.nama,
                'Alamat': this.state.alamat,
                'alat' : this.state.value,
                'Hari'  : this.state.hari,
                'jumlah': (this.state.Carrier*this.state.hari)})}
                
        else if (this.state.value  === 'Matras') {
           this.state.noteArray.push({
                'Nama': this.state.nama,
                'Alamat': this.state.alamat,
                'alat' : this.state.value,
                'Hari'  : this.state.hari,
                'jumlah': (this.state.Matras*this.state.hari)})}
                
        else if (this.state.value  === 'Kompor') {
           this.state.noteArray.push({
                'Nama': this.state.nama,
                'Alamat': this.state.alamat,
                'alat' : this.state.value,
                'Hari'  : this.state.hari,
                'jumlah': (this.state.Kompor*this.state.hari)})}    
                
        else if (this.state.value  === 'Sepatu') {
           this.state.noteArray.push({
                'Nama': this.state.nama,
                'Alamat': this.state.alamat,
                'alat' : this.state.value,
                'Hari'  : this.state.hari,
                'jumlah': (this.state.Sepatu*this.state.hari)})}
                
        else if (this.state.value  === 'Jaket') {
           this.state.noteArray.push({
                'Nama': this.state.nama,
                'Alamat': this.state.alamat,
                'alat' : this.state.value,
                'Hari'  : this.state.hari,
                'jumlah': (this.state.Jaket*this.state.hari)})}
      
      this.setState({noteArray: this.state.noteArray})
      this.setState({nama: ''});
      this.setState({alamat: ''});
    }

  render() {
    
    let notes = this.state.noteArray.map((val,key) => {
      return <Note
      key={key}
      keyval={key}
      val={val}
      deleteMethod = {() => this.deleteNote(key)}/>
    });
    
    return (  
      
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>

        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Rental Alat Outdoor AZKAL
          </Text>
         </View>
        
        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Nama Peminjam"
              onChangeText={(nama)=>this.setState({nama})}
              value={this.state.nama}
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Alamat Peminjam"
              onChangeText={(alamat)=>this.setState({alamat})}
              value={this.state.alamat}
            />

       </View>
       <View>
           <Text style = {{marginTop: -15, fontSize: 20, color: 'black', textAlign:'center'}} >
            Pilih alat
          </Text>
         </View>
     
       <View style={{padding: 10, backgroundColor:'#e3f2fd'}}>
               <RadioButton currentValue={this.state.value} value={'Tenda'} value1={100} onPress={this.handleOnPress.bind(this)} onSelect = {(value1) => this.onSelect(value1)}>
                <Text>Tenda</Text>
                 </RadioButton>
                      
                 <RadioButton currentValue={this.state.value} value={'Carrier'} value1={200} onPress={this.handleOnPress.bind(this)} onSelect = {(value1) => this.onSelect(value1)}>
                 <Text>Carrier</Text>
                 </RadioButton>
                 
                 <RadioButton currentValue={this.state.value} value={'Matras'} value1={300} onPress={this.handleOnPress.bind(this)} onSelect = {(value1) => this.onSelect(value1)}>
                 <Text>Matras</Text>
                 </RadioButton>
        </View>
        
        <View style={{marginLeft:180,marginTop:-92,padding: 10, backgroundColor:'#e3f2fd'}}>
               <RadioButton currentValue={this.state.value} value={'Kompor'} value1={400} onPress={this.handleOnPress.bind(this)} onSelect = {(value1) => this.onSelect(value1)}>
                <Text>Kompor</Text>
                 </RadioButton>
                      
                 <RadioButton currentValue={this.state.value} value={'Sepatu'} value1={500} onPress={this.handleOnPress.bind(this)} onSelect = {(value1) => this.onSelect(value1)}>
                 <Text>Sepatu</Text>
                 </RadioButton>
                 
                 <RadioButton currentValue={this.state.value} value={'Jaket'} value1={600} onPress={this.handleOnPress.bind(this)} onSelect = {(value1) => this.onSelect(value1)}>
                 <Text>Jaket</Text>
                 </RadioButton>
        </View>
        <View style={{marginTop:5,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Jumlah Hari Pinjam"
              onChangeText={(hari)=>this.setState({hari})}
              keyboardType = 'numeric'
            />
            <Button
              onPress={this.addNote.bind(this)}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
/>


       </View>

        <View style={{margin:-15, backgroundColor:'#90caf9'}}>
          <ScrollView>
            {notes}
          </ScrollView>
          <Text ></Text>
         </View>
      
   </View> 

    );
  }

}






AppRegistry.registerComponent('AppForm2', () => HitungLuasSegitiga);