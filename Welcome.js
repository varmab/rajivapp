import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class Welcome extends Component{
    constructor(){
        super();

        this.state={
            clicks:0
        }
    }

    updateClicks=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }

    render(){
        return(
            <View>
                <Text onPress={this.updateClicks} style={styles.welcomeText}>Welcome to {this.props.name} - ({this.state.clicks})</Text>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    welcomeText:{
        fontSize:60
    }
})

export default Welcome;