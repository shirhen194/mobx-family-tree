import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
class AddForm extends Component {
    
    @observable user = {userName: '', imgUrl:'',parentId:''}
 
    @action inputChange = (e)=>{
        this.user[e.target.name] = e.target.value;
    }

    submitForm = ()=>{
        if(this.props.parentId){
            this.user.parentId = this.props.parentId;
            this.props.addChild()
            this.props.store.createUser(this.user).then(()=>this.props.store.getUser(this.props.store.user.userName))
        }
        else{
            this.props.store.createUser(this.user)
        }
        
        
    }

    render() {
      return (
        <div className="container">
                    <h3 className="header">Add User:</h3>
          <input type="text" name="userName" onChange={this.inputChange} value={this.user.userName} placeholder="userName"/>
          <input type="text" name="imgUrl" onChange={this.inputChange} value={this.user.imgUrl}  placeholder="imgUrl"/>
          <button type="button" class="button" onClick={this.submitForm} value="submit">Add User</button>
        </div>
      );
   }
}

export default AddForm;
