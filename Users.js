import React, { Component } from 'react'

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    Image,
    Platform
} from 'react-native'

const User = (props) => {
    return (<View style={styles.userView}>
                <Image style={styles.avatar}></Image>
                <Text style={styles.userName}>{props.user.name}</Text>
                <Text style={styles.contactInfo}></Text>
                <Image style={styles.callButton}></Image>
            </View>)
}

class Users extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((users)=>{
            this.setState({
                users,
                loading:false
            })
        })
        .catch((err)=>{
            this.setState({
                loading:false,
                error:true
            })
        })
    }

    render() {
        if(this.state.loading==true){
            return(
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
        if(this.state.error==true){
            return(
                <View style={styles.container}>
                    <Text>Sorry, Failed to load users</Text>
                </View>
            )
        }
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.heading}>Users</Text>
                {
                    this.state.users.map((user) => {
                        return <User key={user.id} user={user} />
                    })
                }
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"flex-start",
        alignItems:"stretch"
    },
    heading: {
        height:116,
        backgroundColor:"#50E3C2",
        color:"white",
        fontSize:50,
        fontWeight:"bold",
        paddingTop:50,
        paddingLeft:130
    },
    userView: {
        
    },
    userName: {
        fontSize:40,
        fontWeight:"bold",
        paddingLeft:10,
        paddingTop:10
    }
})

export default Users;