<template>
  <div>
    <div id='header'>
      <div id="title">
        EBM-赚闲钱
      </div>
      <div id='btns'>
        <button class='btn' v-on:click="login()">登录</button>
        <button class='btn' v-on:click="logout()">注销</button>
      </div>
    </div>
    <div id='request-list'>
      <div class='container-card-list'>
        <h3>写一个主页</h3>
        <p class='money'>赏金：0</p>
        <p>任务简单的描述: 不知道主页到底要放什么内容进取，不如等着设计师确定好主页放啥内容之后再仔细写</p>
      </div>
      <div class='container-card-list'>
        <h3>写一个主页</h3>
        <p class='money'>赏金：0</p>
        <p>任务简单的描述: 不知道主页到底要放什么内容进取，不如等着设计师确定好主页放啥内容之后再仔细写</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: function() {
    return {
      msg: "",
      content: "",
      pages: 1,
      contentTag: "",
      currentPage: 1
    };
  },
  methods: {
    /*testApi: function() {
      console.log("http://localhost:8080/" + this.content );
      this.$http.get("http://localhost:8080/" + this.content ).then(
        function(res) {
          if(res.ok) {
            this.msg = JSON.stringify(res.data, null, 4);
          }
        }, function() {
          alert("error");
        });
    },*/
    login: function(){
      alert("login")
    },
    logout: function(){
      alert("logout")
    }
  }
}
</script>

<style>

:root {
  --blue: rgb(0, 132, 255);
  --blue-hover: rgb(15, 79, 207);
  --grey-menu: rgb(88, 88, 106);
  --grey-hover: rgb(210, 210, 210);
  --grey-shadow: rgb(190, 190, 190);
  --grey-background: rgb(240, 240, 240);
}

#header {
  position: absolute;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  background-color: var(--blue);
  /*shadow*/
  box-shadow: 1px 1px 5px var(--grey-shadow);
  z-index: 100;
}

#title {
  position: absolute;
  left:0;
  top:21%;
  width: 225px;
  text-align: center;
  background-color: var(--blue);
  font-size: 1.5em;
  font-weight: lighter;
  color: white;
}

.btn{
  border-radius: 10px;
  background-color: transparent;
  border: 2px solid white;
  color: white;
}

#btns{
  position: absolute;
  right: 0;
  top: 30%;
  width: 150px;
}

#request-list{
  margin-top: 85px;
}

.container-card-list {
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding: 20px;
  /*width: calc(100vw - 275px);*/
  width: 90%;
  background-color: white;
  /*radius*/
  border-radius: 3px;
  /*shadow*/
  box-shadow: -1px 1px 5px var(--grey-shadow);
  overflow: auto;
}


</style>