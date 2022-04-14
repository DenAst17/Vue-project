<script>
import DefaultHeader from "../components/DefaultHeader.vue";
import axios from "axios";
import * as request from "../request.js";
import UserInfoRow from "../components/UserInfoRow.vue";
import { store } from "../store/store";
export default {
  data() {
    return {
      info: [{id: 1, name: "Vlad", email: "vlad@ukr.net"}],
      UserName: "",
      UserEmail: "",
      UserId: undefined
    };
  },
  methods: {
    fetch() {

    },
    addInfo(){
        //throw new Error("error!");
        let result;
        request.getAll("http://localhost:3000/users").then(response => {
            if(response != undefined)
            {
              store.state.info = response.data;
              console.log(store.state.info[0]);
            }
        }
        )
    },
    deleteInfo(item){
      request.deleteSingle("http://localhost:3000/users", item.id).then(response => {
        this.addInfo();
      });
    },
    postInfo(){
      request.postSingle("http://localhost:3000/users", {name: this.UserName, email: this.UserEmail}).then(response => {
        this.addInfo();
        this.UserName = "";
        this.UserEmail = "";
      });
    },
    editInfo(item)
    {
      this.UserName = item.name;
      this.UserEmail = item.email;
      this.UserId = item.id;
    },
    updateInfo(){
      if(this.UserId){
        request.updateSingle("http://localhost:3000/users", this.UserId, {name: this.UserName, email: this.UserEmail}).then(response => {
        this.UserName = "";
        this.UserEmail = "";
        this.addInfo();
        this.UserId = undefined;
      });
      }
    },
    filterInfo(){
      request.getAll("http://localhost:3000/users").then(response => {
        if(response != undefined)
        {
          store.state.info = response.data;
        }
        }).then(response => {
          if(this.UserName)
          {
            store.state.info = store.state.info.filter((item) => item.name.includes(this.UserName));            
          }
          if(this.UserEmail)
          {
            store.state.info = store.state.info.filter((item) => item.email.includes(this.UserEmail));
          }
        })
    },
    increment(){
      this.$store.commit('increment');
      
      console.log(store.state.count);
    }
  },
  components: {
    DefaultHeader,
    UserInfoRow
  },
  created(){
    this.addInfo();
  }
};
</script>

<template>
  <DefaultHeader />
  <div class = "post">
    <button @click="postInfo()">Post</button>
    <button @click="updateInfo()">Update</button>
    <button @click="filterInfo()">Filter</button>
    <button @click="increment()">Increment</button>
    Name<input v-model = "UserName"/>
    E-mail<input v-model = "UserEmail"/>
  </div>
  <table class = "people">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>E-mail</th>
    </tr>
    <template v-for="item in $store.state.info" :key="item.id">
      <UserInfoRow v-bind:user="item" @remove="user => deleteInfo(user)" @edit="editInfo"/>
    </template>
  </table>
</template>

<style>
.post{
  display:flex;
  flex-direction:column;
  width: 15%;
  margin: auto;
}
.people{
  margin: auto;
  width: 15%;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
  }
}
.calc {
  line-height: 0;
  font-size: 20px;
  display: flex;
  width: auto;
}
.calculator {
  margin: 0px auto auto 30%;
  width: auto;
}

.calculator input {
  font-size: 20px;
}
</style>
