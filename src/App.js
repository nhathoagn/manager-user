import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import AddUser from "./Components/AddUser/AddUser";
import TableData from "./Components/TableData/TableData";
import {useState} from "react";
import  DataUser from "./db.json"
class App extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            data: DataUser,
            searchText: ""
        }
    }
    hideButton = () =>{
        this.setState({
            isShow: !this.state.isShow
        })
    }
     getText = (text) =>{
        this.setState({
            searchText: text
        })
     }
   render() {
       var result = [];
       this.state.data.forEach( (item) =>{
           if (item.name.indexOf(this.state.searchText) !== -1){
               result.push(item)
           }
       })
      // let result =  this.state.data.filter( (item) =>º
      //      item.name ===  this.state.searchText
      //  )
       console.log(result)
       return (
           <div className="App">
               <Header/>
               <div className="searchForm">
                   <div className="container">
                       <div className="row">
                           <Search hideButton={ () => this.hideButton()}  state={this.state.isShow} gettext={ (text) => this.getText(text)}/>
                           <TableData data={result}/>
                           <AddUser showForm={this.state.isShow}/>
                       </div>
                   </div>
               </div>
           </div>
       );
   }

}

export default App;
