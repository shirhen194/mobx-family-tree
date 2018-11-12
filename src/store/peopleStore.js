import { observable, computed  } from "mobx";
import { action } from 'mobx';
const axios = require('axios')


class PeopleStore {
    @observable user  = null
    
    @action getUser=async (userName)=>{
        debugger;
        const user = await axios.get(`http://localhost:4000/users/children/${userName}`)
        console.log(user.data[0])
        this.changeUser(user.data[0])
    }

    @action changeUser=(user)=>{
        this.user=user
        console.log(this.user)
    }

    @action createUser= async(user)=>{
        await axios.post(`http://localhost:4000/users/createUser`,user)
    }

}

const peopleStore = new PeopleStore();
export default peopleStore;