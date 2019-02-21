import React, { Component } from 'react';
import './App.css';
import DishesList from "./components/dishesList/dishesList";
import OrderPage from "./components/orderPage/orderPage";
import AddNewDish from "./components/addNewDish/addNewDish";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DishesList/>
        <OrderPage/>
        <AddNewDish/>
      </div>
    );
  }
}

export default App;
