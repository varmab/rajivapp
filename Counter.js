import React, {Component} from 'react'

import {
    View,
    Text,
    Button,
    Image,
    StyleSheet
} from 'react-native'

class Counter extends Component{
    constructor(){
        super();

        this.state={
            count:0,
            disabled:true
        }
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            this.setState({
                disabled:false
            })
        })
    }

    decrement=()=>{
        this.setState({
            count:this.state.count-1
        },()=>{
            if(this.state.count==0){
                this.setState({
                    disabled:true
                }) 
            }
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={require('./assets/logo.png')}/>
                <Text style={styles.heading}>Counter</Text>
                <Text style={styles.countText}>{this.state.count}</Text>
                <View style={styles.buttonView}>
                    <Button onPress={this.increment} color="white" title="Increment"/>
                </View>
                <View style={styles.buttonView}>
                    <Button onPress={this.decrement} color="white" title="Decrement" disabled={this.state.disabled}/>
                </View>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        paddingTop:100,
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor:"#009688"
    },
    heading:{
        fontSize:48,
        fontWeight:"bold",
        color:"white"
    },
    countText:{
        fontSize:96,
        fontWeight:"bold",
        color:"white"
    },
    buttonView:{
        marginBottom:20,
        backgroundColor:"#36474F",
        width:"90%"
    },
    logo:{
        height:100,
        width:100,
        borderRadius:20
    }
})

export default Counter;