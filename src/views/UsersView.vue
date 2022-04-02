<script>
import DefaultHeader from "../components/DefaultHeader.vue";
import axios from "axios";
import * as request from "../request.js";
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
              this.info = response.data;
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
          this.info = response.data;
        }
        }).then(response => {
          if(this.UserName)
          {
            this.info = this.info.filter((item) => item.name.includes(this.UserName));            
          }
          if(this.UserEmail)
          {
            this.info = this.info.filter((item) => item.email.includes(this.UserEmail));
          }
        })
    }
  },
  components: {
      DefaultHeader,
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
    Name<input v-model = "UserName"/>
    E-mail<input v-model = "UserEmail"/>
  </div>
  <table class = "people">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>E-mail</th>
    </tr>
    <tr v-for="item in info" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.name}} </td>
      <td>{{item.email}} </td>
      <td><button @click="deleteInfo(item)">X</button> </td>
      <td><button @click="editInfo(item)">edit</button> </td>
    </tr>
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
