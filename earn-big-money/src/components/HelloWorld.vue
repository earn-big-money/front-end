<template>
  <div id="example-1">
    <div id="title">
    </div>
    <div>
      <input id="search" placeholder="搜索" v-model="content"></input>
      <button v-on:click="testApi()">Search</button>
    </div>
    <div id="con">
      <textarea v-model="msg" rows="30" cols="100"></textarea>
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
    testApi: function() {
      console.log("http://localhost:8080/" + this.content );
      this.$http.get("http://localhost:8080/" + this.content ).then(
        function(res) {
          if(res.ok) {
            this.msg = JSON.stringify(res.data, null, 4);
          }
        }, function() {
          alert("error");
        });
    },
  }
}
</script>

<style>
#con {
  margin-top: 10px;
}
</style>