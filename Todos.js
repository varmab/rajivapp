import React, {Component} from 'react'

import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

const Todo=(props)=>{
    return(
        <View style={styles.todoView}>
            <Text style={styles.todoText}>{props.todo}</Text>
            <View style={styles.removeButtonView}>
                <Button title="x" color="white" onPress={()=>props.removeTodo(props.todo)}/>
            </View>
        </View>
    )
}

class Todos extends Component{
    constructor(){
        super();
        this.state={
            todos:[],
            todo:''
        }
    }

    onTodoChange=(todo)=>{
        this.setState({
            todo:todo
        })
    }

    addTodo=()=>{
        this.setState({
            todos:[
                ...this.state.todos,
                this.state.todo
            ],
            todo:''
        })
    }

    removeTodo=(todo)=>{
        this.setState({
            todos:this.state.todos.filter((t)=>{
                return t !== todo
            })
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.heading}>Todos</Text>
                <TextInput style={styles.input} value={this.state.todo}   onChangeText={this.onTodoChange} autoCorrect={false} placeholder="Enter todo" placeholderTextColor="grey"/>
                <View style={styles.addButtonView}>
                    <Button title="Add Todo" color="white" onPress={this.addTodo}/>
                </View>
                <View style={styles.todosView}>
                {
                    this.state.todos.map((todo,index)=>{
                        return <Todo key={index} todo={todo} removeTodo={this.removeTodo}/>
                    })
                }
                </View>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor:"#3E50B4"
    },
    heading:{
        fontSize:50,
        fontWeight:"bold",
        paddingTop:100,
        color:"white"
    },
    input:{
        height:40,
        borderColor:"white",
        borderWidth:1,
        width:"80%",
        color:"white",
        fontSize:25
    },
    todoText:{
        color:"white",
        fontSize:30,
        paddingLeft:10
    },
    todoView:{
        marginTop:10,
        borderColor:"white",
        borderWidth:1,
        height:40,
        borderRadius:20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    todosView:{
        width:"80%",
        justifyContent:"space-between"
    },
    addButtonView:{
        marginTop:10,
        backgroundColor:"#36474F",
        width:"50%"
    },
    removeButtonView:{
        width:"10%",
        marginRight:10
    }
})

export default Todos;