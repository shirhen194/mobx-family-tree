import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import UserBox from './UserBox';

@inject("store")
@observer
class FamilyTree extends Component {

    render() {
      if(this.props.store.user){
        console.log(this.props.store.user.userName)
      }
      return (
        <div className="container">
        {this.props.store.user? <h3>Parent:</h3> : null}
        {this.props.store.user ? this.props.store.user.parent.map((u,i)=>{
          return <UserBox user={u} key={i} />
        }): null}
        <br />
        {this.props.store.user? <h3>Me:</h3> : null}
        {this.props.store.user ? <UserBox user={this.props.store.user} /> : null}
        {this.props.store.user? <h3>Children:</h3> : null}
        <div id="users">
        {this.props.store.user ? this.props.store.user.child.map((u,i)=>{
          return <UserBox user={u} key={i} />
        }): null}
        </div>
        </div>
      );
   }
}

export default FamilyTree;