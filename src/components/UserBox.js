import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { observer, inject} from 'mobx-react';
import AddForm from './AddForm';

@inject("store")
@observer
class UserBox extends Component {

  @observable  showDialog=false

  @action addChild=()=>{
    this.showDialog=!(this.showDialog)
  }

  changeUser=()=>{
  this.props.store.getUser(this.props.user.userName)
  }

    render() {
      console.log(this.props.user)
      return (
        <div className="container">
        <div id="users">
        <div class="polaroid">
        <img className="userImg" src={this.props.user.imgUrl} alt="" onClick={this.changeUser} />
        <div class="name">
        <h2>{this.props.user.userName}</h2>
        <button type="button" className="button" onClick={this.addChild}>Add child</button>
        </div> </div>
        </div>
        {this.showDialog? <div id="myModal" className="modal">
                <div className="modal-content"><span className="close" onClick={this.addChild}>&times;</span>
                <AddForm parentId={this.props.user.id} addChild={this.addChild}/></div></div>:null}
        </div>
      );
   }
}

export default UserBox;