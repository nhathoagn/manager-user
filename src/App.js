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
            data: DataUser
        }
    }
    hideButton = () =>{
        this.setState({
            isShow: !this.state.isShow
        })
    }

   render() {

       return (
           <div className="App">
               <Header/>
               <div className="searchForm">
                   <div className="container">
                       <div className="row">
                           <Search hideButton={ () => this.hideButton()}  state={this.state.isShow}/>
                           <TableData data={this.state.data}/>
                           <AddUser showForm={this.state.isShow}/>
                       </div>
                   </div>
               </div>
           </div>
       );
   }

}

export default App;
