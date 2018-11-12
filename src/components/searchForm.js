import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
class SearchForm extends Component {
    
    @observable userName = ''
 
    @action inputChange = (e)=>{
        this.userName = e.target.value;
    }

    submitForm = ()=>{
        this.props.store.getUser(this.userName)
    }

    render() {
      return (
        <div className="container">
            <h1 className="header">Search user:</h1>
          <input type="text" onChange={this.inputChange} value={this.userName} placeholder="user name .."/>
          <input type="button"  className="button" onClick={this.submitForm} value="submit"/>
        </div>
      );
   }
}

export default SearchForm;