import React, { Component } from 'react';
import SearchForm from "./searchForm";
import AddForm from "./AddForm";
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
class SearchOrAdd extends Component {

@observable show='SearchForm'

@action WhatToshow=()=>{
  if(this.show==="SearchForm"){
    return (<SearchForm />)
    }
    else if (this.show==="AddForm"){
      this.props.store.user=null
      return(<AddForm />)
    }
}

@action inputChange = (event) => {
  const target = event.target;
  const value = target.value;
  const name = target.name;
      this[name]= value
}

  render() {
    return (
      <div className="App">
        <select name="show" onChange={this.inputChange} value={this.show}>
            <option value="SearchForm">SearchForm</option>
            <option value="AddForm">AddForm</option>
        </select>
      {this.WhatToshow()}
      </div>
    );
  }
}

export default SearchOrAdd;
